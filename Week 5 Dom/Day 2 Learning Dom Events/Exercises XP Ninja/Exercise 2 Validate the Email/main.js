function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

document.getElementById("emailForm").onsubmit = function (e) {
    e.preventDefault();
    let email = document.getElementById("email").value;

    if (validateEmail(email)) {
        document.getElementById("emailMessage").textContent = "Valid email!";
        document.getElementById("emailMessage").style.color = "green";
    } else {
        document.getElementById("emailMessage").textContent = "Invalid email!";
        document.getElementById("emailMessage").style.color = "red";
    }
};
