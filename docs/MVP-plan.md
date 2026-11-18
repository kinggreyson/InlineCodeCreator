# MVP Plan: Inline Code Creator (M1, Nov 18 demo)

**Slice statement:** On Nov 18 we will demo: a student opens the app, types Python into a code cell, clicks Run, and sees the printed output or error beneath it, with no internet connection.

Tracker: [project board](../README.md) · Milestone: M1 "Bundle Electron and Pyodide"

## 1. What's in

The thinnest end-to-end slice, walkable from launch to output:

- Electron + React app shell (#25)
- Bundle Pyodide and load it offline (#26)
- Plain code cell that runs Python and shows output, including Python errors (#27)
- Measure install size and cold-start time and record them in `docs/pyodide-findings.md`
- Demo confirmation: rehearsal from a fresh clone plus a backup recording (#28)

## 2. What's deferred

Moved to M2 or later, without apology:

- Code cell as a real Tiptap editor block, auto-grow, collapse and subject line (M2)
- Web Worker and run time limit (M2)
- Save and reopen, persistence, installer (M3/M4, see `docs/roadmap.md`)
- Docs-style formatting (stretch)

**Throwaway corners** (scaffolding, not structure; also listed in `docs/known-issues.md`):

- The cell is a plain text area, not an editor block
- Python runs on the UI thread, so an infinite loop will freeze the app
- Nothing is saved; closing the app loses the code
- No styling beyond what is needed to tell code from output

## 3. Risk it addresses

From the design doc's risk register, M1 retires the two technical risks:

| Risk | Retired when |
|---|---|
| Pyodide may not cover what an intro assignment needs | 3 real Python code snippets run correctly in the cell, with failures (if any) logged and explained |
| Electron + Pyodide may mean a large install and slow first launch | Install size and cold-start time are measured, recorded, and under the thresholds below |

**Thresholds (my starting bars; adjust after the first measurement):** cold start under 10 seconds to first successful Run; packaged install under 250 MB.

## 4. Demo plan

**Claims, ranked (most needed first):**

1. **Technical:** Python runs locally, offline, inside the Electron app. A mockup could not show this, and the whole product depends on it.
2. **Usability:** A person who has not seen the app can type code and get output. (Traces to the design doc's "insert and run" goal and CP2's success criteria.)
3. **Need:** The output appears on the same page as the code, with no second window. This is the first visible piece of the "study without leaving the app" need.

**Falsifier:** If any of the 3 assignments fails for a reason inherent to Pyodide, or cold start or install size misses its threshold, or the unaided tester cannot run code within 30 seconds, then something is wrong with the execution decision or the first-run experience. That result reopens the Pyodide choice in design doc §6.

**Demo script (three lines):**

1. Launch the app with Wi-Fi off.
2. Type out a program in Python in the code cell and click Run; the output appears beneath it.
3. Run a snippet with a mistake; the error appears in the output area and the app keeps working.

**Fallback:**

- *Pre-staged:* app already built, sample snippets in a file ready to paste, Wi-Fi already off, and a clean launch tested on the demo machine.
- *If the live demo misbehaves:* run from source in dev mode on the same machine.
- *Declared last resort:* a recorded clip of the full flow.