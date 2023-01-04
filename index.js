const inquirer = require('inquirer');
const generatePage = require('./src/generatePage');
const renderPage = require('./src/renderHTML');
const employeeTypes = require('./lib');

const getEmployeeDataAsync = async () => {;
    const employeeList = [];
    while (true) {
        const response = await inquirer.prompt({
            type: 'list',
            name: 'role',
            message: 'Please select a role you would like to add:',
            choices: ['Engineer', 'Manager', 'Intern', 'quit']
        });

        const employeeRole = response.role;
        if (employeeRole === 'quit') break;
        const employeeConstructor = employeeTypes[employeeRole];
        const employeeData = await inquirer.prompt((new employeeConstructor).getIntroQuestions());

        console.log(`\nCreated new ${employeeRole} for ${employeeData.name}!\n`);
        employeeList.push({
            role: employeeRole,
            ...employeeData
        });

    }
    return employeeList;
}

getEmployeeDataAsync()
    .then(generatePage)
    .then(renderPage);