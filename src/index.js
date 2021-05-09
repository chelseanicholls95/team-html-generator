const addEmployees = require("./utils/addEmployees");
const createEmployee = require("./utils/createEmployee");
const createManager = require("./utils/createManager");
const getAnswers = require("./utils/getAnswers");

const initialQuestion = [
  {
    message: "What is the name of your team?",
    name: "teamName",
  },
];

const init = async () => {
  const initialAnswer = await getAnswers(initialQuestion);
  await createManager();
  await createEmployee();
};

init();
