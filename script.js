const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const button = document.getElementById("button");

function validateForm(){

    let valid = true;

    // Name
    if(nameInput.value.trim() === ""){
        valid = false;
    }

    // Gmail Validation
    if(emailInput.value.endsWith("@gmail.com")){
        emailError.style.display = "none";
    }else{
        emailError.style.display = "block";
        valid = false;
    }

    // Password Validation
    if(passwordInput.value.length >= 10){
        passwordError.style.display = "none";
    }else{
        passwordError.style.display = "block";
        valid = false;
    }

    // Button Enable/Disable
    button.disabled = !valid;
}

nameInput.addEventListener("input", validateForm);
emailInput.addEventListener("input", validateForm);
passwordInput.addEventListener("input", validateForm);

document.getElementById("form").addEventListener("submit",function(e){
    e.preventDefault();
    alert("Registration Successful!");
});
