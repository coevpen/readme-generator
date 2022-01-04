// returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if(license == 'None'){
    return '';
  }
  else if(license == 'MIT'){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
  }
  else if(license == 'PDDL'){
    return `[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)]`;
  }
  else{
    return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)]`;
  }
}

// returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == 'None'){
    return '';
  }
  else if(license == 'MIT'){
    return `(https://opensource.org/licenses/MIT)`;
  }
  else if(license == 'PDDL'){
    return `(https://opendatacommons.org/licenses/pddl/)`;
  }
  else{
    return `(https://opensource.org/licenses/Artistic-2.0)`;
  }
}

// returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == 'None'){
    return '';
  }
  else if(license == 'MIT'){
    return `## License
    MIT License`;
  }
  else if(license == 'PDDL'){
    return `## License
    Public Domain Dedication and License (PDDL)`;
  }
  else{
    return `## License
    The Artistic LIcense 2.0
    `;
  }
}

function licenseToC(license){
  if(license == 'None'){
    return '';
  }
  else{
    return `* [License](#license)`;
  }
}

// generates markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}

  ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  ${licenseToC(data.license)}
  * [Questions](#contact)
  * [Contribution](#contribution)
  * [Tests](#tests)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Questions
  If you have any additional questions, you can reach me via my [Github](https://github.com/${data.username}) or by [email](mailto:${data.email}). 
  
  ## Contribution
  ${data.contribution}

  ## Tests
  ${data.test}
`;
}

module.exports = generateMarkdown;