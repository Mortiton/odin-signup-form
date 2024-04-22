const btn = document.querySelector('#submit-btn');
const passField = document.querySelector('#password');
const passConfirm = document.querySelector('#confirm-password');
const errorMsg = document.querySelector('#psw-error');
const form = document.querySelector('form');

let pswMatch = null;

function submitClicked() {
    matchPasswords();
    if (pswMatch && form.checkValidity) {
        form.submit();
    }
}


function matchPasswords() {
    if (passField.value !== passConfirm.value) {
        errorMsg.textContent="Passwords must match!";
        passConfirm.style.border=("1px solid red");
        passField.style.border=("1px solid red");
        pswMatch==false
    }
    else {
        pswMatch=true;
    }
}

btn.addEventListener('click', submitClicked);