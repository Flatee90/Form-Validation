function tooShort(username) {
    if (username.length < 5) {
        return true;
    } else {
        return false;
    }
}

function hasI(username) {
    if (username.includes("i")) {
        return true;
    } else {
        return false;
    }
}

function tooLong(username) {
    if (username.length > 20) {
        return true;
    } else {
        return false;
    }
}

let tooshortElement = document.getElementById("tooshort");
let hasiElement = document.getElementById("hasi");
let firstnameInput = document.getElementById("firstname");
let toolongElement = document.getElementById("toolong")

function handleChangeInUsername() {
    console.log("hello!");
    let input = firstNameInput.value;
    let isShort = tooShort(input);
    let isLong = tooLong(input)
    if (isShort) {
        tooshortElement.style.color = "green";
        console.log("✔ username meets requirements!");
    } else {
        tooshortElement.style.color = "pink";
        console.log("username must be more than 5 characters");
    }
    if (isLong) {
        toolongElement.style.color = "orange";
        console.log("&#x2715 username is too long!")
    } else {
        toolongElement.style.color = "green";
        console.log("&#x2713 username meets requirements!")
    }
}

function handleChangeInI() {
    let input = firstNameInput.value;
    let i = hasI(input);
    if (i) {
        hasIElement.style.color = "green";
    } else {
        hasIElement.style.color = "red";
    }
}

firstnameInput.addEventListener("input", handleChangeInUsername);
firstnameInput.addEventListener("input", handleChangeInI);

function validateEmailInput(emailAddress) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(emailAddress);
}

function validateForm() {
    let x = document.forms["myform"]["firstname"].value;
    if (x == "") {
        alert("name must be filled out");
        return false;
    }
}