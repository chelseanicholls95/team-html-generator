const inquirer = require("inquirer");

const getAnswers = async (questions, moreQuestions) => {
  const answers = await inquirer.prompt(questions);

  if (moreQuestions !== undefined) {
    const moreAnswers = await inquirer.prompt(moreQuestions);
    const mergedAnswers = Object.assign(answers, moreAnswers);

    return mergedAnswers;
  }

  return answers;
};

module.exports = getAnswers;
