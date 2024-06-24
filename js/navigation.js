var hamberger = document.getElementById('hamberger-icon');
let hambergerMenu = document.getElementById('hamberger-menu');

function init () {
  hamberger.addEventListener("click", (event) => {
    hambergerMenu.classList.toggle('show-menu');
    event.preventDefault();
  }
);  
}

window.onload = init; 
