const Manager = require("../../lib/Manager");
const addEmployees = require("./addEmployees");
const getAnswers = require("./getAnswers");

const managerQuestions = [
  {
    message: "What is the manager's name?",
    name: "employeeName",
  },
  {
    message: "What is the manager's ID?",
    name: "employeeId",
  },
  {
    message: "What is the manager's email?",
    name: "employeeEmail",
  },
  {
    type: "number",
    message: "What is the office number?",
    name: "officeNumber",
  },
];

const createManager = async () => {
  const managerAnswers = await getAnswers(managerQuestions);
  const manager = new Manager(managerAnswers);
  addEmployees(manager);
};

module.exports = createManager;
