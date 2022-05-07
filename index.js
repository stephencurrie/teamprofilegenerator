// Gets Inquirer and Ability to write a file

const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

// const employee = new Employee();
// Prompts to get information from user input

// this is team array
const teammembers = [];

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
          { value: "end", name: "I don't want to add anyone else" },
        ],
      },
    ])
    .then((answers) => {
      if (answers.teamtype === "engineer") {
        promptEngineer();
      } else if (answers.teamtype === "intern") {
        promptIntern();
      } else {
        generateHtml();
      }
    });
};
const promptManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "manager",
        message: "What is the team managers name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the team managers id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the teams managers email?",
      },
      {
        type: "input",
        name: "number",
        message: "What is the teams managers number?",
      },
    ])
    .then((answers) => {
      // this creates manager object and adds it to team member array with push (do the same thing with intern and engineer)
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.number
      );
      teammembers.push(manager);
      promptTeam();
    });
};

const promptEngineer = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "engineer",
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
      // this creates manager object and adds it to team member array with push (do the same thing with intern and engineer)
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      teammembers.push(engineer);
      promptTeam();
    });
};

const promptIntern = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "intern",
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
        name: "number",
        message: "What is the intern's school?",
      },
    ])
    .then((answers) => {
      // this creates manager object and adds it to team member array with push (do the same thing with intern and engineer)
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      teammembers.push(intern);
      promptTeam();
    });
};

// Generate html file

// const generateManagerHtml = ({ manager, id, email, number }) =>

const generateHtml = ({ manager, id, email, number, teamtype }) => {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta
      http-equiv="Content-Security-Policy"
      content="upgrade-insecure-requests"
    />
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <script
      src="https://kit.fontawesome.com/1866c76c2a.js"
      crossorigin="anonymous"
    ></script>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href="./style.css" />
    <title>Team Profile Generator</title>
  </head>
  <body>



    <nav>

    </nav>
    <!-- Hero image -->
    <section class="jumbotron containerfluid bg-danger text-center text-white">

        <div class="row">
          <div class="col-md-12">
            <h4>My Team</h4>
          </div>
        </div>

    </section>

    <!-- Team Section with example cards for Manager, Engineer, Intern -->
    <section class="containerfluid">
      <div class="row">

        <div class="col-sm-4">
        <div class="card" style="width: 18rem;">

              <div class="card-header bg-primary text-white">
                <h5>${manager}</h5>
                <p><i class="fa-solid fa-mug-hot"></i><span> Manager</span></p>
              </div>
              <div class="card-body bg-light">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:<span>${id}</span></li>
                <li class="list-group-item">Email:<span>${email}</span></li>
                <li class="list-group-item">Office Number:<span>${number}</span></li>
              </ul>
              

            </div>
        </div>
        </div>



      <div class="col-sm-4">
        <div class="card" style="width: 18rem;">

              <div class="card-header bg-primary text-white">
                <h5>Jared</h5>
                <p><i class="fa-solid fa-glasses"></i><span> Engineer</span></p>
              </div>
              <div class="card-body bg-light">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:<span>4321</span></li>
                <li class="list-group-item">Email:<span>jared@gmail.com</span></li>
                <li class="list-group-item">Github:<span>1234</span></li>
              </ul>
              

            </div>
        </div>
       </div>

       <div class="col-sm-4">
        <div class="card" style="width: 18rem;">

              <div class="card-header bg-primary text-white">
                <h5>Jared</h5>
                <p><i class="fa-solid fa-user-graduate"></i><span> Intern</span></p>
              </div>
              <div class="card-body bg-light">
              <ul class="list-group list-group-flush">
                <!-- <li class="list-group-item">ID:<span>12</span><li> -->
                <li class="list-group-item">ID:<span>4321</span></li>
                <li class="list-group-item">Email:<span>jared@gmail.com</span></li>
                <li class="list-group-item">School:<span>1234</span></li>
              </ul>
              

            </div>

        </div>
       </div>


      </div>
    </div>


<!-- New Row -->

<div class="row">

    <div class="col-sm-4">
    <div class="card" style="width: 18rem;">

          <div class="card-header bg-primary text-white">
            <h5>Jared</h5>
            <p><i class="fa-solid fa-mug-hot"></i><span> Manager</span></p>
          </div>
          <div class="card-body bg-light">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID:<span>4321</span></li>
            <li class="list-group-item">Email:<span>jared@gmail.com</span></li>
            <li class="list-group-item">Office Number:<span>1234</span></li>
          </ul>
          

        </div>
    </div>
    </div>



  <div class="col-sm-4">
    <div class="card" style="width: 18rem;">

          <div class="card-header bg-primary text-white">
            <h5>Jared</h5>
            <p><i class="fa-solid fa-glasses"></i><span> Engineer</span></p>
          </div>
          <div class="card-body bg-light">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID:<span>4321</span></li>
            <li class="list-group-item">Email:<span>jared@gmail.com</span></li>
            <li class="list-group-item">Github:<span>1234</span></li>
          </ul>
          

        </div>
    </div>
   </div>



  </div>
</div>

    </section>




<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>

    <script src="./assets/js/script.js"></script>
  </body>
</html>
`;
};

// Starts function to prompt user and then generates README.md file

const init = () => {
  promptManager()
    .then((generatePage) =>
      fs.writeFileSync("./dist/newindex.html", generateHtml(generatePage))
    )
    .then(() => console.log("Successfully created HTML page"))
    .catch((err) => console.error(err));
};

init();
