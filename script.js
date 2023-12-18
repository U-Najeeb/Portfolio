const body = document.querySelector("body")
const modeButtons = document.querySelectorAll(".mode--button")
const html = document.querySelector("html")
const darkHeading = document.querySelectorAll(".dark-mode")
const darkSubs = document.querySelectorAll(".dark-mode-2")
const backgrounds = document.querySelectorAll(".dark-mode-3")
const headingSmall = document.querySelectorAll(".heading-small")
const cvButton = document.querySelectorAll(".cv-dark")
const project = document.querySelectorAll(".project--back")
const hamburger = document.querySelector(".hamburger-container")
const sideBar = document.querySelector(".hidden--nav-container")
const hiddenNavbar = document.querySelector(".hidden--menu")
const copyButtons = document.querySelectorAll(".copy")
const contactRow = document.querySelector(".contact--row-2")
const emailValue = document.querySelector(".email")
const phoneValue = document.querySelector('.phone')

modeButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.preventDefault()
        body.classList.toggle('dark-mode')
        hiddenNavbar.classList.toggle("dark-6")
        sideBar.style.background = "#fff"
        const modeButtonIcon = button.firstElementChild
        body.classList.contains('dark-mode') ? modeButtonIcon.src = "./assets/dark-mode.png" : modeButtonIcon.src = "./assets/light-mode.png"
        darkHeading.forEach((head) => {
            head.classList.toggle("dark")
        })
        darkSubs.forEach((headSub) => {
            headSub.classList.toggle('dark-2')
        })
        backgrounds.forEach((background) => {
            background.classList.toggle('dark-3')
        })
        headingSmall.forEach((head) => {
            head.classList.toggle("dark-4")
        })
        cvButton.forEach((btn) => {
            btn.classList.toggle("cv-dark-mode")
        })
        project.forEach((pro) => {
            pro.classList.toggle("dark-5")
        })
    })
})
hamburger.addEventListener("click", (e) => {
    e.preventDefault()
    sideBar.classList.toggle('hidden')
})
contactRow.addEventListener("click",(e)=>{
    e.preventDefault()
    if(e.target.classList.contains('copyEmail')){
        navigator.clipboard.writeText(emailValue.textContent)
    }
    if(e.target.classList.contains('copyPhone')){
        navigator.clipboard.writeText(phoneValue.textContent)
    }
})