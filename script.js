// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  //  this is a function to generate the password 
function generatePassword() {
  let upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  let number = "0123456789";
  let symbol = "!@#$%^&*()_+?.,-=";
  let finalPassword = "";
  let temp = "";

  var passwordLength = parseInt(prompt("Choose password length. Must be more than 8 characters and must be less than 128 characters"));

//  check if input is between 8 to 128 
while (passwordLength <= 8 || passwordLength >= 128){
  alert("The password must be more than 8 chracters and less than 128 chracters!!");
    // var passwordLength = prompt("how many numbers you would like to pick between 8-128 ?");
  
}
  var bigletters = confirm("Do you want to capital letters?");
  var smallletters = confirm("Do you want to lowercase letters?");
  var num = confirm("Do you want number?");
  var special = confirm("Do you want to symbol?");
//  if user choose this we add choice 
  if (bigletters){
    temp += upperCaseLetters;
  }
  if (smallletters){
     temp += lowerCaseLetters;
  }
  if (num){
     temp += number;
  }
  if (special){
     temp += symbol;
  }
console.log(temp)
//  if user didn't choose at least one of these choices 
  if (!bigletters && !smallletters && !num && !special) {
   alert ("You must choose at leaset one chracter");
  }
//  add random characters to final password 
  for  (i = 0; i < passwordLength; i++){
    let randomNumber = Math.floor(Math.random() * temp.length);
  finalPassword += temp.charAt(randomNumber);
  
  } 
  // return final password to other function 
  return finalPassword;

}

