const Employee = require('./Employee');
const validation = require('../src/validate');

class Intern extends Employee {

    constructor(school, ...args) {
        super(...args);
        this.school = school;
        this.role = 'Intern';

        this.introQuestions.push({
            name: 'school',
            message: 'Enter their school:',
            validate: validation.isRequired
        });
    }

    getSchool() {
        return this.school;
    }

}

module.exports = Intern;