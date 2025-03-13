"use strict";

document.querySelector(".hamburger").addEventListener("click", function () {
    document.querySelector(".nav-links").classList.toggle("active");
});

const modal = document.getElementById("subscribe-modal");
document.querySelectorAll(".subscribe-btn").forEach(button => {
    button.addEventListener("click", () => modal.showModal());
});
document.querySelector(".close-modal").addEventListener("click", () => modal.close());

document.querySelector("form").addEventListener("submit", function (e) {
    const email = document.getElementById("email").value;
    const confirmEmail = document.getElementById("confirm-email").value;

    if (!email.includes("@") || email !== confirmEmail) {
        alert("Emails must match and contain '@'.");
        e.preventDefault();
    }
});