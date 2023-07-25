const gridContainer = document.querySelector('#grid-container');
let box = document.createElement('div');
let container = document.createElement('div');
let numBox = 16;
let numContainer = 16;

//Create 16 containers with 16 boxes each;

function createContainers () {
    for (i = 0; i < numContainer ; i++) {
        container = document.createElement('div');
        container.classList.add('box-container');
        gridContainer.appendChild(container);

        for (j = 0; j < numBox; j++) {

        box = document.createElement('div');
        box.classList.add('box-child');
        container.appendChild(box);
        }

    }
}

createContainers();