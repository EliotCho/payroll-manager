// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// Collect employee data
const collectEmployees = function () {
  // Get user input to create and return an array of employee objects
  const employeesArray = [];
  let addEmployee = true;

  // loop to add employees
  while (addEmployee) {
    // prompt user for employee data
    let firstName = prompt("Enter the employee's first name:");
    let lastName = prompt("Enter the employee's last name:");
    let salary = prompt("Enter the employee's salary:");

    if (isNaN(salary)) {
      alert(
        "Invalid salary input, will be calculated as default value of $0 (zero)."
      );
      salary = parseFloat(0);
    } else {
      salary = parseFloat(salary);
    }

    // employee object
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary,
    };
    // add employee to the employees array
    employeesArray.push(employee);

    // ask user if they want to add another employee
    addEmployee = confirm("Would you like to add another employee?");
  } // end while loop if user does not want to add another employee
  return employeesArray;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // Calculate and display the average salary
  let totalSalary = 0;

  // loop through the employees array and add up the salaries
  for (let i = 0; i < employeesArray.length; i++) {
    totalSalary += employeesArray[i].salary;
  }

  // calculate the average salary
  const averageSalary = totalSalary / employeesArray.length;
  console.log(
    `The average employee salary between our ${employeesArray.length} employee(s) is ${averageSalary}`
  );
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // Select and display a random employee
  const randomIndex = Math.floor(Math.random() * employeesArray.length);

  // display the random employee
  console.log(
    `Congratulations to ${employeesArray[randomIndex].firstName} ${employeesArray[randomIndex].lastName}, our random drawing winner!`
  );
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
