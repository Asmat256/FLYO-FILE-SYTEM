// validation code for inputs

var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');


email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);

function validated (){

    if (email.value.length < 9) {
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
        
    } 

    
        if (password.value.length < 6) {
            password.style.border = "1px solid red";
            pass_error.style.display = "block";
            password.focus();
            return false;
    
        } 
       
}

function email_Verify(){
    if (email.value.length >= 8) {
        email.style.border = "1px solid silver";
        email_error.style.display = "none";
        return true;
    }

}
function pass_Verify(){
    if (password.value.length >= 5) {
        password.style.border = "1px solid silver";
        pass_error.style.display = "none";
        return true;
    }

}

function togglePW(){
    var password = document.querySelector('[name=password]');
    if (password.getAttribute('type') ==='password') {
        password.setAttribute('type','text');
        document.getElementById("font").style.color='black';  
    }
    else{
        password.setAttribute('type', 'password');
        document.getElementById("font").style.color='red';
    }

}

email.onkeydown = function(){
    const regex = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2.8}$/;
    const regexo = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,3}\.[a-zA-Z]{1,3}$/;
    if (regex.test(email.value) || regexo.test(email.value))
    {
        span[0].innerText = "Your email i valid";
        span[0].style.color = 'lime';
    }
    else 
    {
        span[0].innerText = "Your email i valid";
        span[0].style.color = 'red'; 
    }
}

