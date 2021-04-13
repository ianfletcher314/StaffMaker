// make command line function that asks the user information about the staff
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
var employeeElements = []


const mngrQuestions = [
    {
        type: 'input',
        message: 'What is the team managers name?',
        name: 'mngrName',
    },
    {
        type: 'input',
        message: 'What is the managers employee ID #?',
        name: 'mngrID',
    },
    {
        type: 'input',
        message: 'Please enter managers email address!',
        name: 'mngrEmail',
    },
    {
        type: 'input',
        message: 'Please enter managers office #!',
        name: 'mngrOfficeNumber',
    },
    {
        type: "list",
        message: "If there are more staff members please add them!",
        name: "choiceEnder",
        choices: [
            "Engineer",
            "Intern",
            "Finish building my team",
        ]
    },
];

const engineerQuestions = [
    {
        type: 'input',
        message: 'What is the engineers name?',
        name: 'engineerName',
    },
    {
        type: 'input',
        message: 'What is the engineers employee ID #?',
        name: 'engineerID',
    },
    {
        type: 'input',
        message: 'Please enter engineers email address!',
        name: 'engineerEmail',
    },
    {
        type: 'input',
        message: 'Please enter engineers GitHub user name!',
        name: 'engineerGitHub',
    },
    {
        type: "list",
        message: "If there are more staff members please add them!",
        name: "choiceEnder",
        choices: [
            "Engineer",
            "Intern",
            "Finish building my team",
        ]
    },
];

const internQuestions = [
    {
        type: 'input',
        message: 'What is the interns name?',
        name: 'internName',
    },
    {
        type: 'input',
        message: 'What is the interns employee ID #?',
        name: 'internID',
    },
    {
        type: 'input',
        message: 'Please enter interns email address!',
        name: 'internEmail',
    },
    {
        type: 'input',
        message: 'Please enter interns affiliated school!',
        name: 'internSchool',
    },
    {
        type: "list",
        message: "If there are more staff members please add them!",
        name: "choiceEnder",
        choices: [
            "Engineer",
            "Intern",
            "Finish building my team",
        ]
    },
];
// prompter function that calls engineer and intern questions if applicable
function prompter(choiceEnder) {

    if (choiceEnder == 'Engineer') {
        inquirer
            .prompt(engineerQuestions)
            .then((data) => {
                const engineer = new Engineer(data.engineerName, data.engineerID, data.engineerEmail, data.engineerGitHub)
                employeeElements.push(engineer)
                prompter(data.choiceEnder)
            })
       // console.log(`${data.choiceEnder} is choiceEnder`)

    }
     if (choiceEnder == 'Intern') {
        inquirer
            .prompt(internQuestions)
            .then((data) => {
                const intern = new Intern(data.internName, data.internID, data.internEmail, data.internSchool)
                employeeElements.push(intern)
                prompter(data.choiceEnder)
            })
        // console.log(`${data.choiceEnder} is choiceEnder`)

    }
    else if (choiceEnder == "Finish building my team") {
        // var cool = JSON.stringify(employeeElements)
        // var htmlthing = JSON.stringify(generateMarkdown(employeeElements))
        // console.log(employeeElements)
      
       

        fs.writeFile(`staff.html`, generateMarkdown(employeeElements), (err) =>
        err ? console.log(err) : console.log('Success!')
      );
        

    }

    

}
function init() {
    inquirer
        .prompt(mngrQuestions)
        .then((data) => {
            var choiceReader = data.choiceEnder
            // console.log(data.mngrOfficeNumber)
            const manager = new Manager(data.mngrName, data.mngrID, data.mngrEmail, data.mngrOfficeNumber)
            // console.log(manager)
            employeeElements.push(manager)
            prompter(choiceReader)
         

        })
}
// Function call to initialize app
init();
