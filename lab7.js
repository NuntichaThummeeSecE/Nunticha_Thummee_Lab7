const addNewItem = document.getElementById(`addButton`);
const container = document.getElementById(`listBox`);
const textInput = document.getElementById(`typeBox`);


//create close button and return - funtion remove li while click //

const createCloseButton = (newItem) => {
    const xButton = document.createElement(`button`)
    xButton.textContent = `x`;

    xButton.addEventListener(`click`, () => {
        container.removeChild(newItem);
    });

    xButton.classList.add('xButtonStyle');

    return xButton;
}

//function mark the task as completed//

const markTask = (checkBox, newItem) => {
    checkBox.addEventListener(`change`, () => {
        if (checkBox.checked) {
            newItem.style.textDecoration = 'line-through';
        } else {
            newItem.style.textDecoration = 'none';
        }
    });
}


//main function add input from the user,checkbox ,close button and call other function //
const addPlan = () => {
    const userInput = textInput.value;
    const newItem = document.createElement(`li`);
    const checkBox = document.createElement(`input`)
    checkBox.type = `checkbox`;
    const closeButton = createCloseButton(newItem);

    markTask(checkBox, newItem);
    newItem.appendChild(checkBox);
    newItem.appendChild(document.createTextNode(userInput));
    newItem.appendChild(closeButton);
    container.appendChild(newItem);
}

addNewItem.addEventListener(`click`, addPlan);



