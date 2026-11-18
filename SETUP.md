# Setting up Inline Code Creator

This document will show you how to get the Inline Code Creator running on your machine so you can start contributing. If you run into any issues with setting it up or see any areas where the doc could use an update please open an issue, and a maintainer will be with you.

**Status** This project is in early development, working through milestone 1 (see the milestones in docs/design.md). The app currently runs Python in a single code cell. Features like saving notes are still on the roadmap (docs/roadmap.md)

## What you need
- Git: clone the repository and submit pull requests
- Node.js 22.12 or newer, including npm. The desktop app is built on Electron and its tooling runs on Node. The project is developed on Node 24, so if you hit odd build errors on an older version, upgrade first
- A code editor: We use VS code, but other editors work.

 You do not need to install Python. The Python engine (Pyodide) will be bundled with the app, so code runs on your own machine without a seperate install.

 The project has been developed and tested on Windows so far. macOS and Linux should work but haven't been tried yet. If you try one, please leave a note on how it went.

## Get the code

Run these commands in a terminal:

```
git clone https://github.com/kinggreyson/InlineCodeCreator.git
cd InlineCodeCreator
```

## Install Dependencies

```
npm install
```

This takes a few minutes the first time. You will see deprecation warnings and a vulnerability count at the end. Those come from build tooling and are expected, so you don't need to run npm audit fix.

## Run the app

```
npm run dev
```

An Electron window opens with a code cell. Your code changes reload automatically while this is running.

Always start the app through npm run dev rather than calling electron directly. The dev command first copies the Pyodide files into the app, and the app can't run Python without them.

## Check that it works
1. Run the `'print("hello world")'` placeholder to confirm it works. You should see hello world beneath the cell.
2. Try `print(1/0)`. The error should appear in red, and the app should keep working.
3. `Turn off your internet connection` and run it again. It should still work, because everything runs locally.
4. Try code snippets from the [Sample Code](https://github.com/kinggreyson/InlineCodeCreator/blob/main/docs/sample_code.md) to confirm more complex code works

Note: The first run after the app starts takes a few seconds while Python loads. Later runs are fast.

## Where things are

| Folder | What it holds |
|---|---|
| `src/main` | The Electron main process (window setup and IPC handlers) |
| `src/preload` | The bridge between the main process and the page |
| `src/renderer` | The React app, including the code cell and the Pyodide loader |
| `scripts` | Build helper scripts, such as the one that copies Pyodide |
| `docs` | Design, roadmap, standards, and findings |

## Useful commands

The exact list is in the `scripts` section of `package.json`. The ones you will use most:

| Command | What it does |
|---|---|
| `npm run dev` | Run the app in development mode |
| `npm run typecheck` | Check TypeScript types |
| `npm run format` | Format the code with Prettier |
| `npm run build` | Build the app for production |

## Where to go next
- README.md: summary of the project
- docs/design.md: how it's built and why
- docs/git-standards.md: how changes get in
- docs/contributing.md: how to help