const gridContainer = document.querySelector('#grid-container');
let box = document.createElement('div');
let container = document.createElement('div');
let numBox = 16;
let numContainer = 16;

function createContainers () {
    for (i = 0; i < numContainer ; i++) {
        container = document.createElement('div');
        container.classList.add('box-container');
        gridContainer.appendChild(container);

        for (j = 0; j < numBox; j++) {              //Creates 16 containers with 16 boxes each;

        box = document.createElement('div');
        box.classList.add('box-child');
        container.appendChild(box);
        }

    }
}
createContainers();     //Call the function to generate containers and boxes;

const boxChilds = document.querySelectorAll('.box-child');

boxChilds.forEach((box) => box.addEventListener('mouseenter', () => { //For each box of nodelist, change background color when hovered;
    box.setAttribute('style', 'background-color: red;');
}));


//addEventListener to each box 'mouseneter';
//pass a function to change the background color of the box when hovered;
//Make so that the background color stays;