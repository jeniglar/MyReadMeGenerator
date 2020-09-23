const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {type: "input",
     name: "title",
     message: "Please enter your project title"
    },
    {type: "input",
     name: "description",
     message: "Please enter a description of your project"
    },
    {type: "input",
     name: "installation",
     message: "Please enter installation instructions"
    },
    {type: "input",
     name: "usage",
     message: "Please enter usage information"
    },
    {type: "list",
     name: "license",
     message: "Which license are you using?",
     choices: [
        "MIT",
        "ISC",
        "GNU-Library"
     ]
    },
    {type: "input",
     name: "contributions",
     message: "Please enter contribution guidelines"
    },
    {type: "input",
     name: "tests",
     message: "Please enter test instructions"
    },
    {type: "input",
     name: "github",
     message: "Please enter your GitHub user name"
    },
    {type: "input",
     name: "email",
     message: "Please enter your email address"
    }
];

    function writeToFile(fileName, data) {
        console.log(data);
        return fs.writeFileSync(fileName, data) 
    };

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function(answers) {
        writeToFile("MyReadMe.md", generateMarkdown(answers));  
})};

// function call to initialize program
init();
