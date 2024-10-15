const addNewItem = document.getElementById("addButton");
const container = document.getElementsByClassName("container")[0];

addNewItem.addEventListener("click", addPlan);

function addPlan(){
    let newItem = document.createElement("li");
    newItem.innerHTML = addNewItem.value;
    container.appendChild(newItem);
}
