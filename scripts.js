function inputChecker(event) {
    event.preventDefault();
    var userName = document.getElementById('uname').value;
    var passWord = document.getElementById('password').value;
    if(!userName || !passWord){
        if(!userName && !passWord){
            document.getElementById("output").innerHTML = "Please enter your username and password.";
        }
        else if(!userName){
            document.getElementById("output").innerHTML = "Please enter your username.";
        }
        else if(!passWord){
            document.getElementById("output").innerHTML = "Please enter your password.";
        }
        console.log("Login Error.");        
    }
    else{
        console.log('valid');
        this.submit();
    }
}

document.getElementById("loginForm").addEventListener("submit", inputChecker);