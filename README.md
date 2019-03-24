# Page Objects Builder

Assists construction of Page Objects for automated testing (e.g. with Selenium). The plugin targets the Firefox, Chrome and Edge browsers (and Opera, in theory, but not tested).

# Development

The extension is built using [webextension-toolbox](https://github.com/HaNdTriX/webextension-toolbox)

Below are useful commands for building (build) and debugging (dev) the extension. See the docs link above for more information on the build tooling.

## Install

	$ npm install

## Development

    webextension-toolbox dev chrome
    webextension-toolbox dev firefox
    webextension-toolbox dev edge

## Build

    npm run build chrome
    npm run build firefox
    npm run build edge

## Environment

The build tool also defines a variable named `process.env.NODE_ENV` in your scripts. 
