const btn = document.querySelector('#submit-btn');
const passField = document.querySelector('#password');
const passConfirm = document.querySelector('#confirm-password');
const errorMsg = document.querySelector('#psw-error');
const form = document.querySelector('form');

function submitClicked() {
    matchPasswords();
}


function matchPasswords() {
    if (passField.value !== passConfirm.value) {
        errorMsg.textContent="Passwords must match!";
        passConfirm.style.border=("1px solid red");
        passField.style.border=("1px solid red");
    }
    else {
        form.submit();
        console.log("submitted");
        form.reset();
    }
}

btn.addEventListener('click', submitClicked);