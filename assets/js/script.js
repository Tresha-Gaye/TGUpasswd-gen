
var numbers = "0123456789";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialCharacters = "!#$%&()*+,-./:;<=>?@^_`{|}~";
var selectedCriteria = "";

function generatePassword() {
  var numChar = window.prompt("Please enter the number of characters."); // string
  console.log(numChar);
  // make sure user enters a number
  if (isNaN(numChar)) {
    window.alert("Invalid Input. Please enter a number between 8 and 128 characters.");
      var numChar = window.prompt("Please enter the number of characters."); // string
  
    // change the user entry from string to number
    numChar = parseInt(numChar);
      console.log("numChar is ", numChar);

    while (numChar <= 7 || numChar >= 128) {
      numChar = window.alert("Password must be between 8 and 128 characters. Try again.")
        var numChar = window.prompt("Please enter a number between 8 and 128 characters.");
    }
    // for loop to iterate number of characters
    for (var i = 0; i < numbers; i++) {
      var numbers = Math.floor(Math.random() * numbers.length);
      console.log("Length is " + numbers);
    };
  }


var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  console.log("length is " + value);
  return value;
};
// functions to choose password criteria

var lowerCaseChoice = window.confirm("Would you like to include lowercase letters?");
if (lowerCaseChoice === true);
control.log("lowerCaseChoice is " + lowerCaseChoice);
    var selectedCriteria = selectedCriteria + lowerCaseChoice;

var upperCaseChoice = window.confirm("Would you like to include uppercase letters?");
if (upperCaseChoice === true)
  control.log("upperCaseChoice is " + upperCaseChoice)
var selectedCriteria = selectedCriteria + upperCaseChoice

var numberChoice = window.confirm("Would you like to include numbers?");
if (number === true);
control.log("Number is " + numberChoice);
  var selectedCriteria = selectedCriteria + numerChoice;

var specialCharCaseChoice = window.confirm("Would you like to include special characters?");
if (specialCharChoice === true);
control.log("specialCharChoice is " + specialCharChoice);
  var selectedCriteria = selectedCriteria + specialCharChoice;



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
}

generatePassword();