const inquirer = require("inquirer");

const getAnswers = async (questions, moreQuestions) => {
  const answers = await inquirer.prompt(questions);

  if (moreQuestions !== undefined) {
    const moreAnswers = await inquirer.prompt(moreQuestions);

    return { ...answers, ...moreAnswers };
  }

  return answers;
};

module.exports = getAnswers;
