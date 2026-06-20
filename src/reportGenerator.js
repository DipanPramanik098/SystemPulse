const fs = require("fs");
const path = require("path");

function saveReport(data) {
  const reportPath = path.join(
    __dirname,
    "../reports/system-report.json"
  );

  fs.writeFileSync(
    reportPath,
    JSON.stringify(data, null, 2)
  );

  return reportPath;
}

module.exports = saveReport;