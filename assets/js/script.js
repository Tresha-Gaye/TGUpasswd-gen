
var numbers = "0123456789";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialCharacters = "!#$%&()*+,-./:;<=>?@^_`{|}~";
var selectedCriteria = "";

var generatePassword = function() {
  var numCharInput = window.prompt("Please enter the number of characters."); // string
    console.log(numCharInput);
    //check if inputs are empty (validate)
    if (numCharInput === "" || numCharInput === null) {
      window.alert("You need to enter a response!")
    }
    // make sure user enters a number
    if (isNaN(numCharInput)) {
    window.alert("Invalid Input. Please enter a number between 8 and 128 characters.");
    var numCharInput = window.prompt("Please enter the number of characters."); // string
    }
    // change the user entry from string to number
    numCharInput = parseInt(numCharInput);
    // run while loop for invalid responses
    while (numCharInput <= 7 || numCharInput >= 127) {
    numCharInput = window.alert("Password must be between 8 and 128 characters. Try again.")
    var numCharInput = window.prompt("Please enter a number between 8 and 128 characters.");
    console.log("numCharInput is ", numCharInput);
    }

    chooseCriteria();

;}

var chooseCriteria = function () {

  // choose lowercase letters
  var lowerCaseSelected = window.confirm("Would you like to include lowercase letters?");
    if (lowerCaseSelected === true) {
      for (var i = 0; i < lowerCase.length; i++) {
      var randomLowerCaseChar = (Math.floor(Math.random() * lowerCase.length));
      randomLowerCaseChar = lowerCaseSelected;
      }
    var selectedCriteria = selectedCriteria + lowerCaseSelected;
    //var selectedCriteria = parseInt(selectedCriteria)
    console.log(typeof selectedCriteria);
    console.log(selectedCriteria);
    console.log(lowerCase.length);
    console.log(randomLowerCaseChar);
    }
  

  var upperCaseSelected = window.confirm("Would you like to include uppercase letters?");
    if (upperCaseSelected === true) {
      for (var i = 0; i < upperCase.length; i++) {
        var randomUpperCase = upperCase.charAt(Math.floor(Math.random() * upperCase.length));
        randomUpperCase = upperCaseSelected;
      }
    selectedCriteria = selectedCriteria + upperCaseSelected;
    }

  var numberSelected = window.confirm("Would you like to include numbers?");
    if (numberSelected === true) {
      for (var i = 0; i < numbers.length; i++) {
        var randomNumber = numbers.charAt(Math.floor(Math.random() * numbers.length));
        randomNumber = numberSelected;
      }
    selectedCriteria = selectedCriteria + numberSelected;
    }

   
  var specialCharSelected = window.confirm("Would you like to include special characters?");
    if (specialCharSelected === true) {
      for (var i = 0; i < specialCharacters.length; i++) {
        var randomSpecialCharacter = specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
        randomSpecialCharacter = specialCharSelected;
      }
    selectedCriteria = selectedCriteria + specialCharSelected;
    }
    
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

};

generatePassword();