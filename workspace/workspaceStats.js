const fs = require("fs");
const path = require("path");

function getWorkspaceStats() {

    const files =
        fs.readdirSync(
            path.join(
                __dirname,
                "../workspace"
            )
        );

    return {
        totalFiles: files.length
    };
}

module.exports =
    getWorkspaceStats;