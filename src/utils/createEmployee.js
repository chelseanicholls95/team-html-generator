const Engineer = require("../../lib/Engineer");
const Intern = require("../../lib/Intern");

const getAnswers = require("./getAnswers");

const createEmployee = async (team) => {
  const selectEmployeeQuestion = [
    {
      type: "list",
      message: "Please select an employee role.",
      name: "employeeRole",
      choices: ["Engineer", "Intern", "None"],
    },
  ];

  const employeeQuestions = [
    {
      message: "What is the employee's name?",
      name: "employeeName",
      validate: (employeeName) => employeeName !== "",
    },
    {
      message: "What is the employee's ID?",
      name: "employeeId",
      validate: (employeeId) => employeeId !== "",
    },
    {
      message: "What is the employee's email?",
      name: "employeeEmail",
      validate: (employeeEmail) => {
        valid =
          /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
            employeeEmail
          );
        if (employeeEmail !== "" && valid) {
          return true;
        } else {
          console.log(" Please enter a valid email");
        }
      },
    },
  ];

  let inProgress = true;

  while (inProgress) {
    const { employeeRole } = await getAnswers(selectEmployeeQuestion);

    if (employeeRole === "Engineer") {
      const engineerQuestion = [
        {
          message: "What is the employee's Github username?",
          name: "github",
          validate: (github) => github !== "",
        },
      ];

      const engineerAnswers = await getAnswers(
        employeeQuestions,
        engineerQuestion
      );

      const engineer = new Engineer(engineerAnswers);

      team.addEmployee(engineer);
    } else if (employeeRole === "Intern") {
      const internQuestion = [
        {
          message: "What is the employee's school?",
          name: "school",
          validate: (school) => school !== "",
        },
      ];

      const internAnswers = await getAnswers(employeeQuestions, internQuestion);

      const intern = new Intern(internAnswers);

      team.addEmployee(intern);
    } else {
      inProgress = false;
    }
  }
};

module.exports = createEmployee;
