const createManager = require("./createManager");
const createEmployee = require("./createEmployee");
const Team = require("../../lib/Team");

const createTeam = async (teamName) => {
  const team = new Team(teamName);

  await createManager(team);
  await createEmployee(team);

  return team;
};

module.exports = createTeam;
