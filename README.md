<br/>
<p align="center">
  <a href="https://github.com/PixelCharmer/Week12_Unit-Final_CRUD">
    <img src="https://github.com/PixelCharmer/Week12_Unit-Final_CRUD/assets/145899504/84173e0f-834f-49d5-b707-0fc705c74f3c" alt="Logo" width="400" height="400">
  </a>

  <h1 align="center">Employee List CRUD App</h1>

  <p align="center">
    A fully functional web CRUD App
    <br/>
    <br/>
    <a href="https://github.com/PixelCharmer/Week12_Unit-Final_CRUD"><strong>Explore the docs »</strong></a>
    <br/>
    <br/>
  </p>
</p>

![Forks](https://img.shields.io/github/forks/PixelCharmer/Week12_Unit-Final_CRUD?style=social) ![Stargazers](https://img.shields.io/github/stars/PixelCharmer/Week12_Unit-Final_CRUD?style=social) ![Issues](https://img.shields.io/github/issues/PixelCharmer/Week12_Unit-Final_CRUD) 

## Table Of Contents

* [About the Project](#about-the-project)
* [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Authors](#authors)

## About The Project

![Screen Shot](https://github.com/PixelCharmer/Week12_Unit-Final_CRUD/assets/145899504/6f060af4-8966-47d3-9688-fc6faccff4b7)

This CRUD (Create, Read, Update, Delete) application is designed for managing employee data in a software department. The app follows a basic Model-View-Controller (MVC) pattern, separating data management (EmployeeLog) from UI rendering (DOMManager). It provides functionality for creating, reading, updating, and deleting employee records.

## Built With

* JavaScript
* JQuery
* Bootstrap
* CSS

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

Make sure your local machine has the latest version on npm installed 

* npm

```sh
npm install npm@latest -g
```

### Installation

1. Access API at https://65969bb86bb4ec36ca02fd61.mockapi.io/employees

2. Clone the repo

```sh
git clone https://github.com/PixelCharmer/Week12_Unit-Final_CRUD.git
```

3. Install NPM packages

```sh
npm install
```

4. Open the index.html file in a web browser.

## Usage


* Add New Employee
  * Enter the employee name and job title in the "Enter New Employee" section.
  * Click the "Add" button to create a new employee record.


* View Employee List
The app displays a list of employees retrieved from a mock API.

* Update Employee Record
  * Click the pencil icon to edit an employee's job title.
  * Update the job title and click the save icon (💾) to apply changes.

* Delete Employee Record
  * Click the wastebasket icon (🗑️) to delete an employee record.


#### Code Structure
* HTML (index.html)
  * Structure for the web page layout.
  * Includes necessary dependencies like Bootstrap and custom CSS.

* JavaScript (index.js)
  * Implements the CRUD functionalities using JQuery.
  * Defines the Employee class for employee objects.
  * Manages API calls and returns using the EmployeeLog class.
  * Handles UI rendering using the DOMManager class.

#### API Endpoint
The app interacts with a mock API endpoint: https://65969bb86bb4ec36ca02fd61.mockapi.io/employees

#### Access
Open the web page in a browser.
Add, update, or delete employee records as needed.

## Contributing

Contributions are welcome. Feel free to open issues or submit pull requests.

### Creating A Pull Request

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Authors

* **Kari Alcoset** - *Promineo Tech Front End Student* - [Kari Alcoset](https://github.com/PixelCharmer) - *Built Entire Web App*
