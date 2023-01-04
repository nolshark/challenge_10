const Employee = require('./Employee');
const validation = require('../src/validate');

class Manager extends Employee {
    constructor(officeNumber, ...args) {
        super(...args);
        this.officeNumber = officeNumber;
        this.role = 'Manager';

        this.introQuestions.push({
            name: 'officeNumber',
            message: 'Enter their office number:',
            validate: validation.isNumber
        });
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

}

module.exports = Manager;