// const hamBtn = document.querySelector (".hamburger-button") 
// const mobileMenu = document.querySelector(".mobile-menu")
// hamBtn.addEventListener("click", function(){
// mobileMenu.style.display="block"
// })
const initApp = () => {
  const hamburgerBtn = document.getElementById ("hamburger-button")
  const mobileMenu = document.getElementById("mobile-menu")

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden")
    mobileMenu.classList.toggle("flex")
    hamburgerBtn.classList.toggle('toggle-btn')
  }

  hamburgerBtn.addEventListener("click", toggleMenu)
  mobileMenu.addEventListener("click", toggleMenu)
}

document.addEventListener("DOMContentLoaded", initApp) 


// const mobileMenu = document.getElementById("mobile-menu")
// const div = document.getElementById("section")
// function onToggleMenu(e) {
//  e.name =e.name === "menu-outline" ? "close-outline" : "menu-outline"


//  mobileMenu.classList.toggle("hidden")

 
// }
