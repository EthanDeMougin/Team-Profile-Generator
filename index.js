const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");

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
                name: "internSchool",
                message: "What is the Intern's school?"
            }
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            teamArray.push(intern);
            createTeam(); 
        });
    }

    function addManager() {
        inquirer.prompt ([

            {
                type: "input",
                name: "managerName",
                message: "What is the Manager's Name?"
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the Manager's ID?"
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the Manager's email?"
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is the Manager's office number?"
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamArray.push(manager);
            createTeam(); 
        });
    }

    function addEngineer() {
        inquirer.prompt ([

            {
                type: "input",
                name: "engineerName",
                message: "What is the Engineer's Name?"
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is the Engineer's ID?"
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is the Engineer's email?"
            },
            {
                type: "input",
                name: "engineerGitHub",
                message: "What is the Engineer's GitHub?"
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGitHub);
            teamArray.push(engineer);
            createTeam(); 
        });    
    }

    function htmlBuilder () {
        console.log("Team successfully created!");
    }

    create ();
}

runApp();