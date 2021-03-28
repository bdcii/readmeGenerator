//fs grants us access to the file system module to use later on in our application
const fs = require('fs');

//this grants us access to the inquirer module, which lets us create the questions for our application
const inquirer = require('inquirer');

//the code below generates the questions prompted to the user upon running the application.
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

        //creates an object of the answers submitted by the user during questioning. They'll be used when creating the README document
        const { title, description, technology, installation, usage, contribution, testing, license, email, gitHub } = answers;

        //Code specifically for the MIT license section
        let year =  new Date().getFullYear();

        //code that renders a license badge at the top of the README which corresponds to the user's license selection during questioning.
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

          //code that renders the text of the license section in the README based off the user's license selection during questioning.
          function renderLicenseSection(license) {
            if (license === 'MIT') {
                return `MIT License

                Copyright (c) [${year}] [*ENTER YOUR FULL NAME HERE BEFORE DEPLOYMENT*]
                
                Permission is hereby granted, free of charge, to any person obtaining a copy
                of this software and associated documentation files (the "Software"), to deal
                in the Software without restriction, including without limitation the rights
                to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                copies of the Software, and to permit persons to whom the Software is
                furnished to do so, subject to the following conditions:
                
                The above copyright notice and this permission notice shall be included in all
                copies or substantial portions of the Software.
                
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                SOFTWARE.`
              } else if (license === 'GNU(General Public License)') {
                return `GNU GENERAL PUBLIC LICENSE
                Version 3, 29 June 2007

Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
Everyone is permitted to copy and distribute verbatim copies
of this license document, but changing it is not allowed.`
              } else if (license === 'Mozilla') {
                return `[Mozilla License Agreement](https://www.mozilla.org/en-US/MPL/2.0/)`
              } else if (license === 'N/A') {
                return ""
              }
          }

        //file is what contains the entirety of the content of the README document. 
        //It uses the answers object to fill in necessary info from the user to complete the file.  
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


${renderLicenseSection(license)}
        
        
        
## Contributing
        
    ${contribution}
            
        
        
        
## Tests
        
    ${testing}
        
        
## Questions
        
* Questions/comments?  You can contact me via e-mail or GitHub -
        
    * E-mail:  ${email}
        
    * GitHub: ${gitHub}
  
  `;
         //this uses the file system module to actually create our README file after the questions have been answered. 
        fs.writeFile("README.md", file, (err) => {
            if (err) throw err;
            console.log("README successfully created!");
        })

    });