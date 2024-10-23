function generatePassword(event) {
    event.preventDefault();  // Prevent form submission

    // Get the account number input value
    let acnumber = document.getElementById('account_number').value;

    // Check if the account number exists first (optional)
//    var all_acnumber = [
//        {% for user in users %}
//        "{{ user.account_number }}",
//        {% endfor %}
//    ];
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
