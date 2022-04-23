const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index.js');


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = ''
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  if (license === "GPLv2") {
    return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  }
  if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  else {
    return licenseBadge
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  if(license === 'MIT') {
    licenseLink = 'https://www.mit.edu/~amini/LICENSE.md'
  } else if (license === 'Apache 2.0') {
    licenseLink = 'http://www.apache.org/licenses/LICENSE-2.0'
  } else if (license === 'GNU General Public License v3.0') {
    licenseLink = 'https://www.gnu.org/licenses/gpl-3.0.en.html'
  } else {
    licenseLink = ""
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ''
  if(license === 'None') {
    licenseSection = ''
  } else {
    licenseSection =
    `License: ${license} `
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## Table of Contents
  <ol>
    <li><a href="#description">Description</a></li> 
    <li><a href="#license">License</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
  </ol>

  # ${data.title}

  # ${renderLicenseSection(data.license)} 
  
  # ${renderLicenseBadge(data.license)}

  # ${renderLicenseLink(data.license)}

  # ${data.description}

  # ${data.license}

  # ${data.email}

  # ${data.username}

  # ${data.wizard}

  # Installation-npm i inquirer

  # Usage-Free use

  # Questions-Reach me at https://github.com/jacef790 or jace.feinstein0218@gmail.com for questions
`;
}

module.exports = generateMarkdown;
