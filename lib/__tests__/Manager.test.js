const Manager = require("../lib/Manager");

test("Can create an office number.", () => {
    const testOfficeNumber = 2;
    const employeeInstance = new Manager("Ethan", 2, "ethandemougin@gmail.com", "testOfficeNumber");
    expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

test("Testing office number.", () => {
    const testOfficeNumber = 2;
    const employeeInstance = new Manager("Ethan", 2, "ethandemougin@gmail.com", "testOfficeNumber");
    expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Testing Role.", () => {
    const returnValue = "Manager";
    const employeeInstance = new Manager("Ethan", "ethandemougin@gmail.com", 2);
    expect(employeeInstance.getRole()).toBe(returnValue);
});

module.exports = Manager;