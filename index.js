const fs = require('fs');
const inquirer = require('inquirer');


inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project/application?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Describe your app:',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What technologies were used to create your application?',
            name: 'technology',
        },

        {
            type: 'input',
            message: 'Provide instructions on how to install you application',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Provide instructions on how to use your application',
            name: 'usage',
        },

        {
            type: 'input',
            message: 'How can developers contribute to your application?',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'How do we test your application?',
            name: 'testing',
        },
        {
            type: 'rawlist',
            message: 'Under which license is your application covered?',
            name: 'license',
            choices: ['MIT', 'GNU(General Public License)', 'Mozilla', 'N/A'],
        },
        {
            type: 'input',
            message: 'what is your email address?',
            name: 'email',

        },
        {
            type: 'input',
            message: 'What is your GitHub URL?',
            name: 'gitHub',
        },
    ])

    .then((answers) => {
        const { title, description, technology, installation, usage, contribution, testing, license, email, gitHub } = answers;

        function renderLicenseBadge(license) {
            if (license === 'MIT') {
              return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
            } else if (license === 'GNU(General Public License)') {
              return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
            } else if (license === 'Mozilla') {
              return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
            } else if (license === 'N/A') {
              return ""
            }
          }


        const file = 
`# ${title}
${renderLicenseBadge(license)}

## Description
        
*What does it do?*
        
    ${description}
             
*Technologies Used:*
        
    ${technology}
        
        
## Table of Contents
        
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
        
        
        
## Installation
        
    ${installation}
        
        
        
## Usage
        
*Instructions:*
        
    ${usage}
        
        
## License
        
    ${license}
        
        
        
## Contributing
        
    ${contribution}
            
        
        
        
## Tests
        
    ${testing}
        
        
## Questions
        
* Questions/comments?  You can contact me via e-mail or GitHub -
        
    * E-mail:  ${email}
        
    * GitHub: ${gitHub}
  
  `;
        fs.writeFile("README.md", file, (err) => {
            if (err) throw err;
            console.log("README successfully created!");
        })

    });