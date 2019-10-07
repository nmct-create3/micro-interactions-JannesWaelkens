//#region ***********  DOM references ***********

let email = {},
password = {},
signInButton;

const getDomElements2 = function(){
    // nog in de html zetten 
    email.errorMessage = document.querySelector('.js-email-field')
    email.input = document.querySelector('.js-email-error-message')
    email.field = document.querySelector('.js-email-input')

    password.errorMessage = document.querySelector('.js-password-field')
    password.input = document.querySelector('.js-password-error')
    password.field = document.querySelector('.js-password-input')

    signInButton = document.querySelector('.js-sign-in-button')

    //console.log(werkt het ?)

   
}

const enableListener2 = function(){
    
    
}



//#region ***********  INIT / DOMContentLoaded ***********
document.addEventListener('DOMContentLoaded', function(){
    console.log('domcontentloaded22');

    getDomElements2();

    enableListener2();


});
//#endregion