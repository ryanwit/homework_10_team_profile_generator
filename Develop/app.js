const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const team = [];

 //! use with build team function
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer"); 

/* -------------------------------------------------------------------------- */
/*                               INITIAL-PROMPT                               */
/* -------------------------------------------------------------------------- */


function createMember() {
    inquirer
    .prompt([
        {
            type: "list",
            name: "employeeSelection",
            message: "What type of employee do you want to add",
            choices: [
                "Engineer",
                "Intern",
                "None"
                    ]
        },

    ]).then(response => {
        switch(response.employeeSelection) {
            case "Engineer": 
            generateEngineer() 
            break;
            case "Intern":
            generateIntern()
            break;
            default: 
                buildTeam()//! Call function to generate HTML 
        }
    })
}   
/* --------------------------------- Manager -------------------------------- */
function generateManager() {
    inquirer.prompt([
        {
        type: "input",
        message: "What is the name of the project manager?",
        name: "managerName"
        },
        {
        type: "input",
        message: "What office number are they in?",
        name: "managerOffice"
        },
        {
        type: "input",
        message: "What is their email address?",
        name: "managerEmail"
        },
        {
        type: "input",
        message: "What is your manager ID?",
        name: "managerId"
        },
        
    ]).then((response) => {
        const manager = new Manager(response.managerName, response.managerOffice, response.managerEmail, response.managerId)
        team.push(manager)
        createMember()
    })
}

generateManager()
    
/* -------------------------------- Engineer -------------------------------- */
function generateEngineer() {
    inquirer.prompt([
        {
        type: "input",
        message: "What is the name of the engineer?",
        name: "engineerName"
        },
        {
        type: "input",
        message: "What is their GitHub username?",
        name: "engineerGithub"
        },
        {
        type: "input",
        message: "What is their email address?",
        name: "engineerEmail"
        },
        {
        type: "input",
        message: "What is the engineers ID?",
        name: "engineerId"
        },
    ]).then((response) => {
        const engineer = new Engineer(response.engineerName, response.engineerGitHub, response.engineerEmail, response.engineerId)
        team.push(engineer)
        createMember()
    })
}

/* --------------------------------- Intern --------------------------------- */
function generateIntern() {
    inquirer.prompt([
        {
        type: "input",
        message: "What is the name of the intern?",
        name: "internName"
        },
        {
        type: "input",
        message: "What school do they attend?",
        name: "internSchool"
        },
        {
        type: "input",
        message: "What is their email address?",
        name: "internEmail"
        },
        {
        type: "input",
        message: "What the interns Id?",
        name: "internId"
        },
    ]).then((response) => {
        const intern = new Intern(response.internName, response.internSchool, response.internEmail, response.internId)
        team.push(intern)
        createMember()
})

/* ------------------------------- Build Team ------------------------------- */

function buildTeam() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(team), 'utf-8')
 }

 
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!
