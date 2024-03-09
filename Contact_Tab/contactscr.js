const openButton = document.getElementById("burger-icon").addEventListener("click", openNav)

function openNav(){
    let display = document.getElementById("opening-nav").style.visibility = "visible";

    let burger = document.getElementById("burger-icon").style.display = "none";

    let close = document.getElementById("close-icon");

    close.style.display = "block";
    close.style.marginRight = "20px";
    close.style.cursor = "pointer";
    
}

const closeButton = document.getElementById("close-icon").addEventListener("click", closeNav)

function closeNav(){

    let nav = document.getElementById("opening-nav").style.visibility = "hidden";

    let burger = document.getElementById("burger-icon").style.display = "block";

    let close = document.getElementById("close-icon");
    
    close.style.display = "none";
}