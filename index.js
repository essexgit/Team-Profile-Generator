import Manager from "./lib/Manager.js";
import Engineer from "./lib/Engineer.js";
import Intern from "./lib/Intern.js";
import inquirer from "inquirer";
import path from "path";
import fs from "fs";

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// import render from "./src/page-template.js";
// import generateHTML from "./src/generateHTML.js";

// TODO: Write Code to gather information about the development team members, and render the HTML file.
// create unique reference
function uniqueID() {
    return crypto.randomUUID();
}

const newMan1 = new Manager;

// Prompt enter manager

// ask Employee questions
// ask to enter name, id, email,
const employeeQuestions = [
    {
        type: "input",
        name: "name",
        message: "Please enter your name"
    },
    {
        type: "input",
        name: "ID",
        message: "Please enter your employee ID"
    },
    {
        type: "input",
        name: "email",
        message: "Please enter email address",
        validate: function (email) {
            // Regex mail check (return true if valid mail)
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
        }
    }];
// ask Manager Question
// ask to enter officeNumber
const managerQuestions = [{
    type: "input",
    name: "office",
    message: "Please enter your office number"
}];
const newEng1 = new Engineer;

const engineerQuestions = [
    // ask Engineer Question
    // ask to enter github
    {
        type: "input",
        name: "github",
        message: "Please enter your github username"
    }];

const newIntern1 = new Intern;

const internQuestions = [
    // ask Intern Question
    // ask to enter School
    {
        type: "input",
        name: "school",
        message: "Please enter the name of your school"
    }];
// choose Engineer, Intern or finish
const choices = [
    {
        type: "list",
        name: "menu",
        message: "Enter another team member or generate team?",
        choices: [Engineer, Intern, Finish]
    }];
function menuQuestion() {
    inquirer.prompt(choices).then((menuAnswers) => {
        const answers = displayMenuAnswers(menuAnswers);
    });
}

function Finish() {
    console.log("the end");
}

function displayMenuAnswers(data) {
    if (data.menu === "Finish") { Finish(); }
    console.log(data.menu);
}
menuQuestion();
//
//if Engineer, ask to enter name, id, email, github address
// return to 'Choose'
//if Intern, ask to enter name, id, email, school
//return to choose
// if Finish, print HTML