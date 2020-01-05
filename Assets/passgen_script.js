  
// Assignment Code
var generateBtn = document.querySelector("#generate");
var input = document.querySelector('#clear');
var textarea = document.querySelector('#password');

function generatePassword() {
 
  var specialChars = ["!", "@", "#", "$", "%", "&", "_", "+", "~", "(", ")", "*", ",", "?", "/", "|", "-", ":", ";", "[", "]", "{", "}", "^"];
  var numbers = ["0","1","2","3","4","5","6","7","8","9"];
  var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  var finalPassword = "";
  var passwordLength;
  var chosenTypes = [];


  passwordLength = prompt("How many characters would you like your password to contain?\n(Must be between 8 & 128 characters.)");
  
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength) ) {
    passwordLength = prompt("Password length must be between 8 - 128 characters.")
  }; 

  if (confirm("Would you like to include special characters in your password?\nClick OK for yes, CANCEL for no.")) {
    chosenTypes = chosenTypes.concat(specialChars);
  };

  if (confirm("Would you like to include numbers in your password?\nClick OK for yes, CANCEL for no.")) {
    chosenTypes = chosenTypes.concat(numbers)
  };

  if (confirm("Would you like to include lowercase letters in your password?\nClick OK for yes, CANCEL for no.")) {
    chosenTypes = chosenTypes.concat(lowerCase);
  };

  if (confirm("Would you like to include uppercase letters in your password\nClick OK for yes, CANCEL for no.")) {
    chosenTypes = chosenTypes.concat(upperCase);
  };
  
  for (i = 0; i < passwordLength; i++) {
    var x = chosenTypes[Math.floor(Math.random()*(chosenTypes.length))];
    var y = x[Math.floor(Math.random()*(x.length))];
    finalPassword = finalPassword.concat(y)
  }
  return finalPassword;

};

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

function copyFunction() {
  var copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
};

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
generateBtn.addEventListener("click", writePassword);


