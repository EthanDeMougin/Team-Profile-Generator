const Employee = require("./Employee");

class Intern extends Employee {
    constructor (name, email, id, school) {
        this.name = name,
        this.email = email,
        this.id = id,
        this.school;
    }

    getSchool () {
        return this.school;
    }

    getRole () {
        return "Intern";
    }
}

module.exports = Intern;