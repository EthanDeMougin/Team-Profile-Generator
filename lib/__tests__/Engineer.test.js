const Engineer = require("../lib/Engineer");

test("Can create a GitHub.", () => {
    const testGithub = "EthanDeMougin";
    const employeeInstance = new Engineer("Ethan", 2, "ethandemougin@gmail.com", "testGithub");
    expect(employeeInstance.github()).toBe(testGithub);
});

test("Testing GitHub creation.", () => {
    const testGithub = "EthanDeMougin";
    const employeeInstance = new Engineer("Ethan", 2, "ethandemougin@gmail.com", "testGithub");
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing Role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Ethan", 2, "ethandemougin@gmail.com", "EthanDeMougin");
    expect(employeeInstance.getRole()).toBe(returnValue);
});

module.exports = Engineer;