// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description 
${data.description}

## Table of Contents 
  
## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributions 
${data.contributions}

## Tests 
${data.tests}

## Questions
Please feel free to view my GitHub profile at ${data.github} or email me directly at ${data.email} with any additional questions.`;
}

module.exports = generateMarkdown;
