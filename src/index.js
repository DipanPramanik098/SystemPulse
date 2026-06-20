const ask =
    require("./inputHelper");

const {

    createFile,
    readFile,
    updateFile,
    deleteFile

} = require("./fileManager");

const showMenu = require("./cli");

const getSystemInfo =
    require("./systemInfo");

const getEnvironmentInfo =
    require("./envInfo");

const getHealth =
    require("./healthMonitor");

const scanWorkspace =
    require("./scanner");

const saveReport =
    require("./reportGenerator");

const createHTMLReport =
    require("./htmlReport");

const log =
    require("./logger");

const Workspace_Statistics = require('./workspaceStats');

async function start() {

    let running = true;

    while (running) {

        const choice =
            await showMenu();

        switch (choice) {

            case "Create File":

                const createName =
                    await ask(
                        "File Name:"
                    );

                const createContent =
                    await ask(
                        "Content:"
                    );

                createFile(
                    createName,
                    createContent
                );

                console.log(
                    "File Created Successfully"
                );

                break;

            case "Read File":

                const readName =
                    await ask(
                        "File Name:"
                    );

                console.log(
                    readFile(
                        readName
                    )
                );

                break;

            case "Update File":

                const updateName =
                    await ask(
                        "File Name:"
                    );

                const updateContent =
                    await ask(
                        "New Content:"
                    );

                updateFile(
                    updateName,
                    updateContent
                );

                console.log(
                    "File Updated"
                );

                break;
            case "Delete File":

                const deleteName =
                    await ask(
                        "File Name:"
                    );

                deleteFile(
                    deleteName
                );

                console.log(
                    "File Deleted"
                );

                break;

            
            case "System Information":

                console.table(
                    getSystemInfo()
                );

                break;

            case "Environment Variables":

                console.table(
                    getEnvironmentInfo()
                );

                break;

            case "Health Status":

                console.table(
                    getHealth()
                );

                break;

            case "Workspace Files":

                console.table(
                    scanWorkspace()
                );

                break;

            case "Generate Reports":

                const reportData = {

                    timestamp:
                        new Date(),

                    systemInfo:
                        getSystemInfo(),

                    envInfo:
                        getEnvironmentInfo(),

                    health:
                        getHealth()
                };

                saveReport(reportData);

                createHTMLReport(
                    reportData
                );

                log(
                    "Report Generated"
                );

                console.log(
                    "\nReports Generated Successfully\n"
                );

                break;

            case "Exit":

                running = false;

                console.log(
                    "Thank You For Using SystemPulse"
                );

                break;
        }
    }
}

start();