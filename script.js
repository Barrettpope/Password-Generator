// Assignment code
var generateBtn = document.getElementById("generate");

// Declaring global variables
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_+~`|}{[]:;?',./-=";

// Adds event listener to generate button
generateBtn.addEventListener("click", displayPassword);

// Displays password to the text area
function displayPassword() {
    var passwordSet = generatePassword();
    var userPassword = document.getElementById("password");

    userPassword.value = passwordSet;
}

// Generates password
function generatePassword() {
    var generate = "";
    var passwordSet = "";

    var length = prompt("How long would you like your password to be? (Please select a numerical value between 8 and 128 characters)");

// Assigns numerical value to length variable
    length = parseInt(length);

// Establishes password length + confirms user-selections for each character 
    if (length >= 8 && length <= 128) { 
        var lowercase = confirm("Do you want your password to include lowercase letters?");
        var uppercase = confirm("Do you want your password to include uppercase letters?");
        var number = confirm("Do you want your password to include numbers?");
        var special = confirm("Do you want your password to include special characters?");
    }

// Creates pop-up if incorrect length is entered
    else {
        var resume = confirm("You must choose a numerical value between 8 and 128! \n Cancel to exit.")
        if (resume) {
            return generatePassword();
        }
        return ''
    }

// Creates pop-up if no characters are selected
    if (!lowercase && !uppercase && !number && !special) {
        var resume = confirm("You must choose at least one character option! \n Cancel to exit.")
        if (resume) {
            return generatePassword();
        }
        return ''
    }

// Sets selected characters to their corresponding variables
    if (lowercase === true) {
        generate += lowerChar
        passwordSet += returnChar(lowerChar)
    };
    if (uppercase === true) {
        generate += upperChar
        passwordSet += returnChar(upperChar)
    };
    if (number === true) {
        generate += numberChar
        passwordSet += returnChar(numberChar)
    };
    if (special === true) {
        generate += specialChar
        passwordSet += returnChar(specialChar)
    };

// Creates for loop to generate password
    for (var i = passwordSet.length; i < length; i++) {
        passwordSet += returnChar(generate);
    }
    return passwordSet;
}

// Assigns characters at random
function returnChar(str) {
    return str[Math.floor(Math.random() * str.length)]
}

