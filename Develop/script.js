var passwordText = document.getElementById("password");
var generateButton = document.getElementById("generate");
var copyButton = document.getElementById("copyClipboard");

const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numChars = "1234567890";
const speecialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

generateButton.addEventListener("click", generateRandomPassword);
copyButton.addEventListener("click", copyButton);

function generateRandomPassword() {

  let newPassword = "";
  let passwordCharset = "";

  let passwordLengthInput = prompt("How many characters would you like your password to be?");

  if (Number(passwordLengthInput < 8) || Number(passwordLengthInput > 128) || isNaN(passwordLengthInput)) {
      alert("Number must be bewteen 8 and 128.");
      return;
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
    passwordCharset+=speecialChars
  }
  if (passwordCharset===""){
    alert("You must incluse at least one character type in your password.")
  }
  if (Number(passwordLengthInput>=8) && Number(passwordLengthInput<=128)){
    for (var i=0; i<passwordLengthInput; i++){
      newPassword += passwordCharset.charAt(Math.floor(Math.random()*passwordCharset.length));
    }
    localStorage.setItem("password", newPassword);
    document.getElementById("password").value = newPassword
  }
  console.log(newPassword);
  
};

copyButton.addEventListener("click", function(){
  passwordText.select();
  document.execCommand("copy");
  passwordText.innerHTML = "";
  alert("Copied to clipboard.")
})

