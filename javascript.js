const gridContainer = document.querySelector('#grid-container');
const btnChangeGridSize = document.querySelector('#change-size');

let box = document.createElement('div');
let container = document.createElement('div');
let numBox = 20;
let numContainer = 20;
let userSize;

createContainers(numContainer, numBox);



function createContainers(numContainer, numBox) {
    for (i = 0; i < numContainer; i++) {
        container = document.createElement('div');
        container.classList.add('box-container');
        gridContainer.appendChild(container);

        for (j = 0; j < numBox; j++) {              //Creates 16 containers with 16 boxes each;

            box = document.createElement('div');
            box.classList.add('box-child');
            container.appendChild(box);
        }

    }
    const boxChilds = document.querySelectorAll('.box-child');
    boxChilds.forEach((box) => box.addEventListener('mouseenter', () => { //For each box of nodelist, change background color when hovered;
        box.setAttribute('style', 'background-color: red;');
    }));
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}


btnChangeGridSize.addEventListener('click', () => {
    userSize = Number(prompt('What is the size of the box?'));
    console.log(typeof userSize);
    if (typeof userSize === 'number' && userSize < 100) {
        removeAllChildNodes(container);
        removeAllChildNodes(gridContainer);
        createContainers(userSize, userSize);
        
    } else {
    return alert('Input a valid number of less than 100.');
    }
});

