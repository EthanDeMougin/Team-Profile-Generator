const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee");

teamArray = [];

function runApp () {

    function createTeam () {
        inquirer.createPromptModule([{
            type:"list",
            message:"",
            name:"",
            choices: ["Intern", "Manager", "Engineer", "No more team members needed."]
        }]).then(function (userInput) {
            switch(userInput.addEmployeePrompt) {
                case "Intern":
                    addIntern();
                    break;
                case "Manager":
                    addManager();
                    break;
                case "Engineer":
                    addEngineer();
                    break;
                default:
                    htmlBuilder();
            }
        })
    }

    function addIntern() {
        inquirer.prompt ([

            {
                type: "input",
                name: "internName",
                message: "What is the Intern's Name?"
            },
            {
                type: "input",
                name: "internId",
                message: "What is the Intern's ID?"
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is the Intern's email?"
            },
            {
                type: "input",
                name: "internOfficeNumber",
                message: "What is the Intern's office number?"
            }
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internOfficeNumber);
            teamArray.push(intern);
            createTeam(); 
        });
    }

    function addManager() {
        inquirer.prompt ([

            {

            }
        ])

    }

    function addEngineer() {
        inquirer ([

            {
                
            }
        ])

    }
}