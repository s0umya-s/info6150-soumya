"use strict";


document.querySelector(".hamburger").addEventListener("click", function () {
    document.querySelector(".nav-links").classList.toggle("active");
});


const modal = document.getElementById("subscribe-modal");
const successModal = document.getElementById("success-modal");

document.querySelectorAll(".subscribe-btn").forEach(button => {
    button.addEventListener("click", () => modal.showModal());
});

document.querySelectorAll(".close-modal").forEach(button => {
    button.addEventListener("click", () => {
        modal.close();
        successModal.close();
    });
});

document.querySelector("#subscribe-modal form").addEventListener("submit", function (e) {
    const email = document.getElementById("email").value;
    const confirmEmail = document.getElementById("confirm-email").value;

    if (!email.includes("@") || email !== confirmEmail) {
        alert("Emails must match and contain '@'.");
        e.preventDefault(); 
    } else {
        e.preventDefault(); 
        modal.close();
        successModal.showModal(); 
    }
});