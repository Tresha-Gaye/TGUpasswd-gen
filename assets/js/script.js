
var numbers = "0123456789";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialCharacters = "!#$%&()*+,-./:;<=>?@^_`{|}~";
var numCharInput

var generatePassword = function () {
  numCharInput = window.prompt("Please enter the number of characters."); // string
  // console.log(numCharInput);
  //check if inputs are empty (validate)
  if (numCharInput === "" || numCharInput === null) {
    window.alert("You need to enter a response!")
    return "Please press the red button to start"
  };
  // make sure user enters a number
  if (isNaN(numCharInput)) {
    window.alert("Invalid Input. Please enter a number between 8 and 128 characters.");
    return "Please press the red button to start"
  };
  // change the user entry from string to number
  numCharInput = parseInt(numCharInput);
  // run while loop for invalid responses
  if (numCharInput <= 7 || numCharInput >= 127) {
    numCharInput = window.alert("Password must be between 8 and 128 characters. Try again.")
    return "Please press the red button to start"
  };

  // choose lowercase letters
  var password = ""
  var possibleChoices = ""
  var lowerCaseSelected = window.confirm("Would you like to include lowercase letters?");
  if (lowerCaseSelected === true) {
    possibleChoices = possibleChoices + lowerCase
    // for (var i = 0; i < lowerCase.length; i++) {
    var randomLowerIndex = (Math.floor(Math.random() * lowerCase.length));
    console.log(randomLowerIndex);
    // console.log(lowerCase.charAt(randomLowerIndex));
    password = password + lowerCase.charAt(randomLowerIndex)
    console.log(password)
  };

  var upperCaseSelected = window.confirm("Would you like to include uppercase letters?");
  if (upperCaseSelected === true) {
    possibleChoices = possibleChoices + upperCase
    var randomUpperIndex = (Math.floor(Math.random() * upperCase.length));
    console.log(randomUpperIndex);
    // console.log(upperCase.charAt(randomUpperIndex));
    password = password + upperCase.charAt(randomUpperIndex)
    console.log(password)
  };

  var numbersSelected = window.confirm("Would you like to include numbers?");
  if (numbersSelected === true) {
    possibleChoices = possibleChoices + numbers
    var randomNumbersIndex = (Math.floor(Math.random() * numbers.length));
    console.log(randomNumbersIndex);
    // console.log(upperCase.charAt(randomUpperIndex));
    password = password + numbers.charAt(randomNumbersIndex)
    console.log(password)
  };

  var specialCharactersSelected = window.confirm("Would you like to include special characters?");
  if (specialCharactersSelected === true) {
    possibleChoices = possibleChoices + specialCharacters
    var randomSpecialCharIndex = (Math.floor(Math.random() * specialCharacters.length));
    console.log(randomSpecialCharIndex);
    // console.log(specialCharacters.charAt(randomSpecialCharIndex));
    password = password + specialCharacters.charAt(randomSpecialCharIndex)
    console.log(password)
  };

  var problem = numCharInput - password.length
  for (var i = 0; i < problem; i++) {
    console.log(password.length)
    password = password + possibleChoices.charAt(Math.floor(Math.random() * possibleChoices.length))
  };
  return password;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password)
  
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);