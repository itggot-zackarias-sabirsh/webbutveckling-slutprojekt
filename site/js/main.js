function slideLeft(event){
    let aboutMain = document.querySelector(".main-about")
    aboutMain.classList.toggle("activate-left")

    let homeButton = document.querySelector(".home-button")
    homeButton.classList.remove("filler")
    homeMain.classList.toggle("activate-lefter")
    aboutMain.classList.toggle("activate-left")

    let homeMain = document.querySelector(".main-home")
    homeMain.classList.toggle("activate-lefter")

    // let homeHeader = document.querySelector(".header-home")
    // homeHeader.innerHTML
}

