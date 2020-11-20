// Telling the program what these buttons are
var generateBtn = document.querySelector("#generate");
var input = document.querySelector('#clear');
var textarea = document.querySelector('#password');

function generatePassword() {

  // assigning the pool of characters the user can add to their password
  var specialChars = ["!", "@", "#", "$", "%", "&", "_", "+", "~", "(", ")", "*", ",", "?", "/", "|", "-", ":", ";", "[", "]", "{", "}", "^"];
  var numbers = ["0","1","2","3","4","5","6","7","8","9"];
  var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  // initializing variables that the user chooses throughout the process
  var finalPassword = "";
  var passwordLength;
  var chosenTypes = [];

  // initial prompt for set password length chosen by user
  passwordLength = prompt("How many characters would you like your password to contain?\n(Must be between 8 & 128 characters.)");
  
  // user will be prompted again if password length is out of range / NaN(not a number)
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength) ) {
    passwordLength = prompt("Password length must be between 8 - 128 characters.")
  }


  // user can select what characters they want in their password.
  // when they choose each option, it will be added into the chosenTypes array
  if (confirm("Would you like to include special characters in your password?\nClick OK for yes, CANCEL for no.")) {
    chosenTypes = chosenTypes.concat(specialChars);
  }

  if (confirm("Would you like to include numbers in your password?\nClick OK for yes, CANCEL for no.")) {
    chosenTypes = chosenTypes.concat(numbers)
  }

  if (confirm("Would you like to include lowercase letters in your password?\nClick OK for yes, CANCEL for no.")) {
    chosenTypes = chosenTypes.concat(lowerCase);
  }

  if (confirm("Would you like to include uppercase letters in your password\nClick OK for yes, CANCEL for no.")) {
    chosenTypes = chosenTypes.concat(upperCase);
  }
  
  for (i = 0; i < passwordLength; i++) {
    // randomizing which characters from the user-approved list (chosenTypes) will be used in the password
    var x = chosenTypes[Math.floor(Math.random()*(chosenTypes.length))];
    var y = x[Math.floor(Math.random()*(x.length))];
    // overwriting the initiallized finalPassword with randomly generated password
    finalPassword = finalPassword.concat(y)
  }

  return finalPassword;

}

function writePassword() {
  // calls the generatePassword() to start application
  var password = generatePassword();
  // Telling the program what this are is
  var passwordText = document.querySelector("#password");

  // updating the value shown in the text box to the generatedPassword
  passwordText.value = password;
}

// enabling the Copy Button
function copyFunction() {
  // Telling the program what this buttons is
  var copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
}

// resets everything on a refresh
input.addEventListener('click', function () {
  textarea.value = '';
  document.getElementById("password").value = "";
  finalPassword = null;
  passwordLength = null;
  chosenTypes = null;
  specialChars = null;
  numbers = null;
  lowerCase = null;
  upperCase = null;
}, false);


// Add event listener to generate button
// Click the generate button to start the program
generateBtn.addEventListener("click", writePassword);