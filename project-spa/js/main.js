
// CREATING MENU FOR MOBILE PHONES:
let menuButton = document.getElementById('menu-button');
menuButton.addEventListener('click', function() {
    console.log('menu-button clicked');
    let navFixed = document.getElementById('nav-fixed');
    navFixed.classList.toggle('open');
});