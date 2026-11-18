import { ElectronAPI } from '@electron-toolkit/preload'

interface NoteResult {
  ok: boolean
  reason?: string
}

interface Api {
  saveNote(note: unknown): Promise<NoteResult>
  loadNote(id: string): Promise<NoteResult>
}

declare global {
  interface Window {
    electron: ElectronAPI
    api: Api
  }
}
