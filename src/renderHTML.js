const fs = require('fs');
const path = require('path');

const renderHTML = content => {
    fs.writeFile(path.join(__dirname, '../dist/my-team.html'), content, err => {
        if (err) throw err;
    });
}

module.exports = renderHTML;