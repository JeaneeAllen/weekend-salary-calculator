let totalMonthlyCost = 0;

function submitForm(event){
    console.log('running submit employee data');
    event.preventDefault();

let fname = document.querySelector('#fnameInput').value;
let lname = document.querySelector('#lnameInput').value;
let idNumber = document.querySelector('#idInput').value;
let title = document.querySelector('#titleInput').value;
let annualSalary = document.querySelector('#salaryInput').value;

console.log('inputs:', fname, lname, idNumber, title, annualSalary);

const monthlySalary = annualSalary / 12;
totalMonthlyCost += monthlySalary;

const newTableRow = document.createElement('tr');
newTableRow.innerHTML = `
    <td>First Name</td>
    <td>Last Name</td>
    <td>ID Number</td>
    <td>Job Title</td>
     <td>Annual Salary</td>
    <td><button class="delete-btn" onclick="deleteTableRow()">Delete</button></td> 
`

}


// First name: <input type="text" id="fnameInput" placeholder="First Name" required><br><br>
// <class data-testid="firstNameInput"></class>

// Last name: <input type="text" id="lnameInput" placeholder="Last Name" required><br><br>
// <class data-testid="lastNameInput"></class>

// ID Number: <input type="text" id="idInput" placeholder="ID Number" required><br><br>
// <class data-testid="idInput"></class>

// Job Title: <input type="text" id="titleInput" placeholder="Job Title" required><br><br>
// <class data-testid="titleInput"></class>

// Annual Salary: <input type="text" id="salaryInput" placeholder="Annual Salary" required><br><br>
// <class data-testid="annualSalaryInput"></class>

// <button data-testid="submitButton">Submit</button> <!-- Req 2: Submit Button-->
// </form>