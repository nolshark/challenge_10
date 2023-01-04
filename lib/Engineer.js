const Employee = require('./Employee');
const validation = require('../src/validate');

class Engineer extends Employee {

    constructor(github, ...args) {
        super(...args);
        this.github = github;
        this.role = 'Engineer';

        this.introQuestions.push({
            name: 'github',
            message: 'Enter their Github:',
            validate: validation.isRequired
        })
    }

    getGithub() {
        return this.github;
    }

}

module.exports = Engineer;