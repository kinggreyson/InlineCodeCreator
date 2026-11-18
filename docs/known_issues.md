# Known Issues

What doesn't work yet in Inline Code Creator, when it bites, and what to do about it. This list covers the Milestone 1 build. Each entry says what happens, when it shows up, any workaround, and where it is tracked.

## Throwaway corners (Milestone 1 scaffolding)

These are shortcuts taken on purpose to get a working slice. They are not the intended design.

| What happens | When it bites | Workaround | Planned fix |
|---|---|---|---|
| **An infinite loop freezes the whole window.** Python runs on the UI thread. | Running code that never finishes, such as `while True: pass`. | Close the app. | Web Worker plus a time limit and restart (Milestone 2, issue #43). |
| **Nothing is saved.** Closing the app loses the code. | Any time you close or restart the app. | Copy your code somewhere before closing. | Save and reopen (Milestone 4, issue #44). The save and load IPC channels exist but return "not implemented." |
| **The code cell is a plain text area,** not an editor block. No auto-grow, collapse, subject line, or formatting. | You write long code or want to fold a cell away. | Drag the bottom edge of the text area to make it taller. | Real editor block (Milestone 2, issue #29). |

## Deliberate cuts

Left out of Milestone 1 on purpose. See `docs/roadmap.md` for where each one is headed.

| What's missing | Detail |
|---|---|
| **Python packages beyond the standard library** | Importing something like `numpy` fails with an error. Only the standard library is bundled. |
| **`input()`** | Reading typed input from the cell does not work. |
| **Automated tests** | There is no test suite yet. `npm run typecheck` is a check that exists. There's also a suite of Python code segments you can test in the compiler. Found in (Code Tests)[]
| **Platforms other than Windows** | Built and tested on Windows only. macOS and Linux should work but are untried. |

## Expected behavior that can look like a bug

- **The first Run after launch takes a few seconds** while Python loads. Later runs are fast.
- **A `SharedArrayBuffer` warning in DevTools.** It comes from Node's own startup code in development and does not affect the app.

## Reporting a new issue

Please open a Bug Report issue with what you did, what you expected, what happened instead, and your operating system. Steps to reproduce help most.