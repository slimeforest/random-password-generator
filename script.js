var passwordText = document.getElementById("password");
var generateButton = document.getElementById("generate");
var copyButton = document.getElementById("copyClipboard");

const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numChars = "1234567890";
const specialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

generateButton.addEventListener("click", generateRandomPassword);

function generateRandomPassword() {

  let newPassword = "";
  let passwordCharset = "";

  let passwordLengthInput = prompt("How many characters would you like your password to be? Passwords must be between 8 and 128 characters long.");

  if (Number(passwordLengthInput < 8) || Number(passwordLengthInput > 128) || isNaN(passwordLengthInput)) {
      alert("Number must be bewteen 8 and 128.");
  } 
  let lowercaseCharsInput = confirm("Do you want lowercase letters in your password?")
  if (lowercaseCharsInput){
    passwordCharset += lowercaseChars;
  }
  let UppercaseCharsInput = confirm("Do you want uppercase letters in your password?")
  if (UppercaseCharsInput){
    passwordCharset += uppercaseChars;
  }
  let numberCharsInput = confirm("Do you want numbers in your password?")
  if (numberCharsInput){
    passwordCharset += numChars;
  }
  let specialCharsInput = confirm("Do you want special characters to be included in your password?")
  if (specialCharsInput){
    passwordCharset+=specialChars
  }
  if (passwordCharset===""){
    alert("You must incluse at least one character type in your password.")
  }
  if (Number(passwordLengthInput>=8) && Number(passwordLengthInput<=128)){
    for (var i=0; i<passwordLengthInput; i++){
      newPassword += passwordCharset.charAt(Math.floor(Math.random()*passwordCharset.length));
    }
    document.getElementById("password").value = newPassword
  }
};

copyButton.addEventListener("click", function(){
  passwordText.select();
  document.execCommand("copy");
  alert("Copied to clipboard.")
})

