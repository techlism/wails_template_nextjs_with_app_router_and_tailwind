# README

## About

This is an unofficial Wails template for creating a new project with the following set of tools :

1. Nextjs (React under the hood) with App Router
2. TypeScript
3. TaillwindCSS

You can configure the project by editing `wails.json`. More information about the project settings can be found
here: <https://wails.io/docs/reference/project-config>

P.S. Not yet tested thoroughly. Compiled on Windows. Please report/contribute any issues.

## Usage

To create a new project using this template, run the following command:

```bash
wails init -n "Name of your Project" -t https://github.com/techlism/wails-nextjs-ts-tailwind
```

## Live Development

To run in live development mode, run `wails dev` in the project directory. This will run a Vite development
server that will provide very fast hot reload of your frontend changes. If you want to develop in a browser
and have access to your Go methods, there is also a dev server that runs on <http://localhost:3000>. Connect
to this in your browser, and you can call your Go code from devtools.

## Building

To build a redistributable, production mode package, use `wails build`.
