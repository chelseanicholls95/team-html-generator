const getAnswers = require("./getAnswers");

const createEmployee = async () => {
  const selectEmployeeQuestion = [
    {
      type: "list",
      message: "Please select an employee type.",
      name: "employeeType",
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
    const { employeeType } = await getAnswers(selectEmployeeQuestion);

    if (employeeType === "Engineer") {
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
      console.log(engineerAnswers);
    } else if (employeeType === "Intern") {
      const internQuestion = [
        {
          message: "What is the employee's school?",
          name: "school",
        },
      ];
      const internAnswers = await getAnswers(employeeQuestions, internQuestion);
      console.log(internAnswers);
    } else {
      inProgress = false;
    }
  }
};

module.exports = createEmployee;
