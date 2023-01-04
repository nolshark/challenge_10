const roleAliases = {
    "Engineer": {value: "github", render: "Github"},
    "Intern": {value: "school", render: "School"},
    "Manager": {value: "officeNumber", render: "Office#"}
}

const getRenderedWorkerInfo = (role, data) => {
    console.log(role, data);
    if (role === 'github') {
        return `<a href="${data}">${data}</a>`;
    } else {
        return data;
    }
}

const getPageTemplate = data => {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>My Team</title>
            <link rel="stylesheet" href="./frost.css">
            <link rel="stylesheet" href="./visibility.css">
            <link rel="stylesheet" href="./style.css">
        </head>
        <body>
            <header class="pd-5">
                <h1>My Team</h1>
            </header>
            <div class="pd-3 flex-row-wrap fill-half center-wide flex-center">
                ${data}
            </div>
        </body>
    </html>
    `
}

const generatePage = data => {
    let workerCards = '';

    data.forEach(worker => {
        const workerRoleInfo = roleAliases[worker.role];
        const workerRoleData = worker[workerRoleInfo.value];

        const workerCard = `
        <div class="card flex-column flex-start mg-3">
            <div class="card-header pd-2 pd-3-top pd-2-bottom-all flex-1"> 
                <h2>${worker.name}</h2>
                <p>${worker.role}</p>
            </div>
            <div class="card-content-box mg-3-top pd-2-bottom-all pd-2 flex-2">
                <p><span>ID: </span>${worker.id}</p>
                <p><span>Email: </span><a href="mailto:${worker.email}">${worker.email}</a></p>
                <p><span>${workerRoleInfo.render}: </span>${getRenderedWorkerInfo(workerRoleInfo.value, workerRoleData)}</p>
            </div>
        </div>
        `
        workerCards += workerCard;
    });

    return getPageTemplate(workerCards);
}


module.exports = generatePage;