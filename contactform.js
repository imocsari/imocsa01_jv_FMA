// Form validation function for contact form using regex.
function validateForm() {
    var regexFirstName = /^[a-z]+$/i;
    var firstName = document.getElementById("fname").value;
    if (firstName === "" || (!regexFirstName.test(firstName)) || firstName.length < 2) {
        document.getElementById("errfName").style.display = "inline";
        return false;
    } else {
        document.getElementById("errfName").style.display = "none";
    }

    var regexLastName = /^[a-z-]+$/i;
    var lastName = document.getElementById("lname").value;
    if (lastName === "" || (!regexLastName.test(lastName)) || lastName.length < 2) {
        document.getElementById("errlName").style.display = "inline";
        return false;
    } else {
        document.getElementById("errlName").style.display = "none";
    }
    var regexHealthNumber = /^\d{6}$/;
    var healthNumber = document.getElementById("han").value;
    if (healthNumber === "" || healthNumber.length > 9 || (!regexHealthNumber.test(parseInt(healthNumber.substring(3)))) || (healthNumber.substring(0, 3) !== "ZHA")) {
        document.getElementById("errHan").style.display = "inline";
        return false;
    } else {
        document.getElementById("errHan").style.display = "none";
    }
    var regexEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var email = document.getElementById("email").value;
    if (email === "" || (!regexEmail.test(email))) {
        document.getElementById("errEmail").style.display = "inline";
        return false;
    } else {
        document.getElementById("errEmail").style.display = "none";
    }
    var regexPhone = /^(\d{11})?$/;
    var phone = document.getElementById("telephone").value;
    if (!regexPhone.test(phone)) {
        document.getElementById("errPhone").style.display = "inline";
        return false;
    } else {
        document.getElementById("errPhone").style.display = "none";
    }
    return true;
}
