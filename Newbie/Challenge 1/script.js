const shareButton = document.getElementById("share");
const shareBox = document.querySelector(".share-box");

function display(){
    if(!shareButton.classList.contains("active")){
        console.log("hola");
        shareButton.classList.add("change");
        shareBox.classList.add("active");
        setTimeout(function (){
            shareBox.classList.toggle("opacity");
        },100);
    } else {
        console.log("paso");
        shareBox.classList.remove("change");
        shareBox.classList.remove("opacity");
        setTimeout(function () {
            shareBox.classList.remove("active");
        },100)
    }
}

shareButton.addEventListener("click",display);
