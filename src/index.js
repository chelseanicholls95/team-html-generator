const getAnswers = require("./utils/getAnswers");
const createTeam = require("./utils/createTeam");
const generateHTML = require("./utils/generateHTML");
const writeToFile = require("./utils/writeToFile");

const teamNameQuestion = [
  {
    message: "What is the name of your team?",
    name: "teamName",
    validate: (teamName) => teamName !== "",
  },
];

const init = async () => {
  const { teamName } = await getAnswers(teamNameQuestion);
  const team = await createTeam(teamName);
  const generatedHTML = generateHTML(team);
  writeToFile(generatedHTML);
};

init();
