const gridContainer = document.querySelector('#grid-container');
const btnChangeGridSize = document.querySelector('#change-size');
const btnRainbow = document.querySelector('#color-rainbow');
const btnGrey = document.querySelector('#color-grey-scale');

let box = document.createElement('div');
let container = document.createElement('div');
let numBox = 20;
let numContainer = 20;
let userSize;

createContainers(numContainer, numBox); //Set initial grid;


function createContainers(numContainer, numBox) {   //
    for (i = 0; i < numContainer; i++) {            //
        container = document.createElement('div');  //
        container.classList.add('box-container');   //
        gridContainer.appendChild(container);       //
                                                    //
        for (j = 0; j < numBox; j++) {              //Creates 16 containers with 16 boxes each;
                                                    //
            box = document.createElement('div');    //
            box.classList.add('box-child');         //
            container.appendChild(box);             //
        }

    }
    const boxChilds = document.querySelectorAll('.box-child');

    btnRainbow.addEventListener('click', () => {
        boxChilds.forEach((box) => box.setAttribute('style', 'background-color: white;'));
        boxChilds.forEach((box) => box.addEventListener('mouseenter', () => { //For each box of nodelist, change background color when hovered;
            box.setAttribute('style', `background-color: rgb(${randomizeColor()});`);
        }))})
    

    btnGrey.addEventListener('click', () => {
        boxChilds.forEach((box) => box.setAttribute('style', 'background-color: white;'));
        boxChilds.forEach((box) => box.addEventListener('mouseenter', () => { //For each box of nodelist, change background color when hovered;
            box.setAttribute('style', `background-color: rgb(${grayScaleColor()});`);
        }))})
    
    
}


function randomizeColor() {    //Randomize rgb(rrr,ggg,bbb) for rainbow effect;
    let rgbArray = [];

    for(i = 0; i < 3; i++){
        let randomNumber = Math.floor(Math.random() * 256);
        rgbArray.push(randomNumber);
    }       
    
     return rgbArray.toString();
};


let rgbArray = [200, 200, 200];
function grayScaleColor() {    //Set rgb(rrr,ggg,bbb) for gray scale;
    rgbArray[0] -= 20;
    rgbArray[1] -= 20; 
    rgbArray[2] -= 20;
    
    if (rgbArray[0] < 0) {
        rgbArray =[200, 200, 200];
    }
    
     return rgbArray.toString();
};


function removeAllChildNodes(parent) {      //Declare a function to erase containers and boxes;
    while (parent.firstChild) {                 
        parent.removeChild(parent.firstChild)
    }
}


btnChangeGridSize.addEventListener('click', () => {                //OnClick: If user inputs correctly,remove all existing nodes,
    userSize = Number(prompt('What is the size of the box?'));
    console.log(userSize);     //create new ones with the desirable size;
    console.log(typeof userSize);
    if (!isNaN(userSize) && userSize < 100) {
        removeAllChildNodes(container);
        removeAllChildNodes(gridContainer);
        createContainers(userSize, userSize);
        
    } else {
        alert('Input a valid number of less than 100.')
    }
});