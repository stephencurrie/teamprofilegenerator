function renderManager(manager) {
  return `
    <div class="col-sm-4">
    <div class="card setwidth">
    <div class="card-header bg-primary text-white">
        <h5>${manager.getName()}</h5>
        <p><i class="fa-solid fa-mug-hot"></i><span> ${manager.getRole()}</span></p>
    </div>
    <div class="card-body bg-light">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office number: ${manager.getOffice()}</li>
        </ul>
    </div>
  </div>
  </div>
    `;
}
function renderEngineers(engineers) {
  const markup = engineers.map((engineer) => {
    return `
      <div class="col-sm-4">
      <div class="card setwidth">
        <div class="card-header bg-primary text-white">
            <h5>${engineer.getName()}</h5>
            <p><i class="fa-solid fa-glasses"></i><span> ${engineer.getRole()}</p>
        </div>
        <div class="card-body bg-light">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGitHub()}" target="_blank" rel="noopener noreferrer">${engineer.getGitHub()}</a></li>
            </ul>
        </div>
        </div>
    </div>
        `;
  });
  return markup.join(",");
}
function renderInterns(interns) {
  const markup = interns.map((intern) => {
    return `
      <div class="col-sm-4">
      <div class="card setwidth">
        <div class="card-header bg-primary text-white">
          <h5>${intern.getName()}</h5>
          <p><i class="fa-solid fa-user-graduate"></i> ${intern.getRole()}</p>
      </div>
      <div class="card-body bg-light">
          <ul class="list-group">
              <li class="list-group-item">ID: ${intern.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
              <li class="list-group-item">School: ${intern.getSchool()}</li>
          </ul>
      </div>
      </div>
  </div>`;
  });
  return markup.join(",");
}

function generateTeam(teamMembers) {
  return `
          ${renderManager(teamMembers.manager)}
          ${renderEngineers(teamMembers.engineers)}
          ${renderInterns(teamMembers.interns)}
      `;
}

function render(teamMembers) {
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
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex justify-content-center">
                ${generateTeam(teamMembers)}
            </div>
        </div>
    </div>
    

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>

</body>
</html>
    `;
}

module.exports = render;
