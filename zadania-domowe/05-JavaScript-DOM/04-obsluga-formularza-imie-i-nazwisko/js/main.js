let submit = document.getElementById('submit');

const submitFunction = (event) => {
    event.preventDefault();
    let firstName = document.getElementById('fname');
    console.log(`First name: ${firstName.value}`);
    let lastName = document.querySelector('[name="lname"]');
    console.log(`Last name: ${lastName.value}`);
}

submit = addEventListener('click', submitFunction);