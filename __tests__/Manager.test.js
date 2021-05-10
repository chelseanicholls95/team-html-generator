const Manager = require("../lib/Manager");

describe("Manager class", () => {
  const managerDetails = {
    employeeName: "Bob",
    employeeId: "1234",
    employeeEmail: "bob@email.com",
    officeNumber: "0121 111 1111",
  };

  it("should set officeNumber via constructor", () => {
    const expected = managerDetails.officeNumber;
    const manager = new Manager(managerDetails);
    const actual = manager.officeNumber;

    expect(actual).toBe(expected);
  });

  it("should set employeeRole via constructor", () => {
    const expected = "Manager";
    const manager = new Manager(managerDetails);
    const actual = manager.employeeRole;

    expect(actual).toBe(expected);
  });

  it("should return officeNumber when getOfficeNumber is called", () => {
    const expected = managerDetails.officeNumber;
    const manager = new Manager(managerDetails);
    const actual = manager.getOfficeNumber();

    expect(actual).toBe(expected);
  });

  it("should return employeeRole when getRole is called", () => {
    const expected = "Manager";
    const manager = new Manager(managerDetails);
    const actual = manager.getRole();

    expect(actual).toBe(expected);
  });
});
