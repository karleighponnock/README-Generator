// function to generate markdown for README
const fs = require("fs");


function generateMarkdown(data) {
  return `# ${data.description}
${data.tableOfContents}
${data.usage}
${data.license}
${data.contribution}
${data.tests}
${data.questions}
`;
}

module.exports = generateMarkdown;



