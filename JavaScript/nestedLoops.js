const password = prompt("Please Enter a new password");

if(password.length>=6){
    console.log("Long enough password!")
    if(password.indexOf(' ') === -1){
        console.log("Valid password!!")
    }
    else{
        console.log("Invalid Password")
    }
}
else{
    console.log("Password too short! Must be 6+ characters")
}
