// CREATING MENU FOR MOBILE PHONES:
let menuButton = document.getElementById('menu-button');
menuButton.addEventListener('click', function() {
    console.log('menu-button clicked');
    let navFixed = document.getElementById('nav-fixed');
    navFixed.classList.toggle('open');
});

//APPOINTMENT FORM VALIDATION

document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('submit button pressed');

    let name = document.getElementById('name');
    let mail = document.getElementById('mail');
    let selectService = document.getElementById('select-service');


});