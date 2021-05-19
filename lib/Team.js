class Team {
  constructor(name) {
    this.name = name;
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  getEmployees() {
    return this.employees;
  }

  getName() {
    return this.name;
  }
}

module.exports = Team;
