const Intern = require("../lib/Intern");

test("Can generate school.", () => {
    const testSchool = "School Name";
    const employeeInstance = new Intern("Ethan", 2, "ethandemougin@gmail.com", "testSchool");
    expect(employeeInstance.school).toBe(testSchool);
});

test("Testing school name.", () => {
    const testSchool = "School Name";
    const employeeInstance = new Intern("Ethan", 2, "ethandemougin@gmail.com", "testSchool");
    expect(employeeInstance.getSchool()).toBe(testSchool);
});

test("Testing Role.", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("Ethan", 2, "ethandemougin@gmail.com", "testSchool");
    expect(employeeInstance.getRole()).toBe(returnValue);
});

module.exports = Intern;