class Employee {
    constructor (name, email, id) {
        this.name = name,
        this.email = email,
        this.id = id;
    }

    getName () {
        return this.name;
    }

    getEmail () {
        return this.email;
    }

    getId () {
        return this.email;
    }

    getRole () {
        return "Employee";
    }
}

module.exports = Employee;