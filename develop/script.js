// Define character sets for lowercase, uppercase, numbers and special chars
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var nums = "0123456789";
var specialChars = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); 
// #generate is the "generate password" btn

function generatePassword() {
  //Length of password
  var passwordLength = prompt("Enter password length (between 8 and 128 characters):");
  //Makes sure user input is between specified length
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Please enter a valid password length between 8 and 128 characters:")
  }

  //asks user for other criteria
  var useLowerCase = confirm("Include Lowercase characters?");
  var useUpperCase = confirm("Include Uppercase characters?");
  var useNums = confirm("Include Numbers?");
  var useSpecial = confirm("Include special characters?");

  //Ensures at least one criteria was enabled
  while (!(useLowerCase || useUpperCase || useNums || useSpecial)) {
    alert("Please select at least one type of character type to include in your password.");
    var useLowerCase = confirm("Include Lowercase characters?");
    var useUpperCase = confirm("Include Uppercase characters?");
    var useNums = confirm("Include Numbers?");
    var useSpecial = confirm("Include special characters?");
  }


  //creates password
  var password = "";
  var charSet = "";

  if (useLowerCase) {
    charSet += lowercaseChars;
  }
  if (useUpperCase) {
    charSet += uppercaseChars;
  }
  if (useNums) {
    charSet += nums;
  }
  if (useSpecial) {
    charSet += specialChars;
  }

  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }

  return password;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.textContent = password;
  passwordText.setAttribute = ("syle", "font-size:100px", "font-weight:bold");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
