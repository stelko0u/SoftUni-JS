function passwordGuess(passArr) {
  let password = (passArr[0]);
  if(password == "s3cr3t!P@ssw0rd"){
    console.log("Welcome");
  }else{
    console.log("Wrong password!");
  }
}

passwordGuess(["qwerty"]);
passwordGuess(["s3cr3t!P@ssw0rd"]);
passwordGuess(["s3cr3t!p@ss"]);