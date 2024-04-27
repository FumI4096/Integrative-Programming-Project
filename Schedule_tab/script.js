const schedBox = document.getElementById('schedule-box');
const addBox = document.getElementById('ui-box');
let storeBox = [];
var storeDelBox;
let count = 0;


addBox.addEventListener('click', addScheduleContainer);

document.body.addEventListener('click', function(event) {
    if (event.target.classList.contains('del-button')) {
        console.log(event.target)
        delScheduleContainer(event.target);
    }
});


function addScheduleContainer(){
    var container = document.createElement('div');
    var numBox = document.createElement('div');
    var numPar = document.createElement('p');
    var buttonContainer = document.createElement('div');
    deleteBox = document.createElement('button');
    var editBox = document.createElement('button');


    container.classList.add('schedule-form');
    numBox.classList.add('number-box');
    numPar.classList.add('number-par')
    buttonContainer.classList.add('button-container')
    deleteBox.classList.add('del-button');
    editBox.classList.add('edit-button');
    
    

    deleteBox.textContent = "Delete Schedule";
    editBox.textContent = "Edit Schedule";
    
    numBox.appendChild(numPar)
    container.appendChild(numBox)
    container.appendChild(buttonContainer)
    buttonContainer.appendChild(editBox)
    buttonContainer.appendChild(deleteBox)

    schedBox.appendChild(container);

    storeBox.push(container);
    console.log(storeBox.length);
    schedBox.appendChild(addBox);
    

    //count = storeBox.length;
    //console.log("Count: ", count)
    countUpdate();

}


function delScheduleContainer(delButton){
    var firstParent = delButton.parentElement;
    var secParent = firstParent.parentElement;
    secParent.remove();
    storeBox = storeBox.filter(item => item !== secParent);
    //count = storeBox.length;
    /*console.log("Count: ", count)*/
    countUpdate();
}

function countUpdate(){
    var containers = document.querySelectorAll('.number-box')
    containers.forEach(function(container, index) {
        var countElement = container.querySelector('.number-par');
        countElement.textContent = index + 1; 
    });
}






