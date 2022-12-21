// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string

function renderLicenseBadge(license) {
  let newbadge;
       switch (license) {
           case 'MIT': newbadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`; break;
           case 'ISC': newbadge = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`; break;
           case 'Apache': newbadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`; break;
           default: newbadge='';
       }
  return newbadge;
}


// TODO: Create a function that returns the license link

// If there is no license, return an empty string

//function renderLicenseLink(license) {}


// TODO: Create a function that returns the license section of README

// If there is no license, return an empty string

function renderLicenseSection(license) {
   let readlicense = `\n\n## License\n\n`;
       switch (license) {
          case 'MIT': readlicense += `MIT License
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;break;

          case 'ISC': readlicense += `ISC License
Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE. `; break;
          case 'Apache': readlicense += `Apache License
Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.`; break;

          default: readlicense='';
       }
   
   return readlicense;
}


function generateMarkdown(data) {
  

     let userinput = data;
     if (!data.title) {userinput.title = "Untitled Project"}

     let output = `# ${userinput.title.trim()}
`;

     output += renderLicenseBadge(userinput.license);

     if (userinput.description) {
     output += `\n## Description\n\n`;
     output += userinput.description.trim();
     }

     output += `\n\n## Table of Contents\n\n`;

     if (userinput.install) { output += "- [Installation](#installation-instructions)\n"}
     if (userinput.usage) { output += "- [Usage](#usage-information)\n"}
     if (userinput.contribution) { output += "- [Contributions](#contribution-guidelines)\n"}
     if (userinput.testing) { output += "- [Testing](#testing-instructions)\n"}
     if (userinput.license !== 'none') { output += "- [License](#license)\n"}
     if (userinput.email || userinput.github) { output += "- [Questions](#questions)\n"}

     if (userinput.install) {
     output += `\n\n## Installation Instructions\n\n`;
     output += userinput.install.trim();
     }
     if (userinput.usage) {
     output += `\n\n## Usage Information\n\n`;
     output += userinput.usage.trim();
     }
     if (userinput.contribution) {
     output += `\n\n## Contribution Guidelines\n\n`;
     output += userinput.contribution.trim();
     }
     if (userinput.testing) {
     output += `\n\n## Testing Instructions\n\n`;
     output += userinput.testing.trim();
     }

// license, badge at top
    output += renderLicenseSection(userinput.license);

    if (userinput.email || userinput.github) {
      output += `\n\n## Questions\n\nIf you have any questions, I can be contacted via: \n\n`;
    if (userinput.github) { output += `Github: [${userinput.github}](https://github.com/${userinput.github})\n\n`; }
    if (userinput.email) { output += `E-mail: ${userinput.email}`; }
    }

return output;

}



module.exports = {
                   generateMarkdown,

};