const addNewItem = document.getElementById(`addButton`);
const container = document.getElementById(`listBox`);
const textInput = document.getElementById(`typeBox`);


//create close button and return - funtion remove li while click //

const createCloseButton = (newItem) => {
    let xButton = document.createElement(`button`)
    xButton.textContent = `x`;

    xButton.addEventListener(`click`, () => {
        container.removeChild(newItem);
    });

    return xButton;
}


//function add input from the user,checkbox and close button funtion into ul//
const addPlan = () => {
    const userInput = textInput.value;
    let newItem = document.createElement(`li`);
    let checkBox = document.createElement(`input`)
    checkBox.type = `checkbox`;
    let closeButton = createCloseButton(newItem);

    newItem.appendChild(checkBox);
    newItem.appendChild(document.createTextNode(userInput));
    newItem.appendChild(closeButton);
    container.appendChild(newItem);
}

addNewItem.addEventListener(`click`, addPlan);



