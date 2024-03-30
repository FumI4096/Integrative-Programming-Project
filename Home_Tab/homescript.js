const openButton = document.getElementById("burger-icon")
const closeButton = document.getElementById("close-icon")
const tabs = document.getElementById("opening-nav")

var nav = document.getElementById("main-nav");
var sticky = nav.offsetTop;

openButton.addEventListener("click", openNav)
closeButton.addEventListener("click", closeNav)

window.onscroll = function() {myFunction()};
function myFunction() {
    if (window.pageYOffset >= sticky) {
        nav.classList.add("sticky");
        document.body.style.paddingTop = nav.offsetHeight + "px";
    } else {
        nav.classList.remove("sticky");
        document.body.style.paddingTop = 0;
    }
}

//MODALS
for (let i = 1; i <= 11; i++) {
    let readMoreButton = document.getElementById(`read${i}`).addEventListener("click", function() {
        toVisible(i);
        
    });

    let closeButton = document.getElementById(`close-button${i}`).addEventListener("click", function() {
        hideVisible(i);
    });
}

function toVisible(clickedIndex) {
    console.log("Testing");
    document.body.style.overflow = "hidden";
    for (let i = 1; i <= 11; i++) {
        let popMessage = document.getElementById(`box-${i}`);

        if (i === clickedIndex) {
            
            popMessage.style.visibility = "visible";
            popMessage.style.display = "sticky";
            console.log(i);
        } else {
            popMessage.style.visibility = "hidden";
        }
    }
}

function hideVisible(Number) {
    console.log("Close");
    document.body.style.overflow = "visible";
    let popMessage = document.getElementById(`box-${Number}`);
    popMessage.style.visibility = "hidden";
    console.log(Number);
}

function openNav(){
    let display = document.getElementById("opening-nav").style.visibility = "visible";
    let burger = document.getElementById("burger-icon").style.display = "none";
    let close = document.getElementById("close-icon");

    close.style.display = "block";
    close.style.cursor = "pointer";
    
}

function closeNav(){
    let nav = document.getElementById("opening-nav").style.visibility = "hidden";
    let burger = document.getElementById("burger-icon").style.display = "block";
    let close = document.getElementById("close-icon");
    
    close.style.display = "none";
}

window.addEventListener('resize', function() {
    var width = window.innerWidth;
    
    if (width <= 1199) {
        openButton.style.display = 'block';
        tabs.style.visibility = "hidden";
        closeButton.style.display = 'none';
    } 
    else {
        openButton.style.display = 'none';
        tabs.style.visibility = "visible";
        closeButton.style.display = 'none';
    }
});

window.dispatchEvent(new Event('resize'));






