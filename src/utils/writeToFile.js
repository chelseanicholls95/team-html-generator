const fs = require("fs");

const writeToFile = (data) => {
  const callback = (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Successfully added to file!");
    }
  };

  fs.writeFile("generated-team.html", data, callback);
};

module.exports = writeToFile;
