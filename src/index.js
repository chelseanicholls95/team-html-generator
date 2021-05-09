const addEmployees = require("./utils/addEmployees");
const createEmployee = require("./utils/createEmployee");
const getAnswers = require("./utils/getAnswers");

const managersQuestions = [
  {
    message: "What is the name of your team?",
    name: "teamName",
  },
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

const init = async () => {
  const managersAnswers = await getAnswers(managersQuestions);
  managersAnswers.employeeRole = "Manager";
  addEmployees(managersAnswers);
  createEmployee();
};

init();
