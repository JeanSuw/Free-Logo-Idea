const inquirer = require('inquirer');
const fs = require('fs');
const shapeClass = require('./lib/shape.js');

const questions = [
    {
        type: 'input',
        message: 'Create a initials. (Up to three characters and no ".")',
        name: 'initial',
        default: "NJS",
    },
    {
        type: 'input',
        message: 'Enter the text color. You can use a keyword (i.e blue) or hexadecimal number.',
        name: 'textColor',
        default: "purple",
    },
    {
        type: 'list',
        message: 'What shape do you do want for your logo? Use arrow key Up and Down to navigate the list of choices. Press enter when you have decided. ',
        name: 'shape',
        choices: ["Triangle", "Circle", "Square"],
        default: "Circle",
    },
    {
        type: 'input',
        message: 'Enter the logo color. You can use a keyword (i.e blue) or hexadecimal number.',
        name: 'shapeColor',
        default: "#DFFFFD",
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
        err ? console.error(err) : console.log(`Check file name called ${fileName}`)
    );
}

function askUsers(){
    inquirer
        .prompt(questions)
    .then((answers) => {
        console.log(`initials: ${answers.initial}`);
        console.log(`initials color : ${answers.textColor}`);
        console.log(`shape: ${answers.shape}`);
        console.log(`shape color: ${answers.shapeColor}`);
        
        var newLogo = shapeClass.createLogo(answers);
        console.log(`check setters ${newLogo}`);
        var renderedLogo = shapeClass.renderSVG(newLogo);
        writeToFile(`./YourLogo/newshape.svg`, renderedLogo);

    })
    .catch((error) =>{
        if (error.isTtyError){
            console.log("Prompt couldn't be rendered in the current environment");
        } else {
            console.log("How?");
        }
    });
}

askUsers();
