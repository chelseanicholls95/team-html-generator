const Employee = require("./Employee");

class Engineer extends Employee {
  constructor({ github, ...rest }) {
    super(rest);
    this.github = github;
    this.employeeRole = "Engineer";
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return this.employeeRole;
  }
}

module.exports = Engineer;
