// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
![License](https://img.shields.io/static/v1?label=${data.license}&message=license&color=red)

## Description 
${data.description}

## Table of Contents
- [Installation](##Installation)
- [Usage](##Usage)
- [License](##License)
- [Contributions](##Contributions)
- [Tests](##Tests)
- [Questions](##Questions) 
  
## Installation
${data.installation}

## Usage
${data.usage}

## License
Notice: This is licensed under ${data.license}.
![License](https://img.shields.io/static/v1?label=${data.license}&message=license&color=red)

## Contributions 
${data.contributions}

## Tests 
${data.tests}

## Questions
Please feel free to view my GitHub profile at ${data.github} or email me directly at ${data.email} with any additional questions.`;
}

module.exports = generateMarkdown;
