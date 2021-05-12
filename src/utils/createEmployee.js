const Employee = require("../../lib/Employee");
const Engineer = require("../../lib/Engineer");
const Intern = require("../../lib/Intern");

const addEmployees = require("./addEmployees");
const getAnswers = require("./getAnswers");

const createEmployee = async () => {
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
      default: "Name unknown",
    },
    {
      message: "What is the employee's ID?",
      name: "employeeId",
      default: "ID unknown",
    },
    {
      message: "What is the employee's email?",
      name: "employeeEmail",
      default: "Email unknown",
    },
  ];

  let inProgress = true;

  while (inProgress) {
    const { employeeRole } = await getAnswers(selectEmployeeQuestion);

    if (employeeRole === "Engineer") {
      const engineerQuestion = [
        {
          message: "What is the employee's Github?",
          name: "github",
        },
      ];

      const engineerAnswers = await getAnswers(
        employeeQuestions,
        engineerQuestion
      );

      const engineer = new Engineer(engineerAnswers);

      addEmployees(engineer);
    } else if (employeeRole === "Intern") {
      const internQuestion = [
        {
          message: "What is the employee's school?",
          name: "school",
        },
      ];

      const internAnswers = await getAnswers(employeeQuestions, internQuestion);

      const intern = new Intern(internAnswers);

      addEmployees(intern);
    } else {
      inProgress = false;
    }
  }
};

module.exports = createEmployee;
