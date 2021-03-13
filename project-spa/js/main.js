// CREATING MENU FOR MOBILE PHONES:
let menuButton = document.getElementById('menu-button');
menuButton.addEventListener('click', function() {
    console.log('menu-button clicked');
    let navFixed = document.getElementById('nav-fixed');
    navFixed.classList.toggle('open');
});

//APPOINTMENT FORM VALIDATION

let appointmentForm = document.getElementById('appointment-form');

appointmentForm.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('submit button pressed');

    let name = document.getElementById('name');
    let mail = document.getElementById('mail');
    let selectService = document.getElementById('select-service');
    let phone = document.getElementById('phone');
    let date = document.getElementById('date');
    let time = document.getElementById('time');
    let notes = document.getElementById('notes');

    let appointmentMessage = document.querySelector('.appointment-message');

    function errorMessage() {
        appointmentMessage.innerText = 'Please fill in all the required fields.';
        appointmentMessage.classList.add("error");
        appointmentMessage.style.display='inline';
    }

    
    name.classList.remove("error");
    mail.classList.remove("error");
    selectService.classList.remove("error");
    phone.classList.remove("error");
    date.classList.remove("error");
    time.classList.remove("error");
    notes.classList.remove("error");
    appointmentMessage.classList.remove("error");
    appointmentMessage.classList.remove("send");
    appointmentMessage.innerText = '';

    if (name.value.trim() === '') {
        errorMessage();
        name.classList.add("error");
    }

    if (mail.value.trim() === '') {
        errorMessage();
        mail.classList.add("error");
    }

    if (selectService.value.trim() === '') {
        errorMessage();
        selectService.classList.add("error");
    }

    if (phone.value.trim() === '') {
        errorMessage();
        phone.classList.add("error");
    }

    if (date.value.trim() === '') {
        errorMessage();
        date.classList.add("error");
    }
    
    if (time.value.trim() === '') {
        errorMessage();
        time.classList.add("error");
    }
    
    if (notes.value.trim() === '') {
        errorMessage();
        notes.classList.add("error");
    }

    if (name.value.trim() !== '' &&
    mail.value.trim() !== '' &&
    selectService.value.trim() !== '' &&
    phone.value.trim() !== '' &&
    date.value.trim() !== '' &&
    time.value.trim() !== '' &&
    notes.value.trim() !== ''
    ) {

        //IF ALL THE FIELDS ARE FILLED IN CORRECTLY THEN SEND DATA TO API
        let appointmentRequest = {
            name: name.value.trim(), 
            email: mail.value.trim(),
            service: selectService.value.trim(),
            phone: phone.value.trim(),
            date: date.value.trim(),
            time: time.value.trim(),
            message: notes.value.trim()
        };

        fetch(`https://akademia108.pl/api/ajax/post-appointment.php`, {
            headers: {
                'Content-Type': 'application/json', 
            },
            mode: 'cors', // it is a DEFAULT VALUE
            method: 'POST',
    
            body: JSON.stringify(appointmentRequest)
        })
            .then(res => res.json())
            .then(resJSON => {
                console.log(resJSON);
                console.log(resJSON.appointment.name);
    
                if (!resJSON.errors) {
                    appointmentMessage.classList.add("send");
                    appointmentMessage.style.display='inline';
                    appointmentMessage.innerText = `Dziękujemy ${resJSON.appointment.name}. Zostałeś zapisany!`;
                    appointmentForm.reset();
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
});