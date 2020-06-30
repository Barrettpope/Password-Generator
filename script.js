
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_+~`|}{[]:;?',./-=";

function displayPassword() {
    var passwordSet = generatePassword();
    var userPassword = document.getElementById("password");

    userPassword.value = passwordSet;

}

document.getElementById("generate").addEventListener("click", displayPassword);

function generatePassword() {
    var generate = "";

var passwordLength = Number(prompt("How long would you like your password to be? (Please select a numberical value between 8 and 128 characters)")).trim();

if(passwordLength >= 8 && passwordLength <= 128) { 

    var lowercase = cofirm("Do you want your password to include lowercase letters?");
    var uppercase = confirm("Do you want your password to include uppercase letters?");
    var number = confirm("Do you want your password to include numbers?");
    var special = confirm("Do you want your password to include special characters?");

    if(lowercase) {
        passwordSet += lowerChar
    }
    if(uppercase) {
        passwordSet += upperChar
    }
    if(number) {
        passwordSet += numberChar
    }
    if(special) {
        passwordSet += specialChar
    }

if (!lowercase && !uppercase && !number && !special) {
    alert("You must choose at least one option.");
    generatePassword();
    userPassword = "";
    return;
}

for(var i = 0; i < passwordLength; i++) {
    userPassword += passwordSet.charAt(Math.floor(Math.random() * passwordSet.length));
}

var yourSecurePassword = document.getElementById("password");
yourSecurePassword.innerHTML = userPassword;
document.getElementById("password").style.color = "rgb (50, 50, 50)";
}
}

