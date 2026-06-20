const fs = require("fs");
const path = require("path");

function searchText(fileName, keyword) {

    try {

        const filePath = path.join(
            __dirname,
            "../workspace",
            fileName
        );

        const content =
            fs.readFileSync(
                filePath,
                "utf8"
            );

        return content.includes(keyword);

    } catch (error) {

        return false;
    }
}

module.exports = searchText;