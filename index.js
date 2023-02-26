const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// create unique reference
function uniqueID() {
    return crypto.randomUUID();
}

function generateManager() {
    const newMan1 = new Manager();
    inquirer.prompt([
        nameQuestion,
        IDQuestion,
        emailQuestion,
        officeQuestion,
    ]).then((answer) => {
        newMan1.name = answer.name;
        newMan1.id = answer.id;
        newMan1.email = answer.email;
        newMan1.officeNumber = answer.officeNumber;
        newMan1.role = "Manager";
        console.log(newMan1);
        menuQuestion();
    });
};
function generateIntern() {
    const newInt1 = new Intern;
    inquirer.prompt([
        nameQuestion,
        IDQuestion,
        emailQuestion,
        schoolQuestion,
    ]).then((answer) => {
        newInt1.name = answer.name;
        newInt1.id = answer.id;
        newInt1.email = answer.email;
        newInt1.school = answer.school;
        newInt1.role = "Engineer";
        console.log(newInt1);
        menuQuestion();
    });
};
function generateEngineer() {
    const newEngin1 = new Engineer;
    inquirer.prompt([
        nameQuestion,
        IDQuestion,
        emailQuestion,
        gitQuestion,
    ]).then((answer) => {
        newEngin1.name = answer.name;
        newEngin1.id = answer.id;
        newEngin1.email = answer.email;
        newEngin1.github = answer.github;
        newEngin1.role = "Engineer";
        console.log(newEngin1);
        menuQuestion();
    });
};

// Questions
const choices = [
    {
        type: "list",
        name: "menu",
        message: "Enter another team member or generate team?",
        choices: [Engineer, Intern, Finish]
    }];

const nameQuestion = {
    type: "input",
    name: "name",
    message: "Please enter your name"
};
const IDQuestion = {
    type: "input",
    name: "id",
    message: "Please enter your employee ID"
};
const emailQuestion = {
    type: "input",
    name: "email",
    message: "Please enter email address",
    validate: function (email) {
        // Regex mail check (return true if valid mail)
        return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
    }
};
const officeQuestion = {
    type: "input",
    name: "officeNumber",
    message: "Please enter your office number"
};
const schoolQuestion = {
    type: "input",
    name: "school",
    message: "Please enter the name of your school"
};
const gitQuestion = {
    type: "input",
    name: "github",
    message: "Please enter your github username"
};

function menuQuestion() {
    inquirer.prompt(choices).then((menuAnswers) => {
        const answers = displayMenuAnswers(menuAnswers);
    });
}

function Finish() {
    buildPage();
    console.log("the end");
}
const buildPage = () => {
    const testArray = [];
    testArray.push(newMan1);

    console.log(render(testArray));
};


function displayMenuAnswers(data) {
    if (data.menu === "Engineer") {
        generateEngineer();
    } else if (data.menu === "Intern") {
        generateIntern();
    } else {
        Finish();
    }
}
generateManager();