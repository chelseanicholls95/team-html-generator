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
  const teamNameAnswer = await getAnswers(teamNameQuestion);
  const team = await createTeam();
  const generatedHTML = generateHTML(teamNameAnswer.teamName, team);
  writeToFile(generatedHTML);
};

init();
