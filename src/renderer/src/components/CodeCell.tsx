import { useState } from 'react'
import { runPython } from '../pyodide'

export default function CodeCell(): React.JSX.Element {
  const [code, setCode] = useState('print("hello world")')
  const [output, setOutput] = useState<string | null>(null)
  const [isError, setIsError] = useState(false)
  const [running, setRunning] = useState(false)

  async function handleRun(): Promise<void> {
    setRunning(true)
    const result = await runPython(code)
    setOutput(result.output)
    setIsError(result.error)
    setRunning(false)
  }

  return (
    <div className="code-cell">
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        spellCheck={false}
        rows={8}
      />
      <button onClick={handleRun} disabled={running}>
        {running ? 'Running...' : 'Run'}
      </button>
      {output !== null && (
        <pre className={isError ? 'output error' : 'output'}>{output || '(no output)'}</pre>
      )}
    </div>
  )
}
