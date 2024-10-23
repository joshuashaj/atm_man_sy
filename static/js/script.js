function generatePassword(event) {
    event.preventDefault();  // Prevent form submission

    // Get the account number input value
    let acnumber = document.getElementById('account_number').value;

    if (!all_acnumber.includes(acnumber)) {
        document.getElementById('check_reponse').innerText = "Account number does not exist.";
        return; // Exit the function early if the account number is invalid
    }

    // Generate a 4-digit random password
    let randomPassword = Math.floor(1000 + Math.random() * 9000); // Generates a 4-digit number

    // Show the password in an alert
    alert("Your new password is: " + randomPassword);

    // Set the generated password in the hidden input field
    document.getElementById('generated_password').value = randomPassword;

    // Submit the form after the alert
    document.querySelector('form').submit();
}

function check_email() {
    let mail = document.getElementById('email').value;
    let mailMessage = document.getElementById('mail');
    let submitButton = document.getElementById('submit'); // Assuming you have a submit button with this id

    if (emails.includes(mail)) {
        mailMessage.innerText = "Email already exists";
        mailMessage.style.color = 'red'; // Setting inline CSS
        mailMessage.style.fontSize = '14px';
        submitButton.disabled = true;
        submitButton.style.backgroundColor = '#cccccc';
        submitButton.style.color = '#666666';
        submitButton.style.cursor = 'not-allowed';
    } else {
        mailMessage.innerText = "";
        submitButton.disabled = false;
        submitButton.style.backgroundColor = '#4CAF50';
        submitButton.style.color = 'white';
        submitButton.style.cursor = 'pointer';
    }
}

function check_phone() {
    let phoneNumber = document.getElementById('phoneNumber').value;
    let phoneNumberMessage = document.getElementById('phone');
    let submitButton = document.getElementById('submit'); // Assuming you have a submit button with this id

    if (emails.includes(mail)) {
        phoneNumberMessage.innerText = "Email already exists";
        phoneNumberMessage.style.color = 'red'; // Setting inline CSS
        phoneNumberMessage.style.fontSize = '14px';
        phoneNumberMessage.disabled = true;
        phoneNumberMessage.style.backgroundColor = '#cccccc';
        phoneNumberMessage.style.color = '#666666';
        phoneNumberMessage.style.cursor = 'not-allowed';
    } else {
        phoneNumberMessage.innerText = "";
        submitButton.disabled = false;
        submitButton.style.backgroundColor = '#4CAF50';
        submitButton.style.color = 'white';
        submitButton.style.cursor = 'pointer';
    }
}


