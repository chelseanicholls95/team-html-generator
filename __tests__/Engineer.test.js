const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
  const engineerDetails = {
    employeeName: "Bob",
    employeeId: "1234",
    employeeEmail: "bob@email.com",
    github: "bob111",
  };

  it("should set github via constructor", () => {
    const expected = engineerDetails.github;
    const engineer = new Engineer(engineerDetails);
    const actual = engineer.github;

    expect(actual).toBe(expected);
  });

  it("should set employeeRole via constructor", () => {
    const expected = "Engineer";
    const engineer = new Engineer(engineerDetails);
    const actual = engineer.employeeRole;

    expect(actual).toBe(expected);
  });

  it("should return github when getGithub is called", () => {
    const expected = engineerDetails.github;
    const engineer = new Engineer(engineerDetails);
    const actual = engineer.getGithub();

    expect(actual).toBe(expected);
  });

  it("should return employeeRole when getRole is called", () => {
    const expected = "Engineer";
    const engineer = new Engineer(engineerDetails);
    const actual = engineer.getRole();

    expect(actual).toBe(expected);
  });
});
