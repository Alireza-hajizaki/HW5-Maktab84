let $ = document;
const submit = $.querySelector(".submit");
const password = $.querySelector(".pass");
const rePassword = $.querySelector(".re-pass"); 
const email = $.querySelector(".email"); 

console.log(email.value)



let emailvalidate = false;
let passwordvalidate = false;
let repasswordvalidate = false;

email.addEventListener('input',emailValidation);

function emailValidation(){
    // let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if (regex.test(email.value)){
        email.style.border = "3px solid green"
        emailvalidate = true
    }else{
        email.style.border = "3px solid red"
        emailvalidate=false
    }
}

password.addEventListener('input', passwordElem);
function passwordElem(){
    
    let minMaxLength = /^[\s\S]{8,32}$/,
    upper = /[A-Z]/,
    lower = /[a-z]/,
    number = /[0-9]/,
    special = /[ !"#$%&'()*+,\-./:;?@[\\\]^_`{|}~]/;
    if (minMaxLength.test(password.value) &&
    upper.test(password.value) &&
    lower.test(password.value) &&
    number.test(password.value) &&
    special.test(password.value)
    ) {
    password.style.border = '3px solid green' ;
    passwordvalidate = true;
}else{
    password.style.border = '3px solid red' ;
    passwordvalidate = false;    
    }
}

rePassword.addEventListener('input', repasswordElem)
function repasswordElem(){
    if(password.value === rePassword.value){
        rePassword.style.border = '3px solid green'
        repasswordvalidate = true;
    }else{
        rePassword.style.border = '3px solid red'
        repasswordvalidate = false ;
    }

}

submit.addEventListener('click',submitElem);
function submitElem(){
    if(emailvalidate && passwordvalidate && repasswordvalidate && $.querySelector(".check-box:checked")){
    alert('sign up')
    }else{
        alert('please nedonam chishi')
    }

}
