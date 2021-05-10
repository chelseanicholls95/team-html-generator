const Employee = require("../lib/Employee");

describe("Employee class", () => {
  const employeeDetails = {
    employeeName: "Bob",
    employeeId: "1234",
    employeeEmail: "bob@email.com",
  };

  it("should set employeeName via constructor", () => {
    const expected = employeeDetails.employeeName;
    const employee = new Employee(employeeDetails);
    const actual = employee.employeeName;

    expect(actual).toBe(expected);
  });

  it("should set employeeId via constructor", () => {
    const expected = employeeDetails.employeeId;
    const employee = new Employee(employeeDetails);
    const actual = employee.employeeId;

    expect(actual).toBe(expected);
  });

  it("should set employeeEmail via constructor", () => {
    const expected = employeeDetails.employeeEmail;
    const employee = new Employee(employeeDetails);
    const actual = employee.employeeEmail;

    expect(actual).toBe(expected);
  });

  it("should set employeeRole via constructor", () => {
    const expected = "Employee";
    const employee = new Employee(employeeDetails);
    const actual = employee.employeeRole;

    expect(actual).toBe(expected);
  });

  it("should return employeeName when getName is called", () => {
    const expected = employeeDetails.employeeName;
    const employee = new Employee(employeeDetails);
    const actual = employee.getName();

    expect(actual).toBe(expected);
  });

  it("should return employeeId when getId is called", () => {
    const expected = employeeDetails.employeeId;
    const employee = new Employee(employeeDetails);
    const actual = employee.getId();

    expect(actual).toBe(expected);
  });

  it("should return employeeEmail when getEmail is called", () => {
    const expected = employeeDetails.employeeEmail;
    const employee = new Employee(employeeDetails);
    const actual = employee.getEmail();

    expect(actual).toBe(expected);
  });

  it("should return employeeRole when getRole is called", () => {
    const expected = "Employee";
    const employee = new Employee(employeeDetails);
    const actual = employee.getRole();

    expect(actual).toBe(expected);
  });
});
