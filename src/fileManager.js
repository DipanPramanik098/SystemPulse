const fs = require("fs");
const path = require("path");

const WORKSPACE =
    path.join(
        __dirname,
        "../workspace"
    );

function createFile(
    fileName,
    content
) {

    fs.writeFileSync(
        path.join(
            WORKSPACE,
            fileName
        ),
        content
    );
}

function readFile(fileName) {
    try {
        return fs.readFileSync(
            path.join(WORKSPACE, fileName),
            "utf8"
        );
    } catch (error) {
        return "File Not Found";
    }
}

function updateFile(
    fileName,
    content
) {

    fs.writeFileSync(
        path.join(
            WORKSPACE,
            fileName
        ),
        content
    );
}

function deleteFile(
    fileName
) {

    fs.unlinkSync(
        path.join(
            WORKSPACE,
            fileName
        )
    );
}

module.exports = {

    createFile,
    readFile,
    updateFile,
    deleteFile
};