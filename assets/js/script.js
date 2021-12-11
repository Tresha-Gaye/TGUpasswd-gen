// Assignment code here

/* GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page*/


//function variables

var numericChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
console.log(numericChar);

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
console.log(upperCase);

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log(lowerCase);

var specialChar = ["'!#$%&()*+,-./:;<=>?@[\]^_`{|}~"];
console.log(specialChar);

var generateBtn = function () {
  var password = ""

  window.alert("Welcome to the secure password generator. Follow the prompts to select your password criteria.");

  while (generatePassword) {

  };

  for (var i = 0; i < password.length; i++) {
    if (password.length >= 8 && password.length <= 128) {
      window.alert(" " + (i + 1));

      // function to start the password generator
      var passwordCriteria = function () {

        // function to choose password criteria
        var passwordCriteriaPrompt = window.prompt("Would you like to choose alphanumeric and/or special characters for your password. Please enter 1 for UPPERCASE alphabet, 2 for LOWERCASE alphabet, 3 for NUMERIC characters, or 4 for SPECIAL character.");
        // use swicth case to carry out action
        passwordCriteriaPrompt = parseInt(passwordCriteraPrompt);
        switch (passwordOptionPrompt) {
          case 1:
            passwordInfo.upperCase();
            break;
          case 2:
            passwordInfo.lowerCase();
            break;
          case 3:
            passwordInfo.numericChar();
            break;
          case 4:
            passwordInfo.specialChar();
            break;
          default:
            window.alert("You did not pick a valid option. At least one character type must be selected.");
            // call passwordCriteria() again to force player to pick a valid option 
            passwordCriteria();
            break;
        }
      };


     /* if (!createPassword) {
        window.alert("You need to provide a valid answer! Please try again.");
        return createPassword();
      };*/

      // function to choose password length
      var randomNumber = function (min, max) {
        var value = Math.floor(Math.random() * (max - min + 1) + min);
        console.log("length is " + value);
        return value;
      };
      var passwordLength = randomNumber(8, 127);
      //check password length
      if (passwordLength <= 7) {
        window.alert("The minimum password length is 8 characters!");
      };
      while (password.Length >= 128) {
        window.alert("The maximum password length is 128 characters!");

      };

      // function for choosing password criteria

     /* var caseSelector = function () {
        casePrompt = window.alert("Would you like to include both uppercase and lowercase characters? Enter 'YES' or 'NO' to choose.");

        if (!casePrompt) {
          window.alert("You need to provide a valid response!");
          return upperCasePrompt
        }
      }; */



      for (var i = 0; i < password; i++) {
        if (password === "" || password === null) {
          window.alert("Please enter enter valid criteria");
        }

      }


      //if upperCasePrompt = true

      var getPassword = function () {
        var password = ""

        for (var i = 0; i < password; i++) {
          if (password === "" || password === null) {
            window.alert("Please enter enter valid criteria");
          }
          console.log("Your password is " + password);
          return password;
        }
        while (password === "" || password === null) {
          password = prompt("What is your secure password?");
        }

        window.prompt("Are you ready to create a secure password?");
        console.log("answer is " + generateBtn);
      };



      // create secure password function
      // var createPassword = function() {

      //ask employee if they want to create a secure password using the createPassword function






    /*  window.prompt("would you like to include uppercae letters?")

      if (getUpperCase) {

      }
      console.log(getUpperCase);*/

      // function to generate a random numeric value
      /* var randomEntry = function(min, max) {
        var value = Math.floor(Math.random() * (max - min + 1) + min);
      
        return value;
      }; */




      // Get references to the #generate element
      var generateBtn = document.querySelector("#generate");

      // Write password to the #password input
      function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");

        passwordText.value = password;

      };

      // Add event listener to generate button
      generateBtn.addEventListener("click", writePassword);


      generateBtn();