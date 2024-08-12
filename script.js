const menuButton = document.querySelectorAll(".menu-button");

//Toggle sidebar visibility when menu buttons are clicked
// menuButton.addEventListener("click", () =>{
//     document.body.classList.toggle("sidebar-hidden");
// })
menuButton.forEach(button => {
    button.addEventListener("click", () => {
        document.body.classList.toggle("sidebar-hidden");
    });
});