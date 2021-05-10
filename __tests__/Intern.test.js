const Intern = require("../lib/Intern");

describe("Intern class", () => {
  const internDetails = {
    employeeName: "Bob",
    employeeId: "1234",
    employeeEmail: "bob@email.com",
    school: "Birmingham, Uni of",
  };

  it("should set school via constructor", () => {
    const expected = internDetails.school;
    const intern = new Intern(internDetails);
    const actual = intern.school;

    expect(actual).toBe(expected);
  });

  it("should set employeeRole via constructor", () => {
    const expected = "Intern";
    const intern = new Intern(internDetails);
    const actual = intern.employeeRole;

    expect(actual).toBe(expected);
  });

  it("should return school when getSchool is called", () => {
    const expected = internDetails.school;
    const intern = new Intern(internDetails);
    const actual = intern.getSchool();

    expect(actual).toBe(expected);
  });

  it("should return employeeRole when getRole is called", () => {
    const expected = "Intern";
    const intern = new Intern(internDetails);
    const actual = intern.getRole();

    expect(actual).toBe(expected);
  });
});
