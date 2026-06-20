const inquirer = require("inquirer");

async function showMenu() {

    const answer = await inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "Choose an option",
            choices: [
                "System Information",
                "Environment Variables",
                "Health Status",
                "Workspace Files",

                "Create File",
                "Read File",
                "Update File",
                "Delete File",

                "Generate Reports",
                "Exit"
            ]
        }
    ]);

    return answer.choice;
}

module.exports = showMenu;