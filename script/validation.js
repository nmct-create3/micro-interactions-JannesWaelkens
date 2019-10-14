//#region ***********  DOM references ***********

let email = {},
password = {},
signInButton;

const isValidEmailAddress = function(emailAddress) {
    // Basis manier om e-mailadres te checken.
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

const isValidPassword = function(password2) {
    console.log(password2)
    if (password2.length > 1 ){
        return true
    }
    else {return false}

};


const getDomElements2 = function(){
    // nog in de html zetten 
    email.errorMessage = document.querySelector('.js-email-error-message ')
    email.input = document.querySelector('.js-email-input')
    email.field = document.querySelector('.js-email-field')

    password.errorMessage = document.querySelector('.js-password-error-message')
    password.input = document.querySelector('.js-password-input')
    
    password.field = document.querySelector('.js-password-field')
    console.log(password.field)

    signInButton = document.querySelector('.js-sign-in-button')

    //console.log(werkt het ?)

   
}

const isEmpty = function(fieldValue) {
    return !fieldValue || !fieldValue.length;
 };

const addErrors = function(field){
    field.classList.add('has-error')
}



const doubleCheckEmail = function(){
    if (isValidEmailAddress(email.input.value)){
        removeErrors(email.field);
        
    } else {
        if (isEmpty(email.input.value)){
            email.errorMessage.innerHTML = "field is required";

        } else {
            email.errorMessage.innerHTML = 'the email is not valid';
        }
    }
}

const doubleCheckPassword = function(){
    console.log(password.input.value)
    if (isValidPassword(password.input.value)){
        removeErrors(password.field);
        
    } else {
        if (isEmpty(password.input.value)){
            password.errorMessage.innerHTML = "field is required";

        } else {
            password.errorMessage.innerHTML = 'the password is not valid';
        }
    }
}



const removeErrors = function(field){
    field.classList.remove('has-error')
}

const enableInteraction = function(){
    // blur listener aan email veld hangen
    email.input.addEventListener('blur', function(event){
        const typedInput = event.target.value;

        if (!isValidEmailAddress(typedInput)){
            addErrors(email.field);
            email.input.removeEventListener('input', doubleCheckEmail);

            if (isEmpty(typedInput)){
                email.errorMessage.innerHTML = "field is required";

            } else {
                email.errorMessage.innerHTML = 'the email is not valid';
            }

            email.input.addEventListener('input' , doubleCheckEmail )
        }


    })

    password.input.addEventListener('blur', function(event){
        const typedInput = event.target.value;

        console.log(typedInput)

        if (!isValidPassword(typedInput)){
            addErrors(password.field);
            password.input.removeEventListener('input', doubleCheckPassword);

            if (isEmpty(typedInput)){
                password.errorMessage.innerHTML = "field is required";

            } else {
                password.errorMessage.innerHTML = 'the password is not valid';
            }

            password.input.addEventListener('input' , doubleCheckPassword )
        }

        
    })
    //blur listener aan paswoord veld hangen
    // click event aaan button hangen

}




//#region ***********  INIT / DOMContentLoaded ***********
document.addEventListener('DOMContentLoaded', function(){
    console.log('domcontentloaded22');

    getDomElements2();

    enableInteraction();


});
//#endregion