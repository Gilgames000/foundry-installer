# foundry-installer

A simple Node.js installer for the [Foundry](https://getfoundry.sh) suite of tools. Can be used to install `forge` (and the other tools) globally or within your local package to e.g. automate package scripts.

## Installation
To install locally:
```bash
$ npm install -D foundry-installer
```

To install globally:
```bash
$ npm install -g foundry-installer
```

## Installed executables
- forge
- anvil
- cast

## Usage
You can use `foundry` in your package scripts like this:
```js
// package.json:

{
  ...
  "scripts": {
    "build": "forge build"
  }
}
```

Alternatively, you can run the local `forge` executable using `npx`:
```bash
$ npx forge build
```

If you installed the package globally it should be available in your PATH and you should be able to just run the commands from your terminal emulator.
