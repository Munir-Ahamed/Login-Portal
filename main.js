var createAccount = document.getElementById('createAccount');
var loginForm = document.getElementById('loginForm');
var accountForm = document.getElementById('accountForm');
var errorMessage2 = document.getElementById('errorMessage2');

createAccount.addEventListener('click', () => {
    loginForm.classList.add("_hidden");
    accountForm.classList.remove("_hidden");
    if (errorMessage2.innerText = "Please enter your username and password.") {
        errorMessage2.innerText = "";
    }
});

var haveAccount = document.getElementById('haveAccount');
var errorMessage1 = document.getElementById('errorMessage1');

haveAccount.addEventListener('click', () =>{
    accountForm.classList.add("_hidden");
    loginForm.classList.remove("_hidden");
    if (errorMessage1.innerText = "Please enter your username and password.") {
        errorMessage1.innerText = "";
    }
});

var username1 = document.getElementById('username1');
var password1 = document.getElementById('password1');
var button1 = document.getElementById('button1');

button1.addEventListener('click', () => {
    if (!username1.value || !password1.value) {
        errorMessage1.innerText = "Please enter your username and password.";
    }
    else {
        errorMessage1.innerText = "";
    }
});

var button2 = document.getElementById('button2');
var username2 = document.getElementById('username2');
var email2 = document.getElementById('email2');
var password2 = document.getElementById('password2');
var rePassword2 = document.getElementById('rePassword2');

button2.addEventListener('click', () => {
    if (!username2.value || !email2.value || !password2.value || !rePassword2.value) {
        errorMessage2.innerText = "Please enter your username and password.";
    }
    else {
        errorMessage2.innerText = "";
    }
});


    