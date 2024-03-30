const openButton = document.getElementById("burger-icon")
const closeButton = document.getElementById("close-icon")
const tabs = document.getElementById("opening-nav")

openButton.addEventListener("click", openNav)
closeButton.addEventListener("click", closeNav)

function openNav(){
    tabs.style.visibility = "visible";
    openButton.style.display = "none";
    closeButton.style.display = "block";
    
}

function closeNav(){
    tabs.style.visibility = "hidden";
    openButton.style.display = "block";
    closeButton.style.display = "none";
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