// GLOBAL VARIABLES
let form, table, tbody;
let employees, storedEmployees;

// CREATE AN INITIAL ARRAY OF 5 EMPLOYEES
// [8-digit employee id, name, 4-digit extension, email, department]
employees = [
    [10000123, "Jane Doe", 4444, "jdoe@co.com", "QA"],
    [10000124, "John Deer", 5555, "jdeer@co.com", "Administrative"],
    [10000125, "Fred Johnson", 4466, "fjohnson@co.com", "Marketing"],
    [10000126, "Alice Johnson", 4467, "ajohnson@co.com", "Marketing"],
    [10000127, "Shea Smith", 5577, "ssmith@co.com", "Executive"],
];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF IT DOES, RETURN STORAGE OBJECT INSTEAD OF POPULATED ARRAY
storedEmployees = localStorage.getItem("employees") || "";
if (storedEmployees.length > 0) {  // checking length of JSON string, not array
    employees = JSON.parse(storedEmployees);
}

// GET DOM ELEMENTS
form = document.getElementById("addForm");
table = document.getElementById("empTable");
tbody = table.querySelector("tbody");

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
window.addEventListener('load', buildGrid(employees));

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {

    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let newId = document.getElementById('id').value;
    let newName = document.getElementById('name').value;
    let newExt = document.getElementById('extension').value;
    let newEmail = document.getElementById('email').value;
    let newDept = document.getElementById('department').value;

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmployee = [newId, newName, newExt, newEmail, newDept];

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmployee);

    // BUILD THE GRID
    buildGrid(employees);

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    if (e.target.tagName == "BUTTON") {

        // CONFIRM THE DELETE
        if (confirm('Are you sure you want to delete this employee?')) {

            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            let i = e.target.parentElement.parentElement.rowIndex;

            // REMOVE EMPLOYEE FROM ARRAY
            employees.splice(i-1, 1);

            // BUILD THE GRID
            buildGrid(employees);
        } // end if confirm
    } // end if button was clicked
}); 

// BUILD THE EMPLOYEES GRID
function buildGrid(rowArray) {

    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    tbody.innerHTML = "";

    // REBUILD THE TBODY FROM SCRATCH
    // LOOP THROUGH ARRAY OF EMPLOYEES, REBUILDING THE ROW STRUCTURE
    // BIND THE TBODY TO THE EMPLOYEE TABLE
    for (row of rowArray) {
        tbody.innerHTML += "<tr><td>" 
                        + row.join("</td><td>") 
                        + "</td><td>" 
                        + "<button class='btn btn-danger btn-sm float-end'>X</button>"
                        + "</td></tr>"
    }

    // UPDATE EMPLOYEE COUNT
    document.getElementById("empCount").value = "(" + rowArray.length + ")";

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem("employees", JSON.stringify(rowArray));
};

