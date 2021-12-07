const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");


form.addEventListener("submit" , (e) => {
    e.preventDefault()

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
        

    if(usernameValue === ""){
        setErrorFor(username , "username can not be blank")
    }
    else{
        setSuccessFor(username)
    }


    if(emailValue === ''){
        setErrorFor(email , "email can not be blank")
    }else if(!isEmail(emailValue)){
        setErrorFor(email , "email is not a vaild" )
    }else{
        setSuccessFor(email)
    }

    
    if(passwordValue === ''){
        setErrorFor(password , "password can not be blank")
    }else{
        setSuccessFor(password)
    }


    if(password2Value === ''){
        setErrorFor(password2 , "password can not be blank")
    }else if(password2Value !== passwordValue){
        setErrorFor(password2 , "password does not match")
    }else{
        setSuccessFor(password2)
    }




}

function setErrorFor(input , message){

    const formControl = input.parentElement; // form-control
    const small = formControl.querySelector("small");   
    

    // Add error msg inside a small
    small.innerText = message;

    // Add error class
    formControl.className = "form-control error"

}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success"
}


function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}