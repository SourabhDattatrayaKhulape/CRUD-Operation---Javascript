var selectedRow = null;

//Show alert

function showAlert(message, className)
{
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").removeEventListener(),3000);

}


//Clear All Fields
function clearFields(){
    document.querySelector("#firstName").value = "";
    document.querySelector("#lastName").value = "";
    document.querySelector("#rollNumber").value = "";
}


//Add Data
document.querySelector("#student-form").addEventListener("submit",(e) => 
{
    e.preventDefault();

    //get form value
    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const rollNumber = document.querySelector("#rollNumber").value;

    //validate
    if(firstName == "" || lastName == "" || rollName == "")
    {
        showAlert("Please fill in the fields", "danger");
    }else
    {
        if(selectedRow == null){
            const list = document.querySelector("#student-list");
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${rollNumber}</td>
                <td>
                <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
                
            `;
            list.appendChild(row);
            selectedRow = null;
            showAlert("Student Added","success");
        }
    }
});


// Delete Data

document.querySelector("#structure-list").addEventListener("click",(e) => {
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Student Data Deleted","danger");
    }
});