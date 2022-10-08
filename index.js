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
}