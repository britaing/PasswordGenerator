// Assignment code here


//variable for password length: 8 < 128
// var characterLength = "";
//variable for character types(below); abcdefghijklmnopqrstuvwxyz(lower/upper), !?@#$%^&*(), 0123456789
var lowerCaseLetters = ["a","b","c","d","e","f","g","h", "i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialCharactersTypes = ["!","?","@","#","$","%","^","&","*","(",")"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];


//math function? ceiling/random: Math.floor(Math.Random() * ??)


//validate criteria: character types with ||, else not valid?





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  //window prompt messages to use when figured out

  
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
var characterLength =  window.prompt("Choose a number between that is at least 8 and no greater than 128.");
console.log(characterLength);
if (characterLength < 8 || characterLength > 128) {
  alert('please select a number between 8 and 128.')
  return null
}

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

var lowerCaseChoice = window.confirm("Include lowercase letter?");
var specialCharactersChoice = window.confirm("Include special characters?");
var upperCaseChoice = window.confirm("Include uppercase letters?");
var numbersChoice = window.confirm("Include numbers?");

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

if(lowerCaseChoice === false && specialCharactersChoice === false && upperCaseChoice === false && numbersChoice === false){
  alert('please select one option')
  return null
}

var userChoices = []

if(upperCaseChoice === true) {
  userChoices = userChoices.concat(upperCaseLetters)
}
if(lowerCaseChoice ===true){
 userChoices = userChoices.concat(lowerCaseLetters)
}
if (specialCharactersChoice === true){
  userChoices = userChoices.concat(specialCharactersTypes);
  console.log(userChoices)
}
if(numbersChoice === true) {
  userChoices = userChoices.concat(numbers)
}
console.log(userChoices)

var passwordResult = "";

for (var i = 0; i < characterLength; i++) {
  var randomIdx = Math.floor(Math.random() * userChoices.length)
  passwordResult = passwordResult + userChoices[randomIdx];
}



// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
//  console.log(b);
return passwordResult
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// NOTES BELOW!!!!!!!!!!!!!!!

// variables as arrays?
// var lowerCaseLetters = ["a","b","c","d","e","f","g","h", "i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// var upperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// var specialCharactersTypes = ["!","?","@","#","$","%","^","&","*","(",")"];
// var numbersChoice = ["0","1","2","3","4","5","6","7","8","9"];


// GIVEN I need a new, secure password

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
