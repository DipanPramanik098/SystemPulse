const fs = require("fs");

function log(message) {

    fs.appendFileSync(
        "logs.txt",
        `[${new Date()}] ${message}\n`
    );
}

module.exports = log;