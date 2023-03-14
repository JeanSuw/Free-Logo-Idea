# [Free-Logo-Idea](#table-of-content)

## [Description](#table-of-content)
This is a Node.js command-line application that takes in user input to generate a logo and save it as an SVG file. The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a .svg file.

## Table of Content
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Test](#test)
* [Credits](#credits)

## [Installation](#table-of-content)
There are no starter code for this application,so it was build from scratch. However, this application requires the use of the Inquirer package to run the program. Version 8.2.4 is recommended.
```bash
npm init -y
npm i inquirer@8.2.4
```

## [Usage](#table-of-content)
This application won’t be deployed. Everything will run in the terminals. I recommended viewing the demo in the link below

To run the application you must type in:
```bash
node index.js
```
![terminalExample](./img/CreateLogoFromTerminal.png)

* [Quick link to the demo](https://drive.google.com/file/d/1Sb-r_a54Vd6teXU8czcO6KhzEio6DkWm/view)
* [Logo Generator Demo (Downloaded version)](./img/LogoGeneratorDemo.webm) If the quick link does not work, I recommend download this one.


## [Test](#table-of-content)
Jest package is used for the unit test.
```bash
npm run test // To run tests
```
There are 8 tests in file shape.test.js which focused on setting correct color and initials values in each classes.

```bash
Color name for Circle
    ✓ Should have red Circle (2 ms)
  Hex color for Square
    ✓ hex color for square is correspond to given value (darkOrchid = "#9932CC")
  Triangle Render
    ✓ Renders a shape of a triangle with color
    ✓ Renders initials inside a triangle with color text
  Square Render
    ✓ Renders a shape of a square with color (1 ms)
    ✓ Renders initials inside a square with color text
  Circle Render
    ✓ Renders a shape of a square with color
    ✓ Renders initials inside a square with color text
```

## [Credits](#table-of-content)
Without these packages and tutorials, my application would not exist today.

Packages
* [Input collector: Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4)
* [Unit test: Jest Package](https://www.npmjs.com/package/jest)

Tutorials
* [SVG Polygon](https://www.w3schools.com/graphics/svg_polygon.asp)
* [More inquirer](https://www.digitalocean.com/community/tutorials/nodejs-interactive-command-line-prompts)
* [Export multiple functions](https://stackoverflow.com/questions/16631064/declare-multiple-module-exports-in-node-js)
* [Color name for hex code](https://htmlcolorcodes.com/color-names/)

[Return back to Title](#free-logo-idea)