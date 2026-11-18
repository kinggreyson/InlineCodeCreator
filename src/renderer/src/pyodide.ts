import { loadPyodide, type PyodideInterface } from "pyodide";
//import { PyDict } from "pyodide/ffi";

let pyodidePromise : Promise<PyodideInterface> | null=null;

export function getPyodide(): Promise<PyodideInterface>{
    if (!pyodidePromise)
    {
        pyodidePromise = loadPyodide({
            indexURL: new URL('./pyodide/', window.location.href).href
        }).catch((e) => {
            pyodidePromise = null // Allows a retry after a failed load
            throw e
        })
    }
    return pyodidePromise;
}

export type RunResult = { output: string; error: boolean }

export async function runPythonNow (code : string): Promise<{output: string; error: boolean}> {
    let output = '';
    try {
        const pyodide = await getPyodide();
        pyodide.setStdout({batched: (text) => (output += text + '\n') }) 
        pyodide.setStderr({batched: (text) => (output += text + '\n') })
        await pyodide.runPythonAsync(code)
        return {output, error: false}
    }
    catch(e) {
        return {output: String(e), error: true}
    }    
}

//Queue the runs so two run click don't share a stdout.
let queue: Promise<unknown> = Promise.resolve()

export function runPython(code: string): Promise<RunResult> {
    const result = queue.then(() => runPythonNow(code))
    queue = result;
    return result;
}