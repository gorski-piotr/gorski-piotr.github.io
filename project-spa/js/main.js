


// CREATING MENU FOR MOBILE PHONES:
let menuButton = document.getElementById('menu-button');
menuButton.addEventListener('click', function() {
    console.log('menu-button clicked');
    //let nav = document.getElementById('nav');
    nav.classList.toggle('open');
});