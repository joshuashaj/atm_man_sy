function generatePassword(event)
    {
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

function check_email()
    {
        let mail = document.getElementById('email').value;
        let mailMessage = document.getElementById('mail');
        let submitButton = document.getElementById('submit'); // Assuming you have a submit button with this id

        if (emails.includes(mail)) {
            mailMessage.innerText = "Email already exists";
            submitButton.disabled = true;

        } else {
            submitButton.disabled = false;
        }
    }

function check_phone()
    {
        let phoneNumber = document.getElementById('phoneNumber').value;
        let phoneNumberMessage = document.getElementById('phone');
        let submitButton = document.getElementById('submit'); // Assuming you have a submit button with this id

        if (emails.includes(mail)) {
            phoneNumberMessage.innerText = "Email already exists";
            phoneNumberMessage.disabled = true;
        } else {
            phoneNumberMessage.innerText = "";
            submitButton.disabled = false;
        }
    }

function withdraw()
    {
        let accountNumValue = accountnumber.value;
        let amountValue = parseFloat(amount.value);

        if (accountNumValue == account_number) {
            document.getElementById("checkaccountnumber").innerText = "";
            amount.disabled = false;
            password.disabled = false;

            if (amountValue > balance) {
                document.getElementById("checkamount").innerText = "Insufficient Balance...";
                submit.disabled = true;
            } else {
                document.getElementById("checkamount").innerText = "";
                submit.disabled = false;
            }
        } else {
            document.getElementById("checkaccountnumber").innerText = "Account Number does not Match";
            amount.disabled = true;
            password.disabled = true;
            submit.disabled = true;
        }
    }
