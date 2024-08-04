
# Cosmocloud Employee Hub



## Overview

This project is an Employee Management System built using ReactJS for the frontend and Cosmocloud with MongoDB for the backend. It allows users to manage employee records, including adding, updating, deleting, and viewing detailed information about employees.
## Features

- Employee Listing: View a list of employees with basic information.
- Add Employee: Add new employees with details like name, ID, address, and contact information.
- Delete Employee: Remove employees from the system.
- Employee Details: View detailed information about a specific employee.



## Tech Stack

**Frontend:** 
- React.js for building the user interface.
- React Hooks (useState, useEffect) for state management and side effects.
- Styled Components or CSS for styling.


**Backend:** 
- Cosmocloud API for managing employee data.
- RESTful API endpoints for CRUD operations.

**Additional Tools:**
- SweetAlert2 for user confirmation dialogs and notifications.
## Getting Started

To run the application locally:

```bash
  git clone <repository-url>
  cd <project-directory>

```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

Open the Application:

- Navigate to http://localhost:3000 in your web browser to view the application.
## API Endpoints

#### Get All Employees

```http
  https://free-ap-south-1.cosmocloud.io/development/api/employees
```



#### Get Employee by ID

```http
  GET https://free-ap-south-1.cosmocloud.io/development/api/employees/{id}
```


#### Add New Employee

```http
 POST https://free-ap-south-1.cosmocloud.io/development/api/employees
```

### Delete Employee:


```http
DELETE https://free-ap-south-1.cosmocloud.io/development/api/employees/{id}
```
## Notes

- Ensure that the API service used for data storage is properly configured and accessible.
- The application is designed to be user-friendly and intuitive for managing employee records.
**Cosmocloud:** Refer https://docs.cosmocloud.io/
