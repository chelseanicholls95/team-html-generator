const addEmployees = require("./addEmployees");
const createManager = require("./createManager");
const createEmployee = require("./createEmployee");

const createTeam = async () => {
  await createManager();
  await createEmployee();

  const employees = addEmployees();

  return employees;
};

module.exports = createTeam;
