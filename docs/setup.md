# Setting up Inline Code Creator

This document will show you how to get the Inline Code Creator running on your machine so you can start contributing. If you run into any issues with setting it up or see any areas where the doc could use an update please open an issue, and a maintainer will be with you.

**Status** This project is on milestone 1 in early development (see the milestones in docs/design.md). The steps below describe setup, considering it's still in the early stages, several topics are marked as todo and will be among the first topics addressed by the team. 

## What you need
- Git: clone the repository and submit pull requests
- Node.js [TODO:version], including npm. The desktop app is built on Electron, which runs on Node.
- A code editor: We use VS code but other editors work also.

Note: You do not need to install Python. The Python engine (Pyodide) will be bundled with the app, so code runs on your own machine without a seperate install.

## Get the code

Run these commands in your editor of choice

git clone https://github.com/kinggreyson/InlineCodeCreator.git
cd InlineCodeCreator

## Install Dependencies

npm install

## Run the app

npm start

[TODO] Before milestone 1 this step will not work. The first stage is bundling Electron with Pyodide to set the foundation
Note: Based on conducted research first launch will take longer than later ones as Python engine loads.

## Where to go next
- README.md: summary of the project
- docs/design.md: how it's built and why
- docs/git-standards.md: how changes get in
- docs/contributing.md: how to help