import Manager from "./lib/Manager.js";
import Engineer from "./lib/Engineer.js";
import Intern from "./lib/Intern.js";
import inquirer from "inquirer";
import path from "path";
import fs from "fs";

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

import render from "./src/page-template.js";
import generateHTML from "./src/generateHTML.js";

// TODO: Write Code to gather information about the development team members, and render the HTML file.
// create unique reference
function uniqueID() {
    return crypto.randomUUID()
}


// Prompt enter manager

    // ask Employee questions
        // ask to enter name, id, email,
    // ask Manager Question
        // ask to enter officeNumber

 
//choose Engineer, Intern or finish
//if Engineer, ask to enter name, id, email, github address
// return to 'Choose'
//if Intern, ask to enter name, id, email, school
//return to choose
// if Finish, print HTML