# Inline Code Creator Roadmap

Inline Code Creator is a notes-first desktop app for students in introductory programming courses. You write formatted notes, drop in a runnable Python code cell wherever a concept needs an example, and see the output right beneath it. Everything runs locally, with no server and no account.

This roadmap says where the project is, where it is going, and where you can help. It is honest about what is planned and what is only a dream. Every item is labeled so you can tell the difference.

**Last updated:** November 2026 · **Design doc:** `docs/design-doc.md`

## How to read this roadmap

| Label | Meaning |
|---|---|
| **Committed** | In the current plan and expected to ship by the December 14 demo |
| **Stretch** | In the plan, but only if time allows. Not promised |
| **Next** | Wanted after the semester, with a clear shape. Not scheduled |
| **Dream** | A good idea with no plan yet. Might never happen |

## Where we are now

The project is a one-person effort during a single semester, so the scope is deliberately small. The goal of the MVP is to test one idea: that a code cell which is visually distinct, collapsible, and runnable in place makes programming notes easier to write and study from.

- **Milestone 1 (Nov 18):** A student opens the app, types Python into a code cell, clicks Run, and sees the output beneath it, offline.
- **Milestone 2 (Dec 2):** The code cell becomes a real editor block, and runaway code (an infinite loop) is stopped safely.
- **Dec 14 demo:** Save and reopen a note with prose and code intact.

See the [project board](../README.md) for live status.

## Committed (by December 14)

- Run Python locally in the app with Pyodide, with output beneath the cell
- Code cell as a real, visually distinct editor block that grows as you type
- Time limit and safe restart for code that never finishes
- Save and reopen a note with prose and code unaltered

## Stretch (December, if time allows)

These are good places to start helping, because they are small and self-contained.

- **Headings and lists.** H1–H3 buttons and bulleted and numbered lists in the toolbar.
- **Collapse and subject line.** Fold a code cell down to a one-line summary and expand it again.
- **Save-failure handling.** A visible unsaved warning and a retry when a save fails.
- **Installer and release.** A packaged installer published on GitHub Releases.

## Next (after the MVP)

### Autosave
The MVP saves explicitly. Autosave is better for students but risks overwriting something they did not mean to save, so it needs a careful design.
**How to help:** Write up options and trade-offs in a design discussion before any code.

### Test against more real course code
The biggest early risk is whether Pyodide runs the code students actually write. A larger set of real CS 110 / CS 111 style snippets would show where it breaks.
**How to help:** Add a sample snippet to the compatibility set, run it through the app, and log the result. No Electron or editor knowledge is needed.

### Packaging for more platforms
Installers for Windows, macOS, and Linux, tested on real machines.
**How to help:** If you have a machine the project is not tested on, try the installer and report what happens.

### Note search and organization
Finding an example across many notes is a core study task. A search box, plus folders or tags, would help once there are enough notes to need it.

## Dreams

These are ideas, not plans. They were set aside on purpose, and the reasons are written down so nobody has to guess.

### More languages
Python only for now. Supporting others means a different execution engine for each, and the first target courses teach Python.
**Why not now:** Each language is its own engine, install size, and safety problem.

### Real-time collaboration
Two students editing the same note at once, such as a study group working from shared notes.
**Why not now:** It needs a sync layer and a server, which would break the "no accounts, no server" promise. The MVP does not need it to test the core idea.

### A Google Docs add-on
Putting the code cell inside Google Docs itself.
**Why not now:** Apps Script limits interactive controls to a sidebar or dialog, so the collapse control cannot sit beside the content it controls. The design doc records the spike and the reasoning. It would be worth revisiting if Docs ever supports embeddable interactive blocks.

## How to get involved

1. Read `CONTRIBUTING.md` for how the project works, and `docs/git-standards.md` for the definition of done.
2. Browse issues labeled [`good first issue`](https://github.com/kinggreyson/InlineCodeCreator/labels/good%20first%20issue). Each one includes where to look and how to confirm it works.
3. Not sure where to start? Open an issue describing what you would like to try, and it will get triaged.