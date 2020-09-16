const shareButton = document.getElementById("share");
const shareBox = document.querySelector(".share-box");

function display(){
    if(shareButton.classList.contains("active")===false){
        console.log("hola");
        shareButton.classList.add("change");
        shareBox.classList.add("active");
        shareBox.classList.toggle("opacity");
    }else{
        shareButton.classList.remove("change");
        shareBox.classList.remove("active");
        shareBox.classList.remove("opacity");
    }
}

shareButton.addEventListener("click", display);
