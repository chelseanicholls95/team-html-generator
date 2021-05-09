const addEmployees = require("./addEmployees");
const getAnswers = require("./getAnswers");

const managerQuestions = [
  {
    message: "What is the manager's name?",
    name: "managerName",
  },
  {
    message: "What is the manager's ID?",
    name: "managerId",
  },
  {
    message: "What is the manager's email?",
    name: "managerEmail",
  },
  {
    message: "What is the office number?",
    name: "officeNumber",
  },
];

const createManager = async () => {
  const managerAnswers = await getAnswers(managerQuestions);
  managerAnswers.employeeRole = "Manager";
  addEmployees(managerAnswers);
};

module.exports = createManager;
