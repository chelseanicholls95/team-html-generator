const createManagerHTML = (each) => {
  const { employeeName, employeeId, employeeEmail, officeNumber } = each;
  return `<div class="card text-white bg-secondary m-2" style="width: 18rem">
  <div class="card-header">
    ${employeeName}
    <div><i class="fas fa-mug-hot"></i> Manager</div>
  </div>
  <div class="card-body">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${employeeId}</li>
      <li class="list-group-item">
        Email: <a href="mailto:${employeeEmail}">${employeeEmail}</a>
      </li>
      <li class="list-group-item">Office number: ${officeNumber}</li>
    </ul>
  </div>
</div>`;
};

const createEngineerHTML = (each) => {
  const { employeeName, employeeId, employeeEmail, github } = each;
  return `<div class="card text-white bg-secondary m-2" style="width: 18rem">
  <div class="card-header">
    ${employeeName}
    <div><i class="fas fa-glasses"></i> Engineer</div>
  </div>
  <div class="card-body">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${employeeId}</li>
      <li class="list-group-item">
        Email: <a href="mailto:${employeeEmail}">${employeeEmail}</a>
      </li>
      <li class="list-group-item">
        Github:
        <a href="https://github.com/${github}" target="_blank">${github}</a>
      </li>
    </ul>
  </div>
</div>`;
};

const createInternHTML = (each) => {
  const { employeeName, employeeId, employeeEmail, school } = each;

  return `<div class="card text-white bg-secondary m-2" style="width: 18rem">
  <div class="card-header">
    ${employeeName}
    <div><i class="fas fa-user-graduate"></i> Intern</div>
  </div>
  <div class="card-body">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${employeeId}</li>
      <li class="list-group-item">
        Email: <a href="mailto:${employeeEmail}">${employeeEmail}</a>
      </li>
      <li class="list-group-item">School: ${school}</li>
    </ul>
  </div>
</div>`;
};

const checkEmployeesAndGenerateHTML = (each) => {
  if (each.employeeRole === "Manager") {
    return createManagerHTML(each);
  } else if (each.employeeRole === "Engineer") {
    return createEngineerHTML(each);
  } else {
    return createInternHTML(each);
  }
};

const generateHTML = (teamName, team) => {
  const employees = team.slice(0, -1).map(checkEmployeesAndGenerateHTML);
  const manager = employees[0];
  const teamMembers = employees.slice(1).join();

  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0"
        crossorigin="anonymous"
      />
      <script
        src="https://kit.fontawesome.com/9287fb9c3e.js"
        crossorigin="anonymous"
      ></script>
      <title>${teamName}</title>
    </head>
    <body>
      <div>
        <header class="p-4 text-center bg-secondary bg-gradient mb-4">
          <h1>${teamName}</h1>
        </header>
        <div class="container d-flex justify-content-center">
          ${manager}
        </div>
        <div class="container d-flex justify-content-center flex-wrap">
          ${teamMembers}
        </div>
      </div>
    </body>
  </html>`;
};

module.exports = generateHTML;
