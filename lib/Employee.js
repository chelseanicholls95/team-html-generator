class Employee {
  constructor({ employeeName, employeeId, employeeEmail }) {
    this.employeeName = employeeName;
    this.employeeId = employeeId;
    this.employeeEmail = employeeEmail;
  }

  getRole() {
    this.employeeRole = "Employee";
  }
}

module.exports = Employee;
