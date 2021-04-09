// make command line function that asks the user information about the staff
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown');

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
            "Finish Building Team", 
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
            "Finish Building Team",
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

// TODO: Create a function to initialize app 
function init() {
    inquirer
        .prompt(mngrQuestions)
        .then((data) => {
            // prompter function that calls engineer and intern questions if applicable
            function prompter() {
            if (data.choiceEnder == 'Engineer'){
                inquirer
                    .prompt(engineerQuestions)
                console.log(`${data.choiceEnder} is choiceEnder`)
                
            }
            else if (data.choiceEnder == 'Intern'){
                inquirer
                    .prompt(internQuestions)
                console.log(`${data.choiceEnder} is choiceEnder`)
                
            }
            else if (data.choiceEnder == "Finish building my team"){
                inquirer
                    
                console.log(`Team has been built`)
                
            }
            // loop prompter function if needed
         
            
        }
            // calling prompter function 
            // prompter()
            
            // WHY DOESNT THIS WORK?! Idealy after the prompter function was called the new choiceEnder should then be 
            // evaluated in the if statement bellow and call prompter again if Engeineer or Intern was selected 
            // but instead it is prompting at the same time as line 135 
            if (data.choiceEnder != "Finish building my team"){
                prompter()
                console.log("it loooooped")
            
            }

            // why does this continue to prompt without letting the questions get asked??? 
            // while (data.choiceEnder != "Finish building my team"){
            //     prompter()
            //     console.log("it loooooped")
            // }
            
           
           
           
            
            // console.log(data.choiceEnder)
            // this is taking the data we get and sending it into generateMarkdown.js
            var markdown = generateMarkdown(data)
            // this is getting the markdwon from generateMarkdwon and writting a staff.html file 
            fs.writeFile(`staff.html`, markdown, (err) =>
              err ? console.log(err) : console.log('Success!')
            );
          });
            
    
    }

// Function call to initialize app
init();
