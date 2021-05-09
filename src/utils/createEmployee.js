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

      engineerAnswers.employeeRole = "Engineer";

      addEmployees(engineerAnswers);
    } else if (employeeRole === "Intern") {
      const internQuestion = [
        {
          message: "What is the employee's school?",
          name: "school",
        },
      ];

      const internAnswers = await getAnswers(employeeQuestions, internQuestion);

      internAnswers.employeeRole = "Intern";

      addEmployees(internAnswers);
    } else {
      inProgress = false;
    }
  }
};

module.exports = createEmployee;
