const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const team = [];

const OUTPUT_DIR = path.resolve(__dirname, "output"); //! use with build team function
const outputPath = path.join(OUTPUT_DIR, "team.html"); //! same as above

const render = require("./lib/htmlRenderer"); //! SAME

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
            generateEngineer() //TODO: Build Engineer function similar to genMgr
            break;
            case "Intern":
            generateIntern() // TODO: Build INtern function see below
            break;
            default: //! Call function to generate HTML (buildTeam example)
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
        }, // add question about mgr id - add to new mgr const below
        
    ]).then((response) => {
        const manager = new Manager(response.managerName, response.managerOffice, response.managerEmail)
        team.push(manager)
        createMember()
    })
}
    

/* -------------------------------- Engineer -------------------------------- */

    else if (response.employeeSelection === Engineer) {
        inquirer.prompt([
            {
            type: "input",
            message: "What is the name of the engineer?",
            name: "engineer-name"
            },
            {
            type: "input",
            message: "What is their GitHub username?",
            name: "engineer-github"
            },
            {
            type: "input",
            message: "What is their email address?",
            name: "engineer-address"
            },
        ])
    } 

/* --------------------------------- INTERN --------------------------------- */

    else if (response.employeeSelection === Intern) {
        inquirer.prompt([
            {
            type: "input",
            message: "What is the name of the intern?",
            name: "intern-name"
            },
            {
            type: "input",
            message: "What school do they attend?",
            name: "intern-github"
            },
            {
            type: "input",
            message: "What is their email address?",
            name: "intern-address"
            },
        ])

function makeHTML() { //!bUILD TEAM
    const html = render(employeeSelection)
    writeFileSync("filename.html", )
    if (err {
        console.log(err)
    })
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
// for the provided `render` function to work! ```
