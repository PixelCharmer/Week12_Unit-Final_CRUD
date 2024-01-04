
// adding functionality to the add button in the new employee box
document.getElementById('submitBtn').addEventListener('click', () => { submitClick() });

// class to hold the individual empployee record 
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

    // retrive all employees from API
    static getAllEmployees() {
        return $.get(this.url);
    }

    // retrive employee by id
    static getEmployee(id) {
        return $.get((this.url) + `/${id}`);
    }

    // function to create a new employee
    static createEmployee(employee, jobTitle) {
        return $.post(this.url, employee, jobTitle);
    }

    // function to update an employee record - click pencil to make update
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

    // function to delete an employee record - click wastebasket to make update
    static deleteEmployee(id) {
        return $.ajax({
            url: this.url + `/${id}`,
            type: 'DELETE'
        });
    }
}


// creates the vitual DOM
class DOMManager {

    static getAllEmployees() {
        EmployeeLog.getAllEmployees().then(employees => this.render(employees));
    }

    // calling the delete employee function 
    static deleteEmployee(id) {
        EmployeeLog.deleteEmployee(id)
            .then(() => {
                return EmployeeLog.getAllEmployees();
            })
            .then((employees) => this.render(employees));
    }

    // calling the create employee function
    static createEmployee(employee, jobTitle) {
        EmployeeLog.createEmployee(new Employee(employee, jobTitle))
            .then(() => {
                return EmployeeLog.getAllEmployees();
            })
            .then((employees) => this.render(employees));
    }

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