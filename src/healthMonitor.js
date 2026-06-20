const os = require("os");

function getHealth() {

    const total = os.totalmem();

    const free = os.freemem();

    const usage =
        ((total - free) / total) * 100;

    return {
        memoryUsage:
            usage.toFixed(2) + "%"
    };
}

module.exports = getHealth;