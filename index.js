/* It follows a basic model-view-controller (MVC) pattern, separating data management (EmployeeLog) from UI rendering (DOMManager).
It provides functionality for creating, reading, updating, and deleting (CRUD) employee data. 
*/



// adding functionality to the add button in the new employee box
// when the button is clicked, it calls the submitClick() function
document.getElementById('submitBtn').addEventListener('click', () => { submitClick() });

// defines the blueprint that represents the employee objects
// its used to structure the employee data with properties employee name and jobtitle
class Employee {
    constructor(employee, jobTitle) {
        this.employee = employee;
        this.jobTitle = jobTitle;
    }
}

// API calls and runs the returns
// data is pulled from mock API I created
class EmployeeLog {
    static url = 'https://65969bb86bb4ec36ca02fd61.mockapi.io/employees'

    // grabs all employees from the API
    static getAllEmployees() {
        return $.get(this.url);
    }

    // grabs a specific employee by ID index 
    static getEmployee(id) {
        return $.get((this.url) + `/${id}`);
    }

    // method to create a new employee
    static createEmployee(employee, jobTitle) {
        return $.post(this.url, employee, jobTitle);
    }

    // method to update an employee record
    // click pencil to make update
    static updateEmployee(id, jobTitle) {
        $(`#editEmployee_${id}`).show();
        $(`#${id} p`).hide();

        return $.ajax({
            url: this.url + '/' + id,
            dataType: 'json',
            data: JSON.stringify({ jobTitle: jobTitle }),
            contentType: 'application/json',
            type: 'PUT'
        }).then(() => {
            return EmployeeLog.getAllEmployees();
        })
            .then((employees) => {
                DOMManager.render(employees);
            });
    }

    // method to delete an employee record
    // click wastebasket to active the delete 
    static deleteEmployee(id) {
        return $.ajax({
            url: this.url + `/${id}`,
            type: 'DELETE'
        });
    }
}


// manages the display of employee data in the HTML documen
class DOMManager {

    // grabs all employees and renders them in the page
    static getAllEmployees() {
        EmployeeLog.getAllEmployees().then(employees => this.render(employees));
    }

    // deletes an employee and updates the display
    static deleteEmployee(id) {
        EmployeeLog.deleteEmployee(id)
            .then(() => {
                return EmployeeLog.getAllEmployees();
            })
            .then((employees) => this.render(employees));
    }

    // creates a new employee and updates the display
    static createEmployee(employee, jobTitle) {
        EmployeeLog.createEmployee(new Employee(employee, jobTitle))
            .then(() => {
                return EmployeeLog.getAllEmployees();
            })
            .then((employees) => this.render(employees));
    }

    // renders the provided employee data in HTML format
    // rendering multiple instances of employee using a for each loop
    // new instances are prepended to the list
    static render(employees) {
        this.employees = employees;
        $('#app').empty();
        for (const employee of employees) {
            $('#app').prepend(
                `<div id="${employee.id}" class="card">
                <div>
                    <h5>${employee.employee}:</h5>
                    <p>Job Title: ${employee.jobTitle}</p>

                    <div id="editEmployee_${employee.id}" style="display: none;">
                        <textarea type="text" id="editText_${employee.id}" rows="5" cols="30" value="${employee.jobTitle}">${employee.jobTitle}</textarea>
                        <button class="btn btn-outline-primary" onclick="DOMManager.saveEmployee('${employee.id}')">💾</button>
                    </div>

                    <button class="btn btn-outline-primary" id="updateEmployee" onclick="DOMManager.updateEmployee('${employee.id}')">✏️</button>
                    <button class="btn btn-outline-danger" onclick="DOMManager.deleteEmployee('${employee.id}')">🗑️</button>
                </div>
            </div>`
            );
        }
    }

    // when editing an employee record this only shows the edit text box
    static updateEmployee(id) {
        $(`#editEmployee_${id}`).show();
        $(`#${id} p`).hide();
    }

    // display the updated jop title and update the API and re-rendere the log
    static saveEmployee(id) {
        let jobTitle = $(`#editText_${id}`).val();
        EmployeeLog.updateEmployee(id, jobTitle)
            .then(() => {
                return EmployeeLog.getAllEmployees();
            })
            .then((employees) => this.render(employees));
    }
}

// submits the new employee data to the log and clears the textbox 
function submitClick() {
    let employee = document.getElementById('employeeName').value;
    let jobTitle = document.getElementById('jobTitle').value;
    DOMManager.createEmployee(employee, jobTitle);
    document.getElementById('employeeName').value = "";
    document.getElementById('jobTitle').value = "";
};

// loads the page and shows all the employees from the API 
DOMManager.getAllEmployees();