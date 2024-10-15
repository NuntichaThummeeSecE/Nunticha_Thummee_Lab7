const addNewItem = document.getElementById(`addButton`);
const container = document.getElementById(`listBox`);
const textInput = document.getElementById(`typeBox`);

const addPlan = () => {
    const userInput = textInput.value;
    let newItem = document.createElement(`li`);

    let checkBox = document.createElement(`input`)
    checkBox.type = `checkbox`;

    container.appendChild(newItem);
    newItem.appendChild(checkBox);
    newItem.appendChild(document.createTextNode(userInput));
}

addNewItem.addEventListener(`click`, addPlan);


