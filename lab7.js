const addNewItem = document.getElementById(`addButton`);
const container = document.getElementById(`listBox`);
const typeBox = document.getElementById(`typeBox`);

addNewItem.addEventListener(`click`, addPlan);

function addPlan() {
    const userInput = typeBox.value;
    let newItem = document.createElement(`li`);

    let checkBox = document.createElement(`input`)
    checkBox.type = `checkbox`;

    newItem.appendChild(checkBox);
    container.appendChild(newItem);

    newItem.innerHTML = `${checkBox.outerHTML} ${userInput}`;
}

