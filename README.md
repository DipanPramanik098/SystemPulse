# 🚀 SystemPulse

A Node.js-based System Monitoring and File Management Utility developed for **THUNDER HACKATHON 3.0**.

## 📌 Problem Statement

Build a JavaScript-based tool that gathers and displays system information, environment variables, and performs CRUD operations on code files.

SystemPulse provides a lightweight command-line interface for inspecting system information, monitoring memory usage, managing workspace files, and generating structured reports.

---

# ✨ Features

## 🖥️ System Information Collection

Collects:

* Hostname
* Platform
* CPU Architecture
* OS Type
* OS Release Version
* CPU Core Count
* CPU Model
* Total Memory
* Free Memory
* Node.js Version
* Home Directory
* Temporary Directory

---

## 🌍 Environment Variables

Displays selected environment variables:

* USERNAME
* COMPUTERNAME
* TEMP
* NODE_ENV

---

## 📊 Health Monitoring

Calculates system memory usage and displays health status.

Example:

```text
Memory Usage : 86.30%
```

---

## 📁 Workspace Scanner

Scans files inside the workspace directory.

Example:

```text
workspace/
├── app.js
├── test.js
├── notes.txt
```

---

## 🔍 File Search

Searches for keywords inside files.

Example:

```text
Keyword: Thunder

Result: Found
```

---

## ✏️ CRUD Operations

Supports complete file management.

### Create

```text
Create new file
```

### Read

```text
Read file content
```

### Update

```text
Modify existing file
```

### Delete

```text
Delete file
```

---

## 📄 Report Generation

### JSON Report

```text
reports/system-report.json
```

### HTML Dashboard

```text
reports/report.html
```

Provides a structured visual report of collected system information.

---

# 🏗️ Project Architecture

```text
                 ┌──────────────┐
                 │    User      │
                 └──────┬───────┘
                        │
                        ▼
              ┌─────────────────┐
              │ Interactive CLI │
              └──────┬──────────┘
                     │
      ┌──────────────┼──────────────┐
      │              │              │
      ▼              ▼              ▼

System Info    Environment    File Manager
 Module         Module         Module

      │              │              │
      └──────┬───────┴──────┬───────┘
             │              │
             ▼              ▼

      Report Generator   Logger

             │
             ▼

     JSON + HTML Reports
```

---

# 🔄 Code Flow

```text
Start Application
        │
        ▼
Display Interactive Menu
        │
        ▼
User Selects Action
        │
        ▼
Execute Requested Module
        │
        ▼
Collect / Process Data
        │
        ▼
Generate Output
        │
        ▼
Save Reports & Logs
        │
        ▼
Exit
```

---

# 📂 Folder Structure

```text
SystemPulse/
│
├── src/
│   ├── index.js
│   ├── cli.js
│   ├── systemInfo.js
│   ├── envInfo.js
│   ├── healthMonitor.js
│   ├── scanner.js
│   ├── search.js
│   ├── fileManager.js
│   ├── reportGenerator.js
│   ├── htmlReport.js
│   └── logger.js
│
├── workspace/
│
├── reports/
│   ├── report.html
│   └── system-report.json
│
├── logs.txt
│
├── package.json
│
└── README.md
```

---

# ⚙️ Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to project folder:

```bash
cd SystemPulse
```

Install dependencies:

```bash
npm install
```

Run the application:

```bash
node src/index.js
```

---

# 📋 Usage

Launch the application:

```bash
node src/index.js
```

Interactive menu:

```text
System Information
Environment Variables
Health Status
Workspace Files
Create File
Read File
Update File
Delete File
Generate Reports
Exit
```

---

# 🛡️ Error Handling

The application handles:

* Missing files
* Empty directories
* Invalid file operations
* Missing environment variables

Gracefully without crashing.

---

# 🎯 Strategy

The project follows a modular architecture where each functionality is isolated into a separate module.

### Strategy Flow

```text
Collect System Data
        │
        ▼
Analyze Environment
        │
        ▼
Manage Workspace Files
        │
        ▼
Generate Reports
        │
        ▼
Store Logs
        │
        ▼
Display Results
```

This approach improves maintainability, scalability, and code readability.

---

# 🚀 Future Enhancements

* Real-time system monitoring
* CPU usage visualization
* Disk usage statistics
* Export reports to PDF
* Web dashboard version
* Multi-user support

---

# 👨‍💻 Developed For

THUNDER HACKATHON 3.0

Built using:

* Node.js
* JavaScript
* HTML
* CSS

---

## Screenshots

Add screenshots here:

* Interactive CLI Menu
* HTML Dashboard Report
* System Information Output
* CRUD Operations Demo

---

⭐ Thank you for reviewing SystemPulse.
