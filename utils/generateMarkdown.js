// function to generate markdown for README
const fs = require("fs");


function generateMarkdown(data) {
  return `# ${data.description}
${data.tableOfContents}
${data.installation}
`;
}

module.exports = generateMarkdown;



