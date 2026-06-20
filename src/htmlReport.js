const fs = require("fs");
const path = require("path");

function createHTMLReport(data) {
    const generatedTime =
        new Date().toLocaleString();
    const generateRows = (obj) => {
        let rows = "";

        for (const key in obj) {
            rows += `
            <tr>
                <td>${key}</td>
                <td>${obj[key]}</td>
            </tr>
            `;
        }

        return rows;
    };

    const html = `
<!DOCTYPE html>
<html>

<head>

    <title>SystemPulse Report</title>

    <style>

        body{
            font-family: Arial, sans-serif;
            margin: 40px;
            background: #f4f6f9;
        }

        h1{
            text-align:center;
            color:#0078ff;
        }

        .card{
            background:white;
            padding:20px;
            margin-bottom:20px;
            border-radius:12px;
            box-shadow:0 2px 8px rgba(0,0,0,0.1);
        }

        table{
            width:100%;
            border-collapse:collapse;
        }

        th,td{
            border:1px solid #ddd;
            padding:10px;
            text-align:left;
        }

        th{
            background:#0078ff;
            color:white;
        }

    </style>

</head>

<body>

    <h1>🚀 SystemPulse Report</h1>
    <p>Generated At: ${generatedTime}</p>
    <div class="card">

        <h2>System Information</h2>

        <table>

            <tr>
                <th>Key</th>
                <th>Value</th>
            </tr>

            ${generateRows(data.systemInfo)}

        </table>

    </div>

    <div class="card">

        <h2>Environment Variables</h2>

        <table>

            <tr>
                <th>Key</th>
                <th>Value</th>
            </tr>

            ${generateRows(data.envInfo)}

        </table>

    </div>

    <div class="card">

        <h2>Health Status</h2>

        <table>

            <tr>
                <th>Key</th>
                <th>Value</th>
            </tr>

            ${generateRows(data.health)}

        </table>

    </div>

</body>

</html>
`;

    const reportPath = path.join(
        __dirname,
        "../reports/report.html"
    );

    fs.writeFileSync(reportPath, html);

    return reportPath;
}

module.exports = createHTMLReport;