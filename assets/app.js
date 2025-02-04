window.onload = () => {
    const form = document.querySelector("#addForm");
    const items = document.getElementById("items");
    const submit = document.getElementById("submit");
    let editItem = null;

    form.addEventListener("submit", addItem);
    items.addEventListener("click", removeItem);
};

function addItem(e) {
    e.preventDefault();

    let newItem = document.getElementById("item").value;
    if (newItem.trim() === "") return;

    let li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    let deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger btn-sm float-right delete";
    deleteButton.appendChild(document.createTextNode("Delete"));

    let editButton = document.createElement("button");
    editButton.className = "btn btn-success btn-sm float-right edit";
    editButton.appendChild(document.createTextNode("Edit"));

    li.appendChild(document.createTextNode(newItem));
    li.appendChild(deleteButton);
    li.appendChild(editButton);

    items.appendChild(li);
    document.getElementById("item").value = "";
    showSuccessMessage("Item added successfully");
}

function removeItem(e) {
    if (e.target.classList.contains("delete")) {
        if (confirm("Are you sure?")) {
            let li = e.target.parentNode;
            items.removeChild(li);
            showSuccessMessage("Item deleted successfully");
        }
    }
    if (e.target.classList.contains("edit")) {
        document.getElementById("item").value = e.target.parentNode.childNodes[0].textContent;
        document.getElementById("submit").value = "EDIT";
        editItem = e.target;
    }
}

function toggleButton(ref, btnID) {
    document.getElementById(btnID).disabled = ref.value.trim() === "";
}

function showSuccessMessage(message) {
    const label = document.getElementById("lblsuccess");
    label.textContent = message;
    label.style.display = "block";

    setTimeout(() => {
        label.style.display = "none";
    }, 3000);
}