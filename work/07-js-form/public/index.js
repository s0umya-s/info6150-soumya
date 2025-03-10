"use strict";

(function() {
    const form = document.getElementById("registration-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const confirmEmailInput = document.getElementById("confirm-email");

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const confirmEmailError = document.getElementById("confirm-email-error");

    function validateForm(event) {
        let valid = true;
        
        if (!nameInput.value.trim()) {
            nameError.innerText = "Name is required.";
            valid = false;
        } else {
            nameError.innerText = "";
        }

        if (!emailInput.value.trim()) {
            emailError.innerText = "Email is required.";
            valid = false;
        } else {
            emailError.innerText = "";
        }

        if (confirmEmailInput.value.trim() !== emailInput.value.trim()) {
            confirmEmailError.innerText = "Emails must match.";
            valid = false;
        } else {
            confirmEmailError.innerText = "";
        }

        if (!valid) {
            event.preventDefault();
        }
    }

    form.addEventListener("submit", validateForm);
})();