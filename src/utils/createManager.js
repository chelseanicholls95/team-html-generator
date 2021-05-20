const Manager = require("../../lib/Manager");
const getAnswers = require("./getAnswers");

const managerQuestions = [
  {
    message: "What is the manager's name?",
    name: "employeeName",
    validate: (employeeName) => employeeName !== "",
  },
  {
    message: "What is the manager's ID?",
    name: "employeeId",
    validate: (employeeId) => employeeId !== "",
  },
  {
    message: "What is the manager's email?",
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
  {
    type: "input",
    message: "What is the office number?",
    name: "officeNumber",
    validate: (officeNumber) => {
      if (officeNumber === "" || isNaN(officeNumber)) {
        console.log(" Please enter a valid number");
      } else {
        return true;
      }
    },
  },
];

const createManager = async (team) => {
  const managerAnswers = await getAnswers(managerQuestions);
  const manager = new Manager(managerAnswers);

  team.addEmployee(manager);
};

module.exports = createManager;
