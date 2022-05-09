// Gets Inquirer and FS

const inquirer = require("inquirer");
const fs = require("fs");
const render = require("./src/page-template");

const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

// This is an object of teamMembers that has a manager, and then an array for engineers and interns

const teamMembers = {
  manager: null,
  engineers: [],
  interns: [],
};
const idArray = [];


// This is the method to ask which team member you want to add, and then to call that particular function
const promptTeam = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "teamtype",
        message: "Which type of team member would you like to add?",
        choices: [
          { value: "engineer", name: "Engineer" },
          { value: "intern", name: "Intern" },
          { value: "", name: "I don't want to add anyone else" },
        ],
      },
    ])
    .then((answers) => {
      if (answers.teamtype === "engineer") {
        promptEngineer();
      } else if (answers.teamtype === "intern") {
        promptIntern();
      } else {
        generatePage()
        ;
        
      }
    });
};

// this creates manager object and adds it to team member array with push 
const promptManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the team managers name?",
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the team managers id?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the teams managers email?",
      },
      {
        type: "input",
        name: "managerNumber",
        message: "What is the teams managers number?",
      },
    ])
    .then((answers) => {

      const manager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.managerNumber
      );
 
      teamMembers.manager = manager;
      idArray.push(answers.managerId);
      promptTeam();
    
    });
};


// this creates Engineer object and adds it to team member array with push 

const promptEngineer = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the engineer's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineer's email?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the engineers github?",
      },
    ])
    .then((answers) => {
  
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );

      teamMembers.engineers.push(engineer);
      idArray.push(answers.id);
      promptTeam();
    });
};


// this creates intern object and adds it to team member array with push 

const promptIntern = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the intern's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the intern's email?",
      },
      {
        type: "input",
        name: "school",
        message: "What is the intern's school?",
      },
    ])
    .then((answers) => {

      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );

      // promptTeam();
      teamMembers.interns.push(intern);
      idArray.push(answers.id);
      promptTeam();
    });
};

// Generate html file

const generatePage = () => {
  fs.writeFile("dist/newindex.html", render(teamMembers), (err) => {
    if (err) {
      console.log(err);
    }
  });
}

const init = () => {
  promptManager()

};

init();
