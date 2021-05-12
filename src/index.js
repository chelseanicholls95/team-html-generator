const getAnswers = require("./utils/getAnswers");
const createTeam = require("./utils/createTeam");

const teamNameQuestion = [
  {
    message: "What is the name of your team?",
    name: "teamName",
  },
];

const init = async () => {
  const teamName = await getAnswers(teamNameQuestion);
  const team = await createTeam();
  console.log(team);
};

init();
