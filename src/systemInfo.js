const os = require("os");

function getSystemInfo() {
    return {
        hostname: os.hostname(),
        platform: os.platform(),
        architecture: os.arch(),
        osType: os.type(),
        release: os.release(),
        uptime: os.uptime(),
        totalMemory:
            (os.totalmem() / 1024 / 1024 / 1024).toFixed(2) + " GB",

        freeMemory:
            (os.freemem() / 1024 / 1024 / 1024).toFixed(2) + " GB",
        cpuCores: os.cpus().length,
        cpuModel:
            os.cpus()[0].model,
        cpuSpeed:
            os.cpus()[0].speed + " MHz",
        homeDirectory: os.homedir(),
        tempDirectory: os.tmpdir(),
        nodeVersion: process.version
    };
}

module.exports = getSystemInfo;