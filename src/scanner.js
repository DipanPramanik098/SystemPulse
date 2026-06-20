const fs = require("fs");
const path = require("path");

function scanWorkspace() {

    const files =
        fs.readdirSync(
            path.join(__dirname, "../workspace")
        );

    return files;
}

module.exports = scanWorkspace;