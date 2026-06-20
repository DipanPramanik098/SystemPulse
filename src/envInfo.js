function getEnvironmentInfo() {
  return {
    USERNAME: process.env.USERNAME || "N/A",
    COMPUTERNAME: process.env.COMPUTERNAME || "N/A",
    TEMP: process.env.TEMP || "N/A",
    NODE_ENV: process.env.NODE_ENV || "Not Set"
  };
}

module.exports =  getEnvironmentInfo;