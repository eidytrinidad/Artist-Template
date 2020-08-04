///Burger Menu
const btn = document.querySelector('.burgerBtn');
const burgerMenu = document.querySelector(".burgerMenu");
const menuIcon = document.querySelector("#menuIcon")

btn.addEventListener('click',()=>
{
        menuIcon.classList.toggle("fa-times")

        if (menuIcon.className !== "fas fa-bars") {
            burgerMenu.style.display="block";
        } else {
            burgerMenu.style.display="none";
        }
   
    
})