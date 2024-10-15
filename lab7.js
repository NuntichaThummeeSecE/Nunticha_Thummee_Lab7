const addNewItem = document.getElementById("addButton");
const container = document.getElementById("listBox");
const typeBox = document.getElementById("typeBox");

addNewItem.addEventListener("click", addPlan);

function addPlan(){
    const userInput = typeBox.value;
    let newItem = document.createElement("li");
    newItem.innerHTML = userInput; 
    container.appendChild(newItem);
}
