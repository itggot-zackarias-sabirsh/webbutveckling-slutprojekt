let aboutMain = document.querySelector(".main-about")
let homeMain = document.querySelector(".main-home")
let leftArrow = document.querySelector(".left-arrow")
let rightArrow = document.querySelector(".right-arrow")


let main = document.querySelectorAll(".main")
function slideLeft(event){
    aboutMain.classList.add("activate-left")
    homeMain.classList.add("activate-left")
    aboutMain.classList.remove("activate-right")
    homeMain.classList.remove("activate-right")

    rightArrow.style.opacity = "0"
    leftArrow.style.opacity = "1"

    if (aboutMain.classList.contains("activate-left")){
        aboutMain.style.transform = "200vw"
    }


}


function slideRight(event){
    aboutMain.classList.add("activate-right")
    homeMain.classList.add("activate-right")
    aboutMain.classList.remove("activate-left")
    homeMain.classList.remove("activate-left")

    rightArrow.style.opacity = "1"
    leftArrow.style.opacity = "0"
}

