const addNewItem = document.getElementById(`addButton`);
const container = document.getElementById(`listBox`);
const textInput = document.getElementById(`typeBox`);



//function add input from the user and checkbox into ul//
const addPlan = () => {
    const userInput = textInput.value;
    let newItem = document.createElement(`li`);

    let checkBox = document.createElement(`input`)
    checkBox.type = `checkbox`;

    let xButton = document.createElement(`button`)
    xButton.textContent = `x`;

    xButton.addEventListener(`click`, () => {
        container.removeChild(newItem);
    });

    newItem.appendChild(checkBox);
    newItem.appendChild(document.createTextNode(userInput));
    newItem.appendChild(xButton);
    container.appendChild(newItem);
}

addNewItem.addEventListener(`click`, addPlan);



