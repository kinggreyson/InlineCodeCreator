import { copyFile, mkdir, readdir } from 'node:fs/promises'
import { join } from 'node:path'

const src = 'node_modules/pyodide'
const dest = 'src/renderer/public/pyodide'
const skip = /\.(md|html|d\.ts|whl|map)$|^package\.json$/

await mkdir(dest, { recursive: true })
for (const entry of await readdir(src, { withFileTypes: true })) {
  if (!entry.isFile() || skip.test(entry.name)) continue
  await copyFile(join(src, entry.name), join(dest, entry.name))
}