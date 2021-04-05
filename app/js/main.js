// Will wait until DOM is completely loaded
document.addEventListener("DOMContentLoaded", function () {

    let burger = document.querySelector(".header-wrapper__burger--cont"),
        menu = document.querySelector(".header-wrapper__menu")

    burger.addEventListener("click", () => {
        burger.classList.toggle("burgerActive")
        menu.classList.toggle("menuActive")
    })

    menu.addEventListener("click", function () {
        burger.classList.remove("burgerActive")
        menu.classList.remove("menuActive")
    })

    // Remove menu when user starts scrolling
    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            burger.classList.remove("burgerActive")
            menu.classList.remove("menuActive")
        }
    })

})