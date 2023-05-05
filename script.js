// Assignment Code
//base generate button




//creates the password function with the original string
function generatePassword() { 
  console.log("password was generated"); 
  var password = "";
  var allChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*<>!0123456789";

  const allCharLength = allChar.length;
  const passwordLength = 12;
  for (var i = 0; i <= passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allCharLength );
    password += allChar.charAt(randomIndex);
  }
 
  
  document.getElementById("password").value = password;
}

function copyPassword() {
  console.log("btn was clicked");
  var passwordInput = document.getElementById("password");
  passwordInput.select();
  document.execCommand("copy");
}