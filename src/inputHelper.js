const inquirer =
    require("inquirer");

async function ask(
    message
) {

    const answer =
        await inquirer.prompt([
            {
                type: "input",
                name: "value",
                message
            }
        ]);

    return answer.value;
}

module.exports =
    ask;