const validation = require('../src/validate');

class Employee {

    introQuestions = [
        {
            name: 'name',
            message: 'Enter their name:',
            validate: validation.isRequired
        },
        {
            name: 'id',
            message: 'Enter their ID:',
            validate: validation.isNumber
        },
        {
            name: 'email',
            message: 'Enter their email:',
            validate: validation.isRequired
        }
    ]

    constructor(id, email, name) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.role = 'Employee';
    }

    getIntroQuestions() {
        return this.introQuestions;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }

}

module.exports = Employee;