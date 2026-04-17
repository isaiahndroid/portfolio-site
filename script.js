const button = document.getElementById("clickBtn");
const message = document.getElementById("message");

button.addEventListener("click", () => {   
    message.textContent = "You just triggered Javascript!";
    message.style.color = "blue";});


const toggle = document.getElementById("darkModeToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
