// CREATING MENU FOR MOBILE PHONES:
let menuButton = document.getElementById('menu-button');
menuButton.addEventListener('click', function() {
    console.log('menu-button clicked');
    let navFixed = document.getElementById('nav-fixed');
    navFixed.classList.toggle('open');
});

//APPOINTMENT FORM VALIDATION

const appointmentForm = document.getElementById('appointment-form');

appointmentForm.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('submit button pressed');

    const name = document.getElementById('name');
    const mail = document.getElementById('mail');
    const selectService = document.getElementById('select-service');
    const phone = document.getElementById('phone');
    const date = document.getElementById('date');
    const time = document.getElementById('time');
    const notes = document.getElementById('notes');

    const appointmentMessage = document.querySelector('.appointment-message');

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
                    appointmentMessage.innerText = `Thank you ${resJSON.appointment.name}. Your enquiry has been sent!`;
                    appointmentForm.reset();
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
});