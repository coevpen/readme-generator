// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README - add license badge near top
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Questions](#contact)
  * [Contribution](#contribution)
  * [Tests](#tests)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License

  ## Questions
  If you have any additional questions, you can reach me via my [Github](https://github.com/${data.username}) or by [email](mailto:${data.email}). 
  
  ## Contribution
  ${data.contribution}

  ## Tests
  ${data.test}
`;
}

module.exports = generateMarkdown;


/*
  NOTE TO SELF: generateMarkdown will receive the data, within this, you will call the functions
  to create the licenses where they should go on the readme. so like ${renderLicensesSection(license)}
 
*/