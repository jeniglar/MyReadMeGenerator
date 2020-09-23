const inquirer = require("inquirer");

require("./utils/generateMarkdown");
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
     message: "?"
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
     name: "questions",
     message: "Please enter your email address"
    }
];

inquirer.prompt(questions).then(function(answers) {
    let generatedMd = "";

    generatedMD += "# " + answers.title;
    generatedMD += "## Table of Contents";
    generatedMD += "# " + answers.description;
    generatedMD += "# " + answers.installation;
    generatedMD += "# " + answers.usage;
    generatedMD += "# " + answers.license;
    generatedMD += "# " + answers.contributions;
    generatedMD += "# " + answers.tests;
    generatedMD += "# Please reach out to " + answers.questions + " with any questions.";
}



false.writeFile("MyReadMe.md", generatedMD, function() {

});


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
