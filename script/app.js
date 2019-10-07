//#region ***********  DOM references ***********
let passwordInput, passwordToggle;


const getDomElements = function(){
    passwordInput = document.querySelector('.js-password-input');
    passwordToggle = document.querySelector('.js-password-toggle')

    console.log('input', passwordInput)

    console.log('toggle', passwordToggle)
}

const enableListener = function(){
    passwordToggle.addEventListener('change', function(e){
        console.log(e)
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
          } else {
            passwordInput.type = 'password';
          }
    })
}



//#region ***********  INIT / DOMContentLoaded ***********
document.addEventListener('DOMContentLoaded', function(){
    console.log('domcontentloaded')

    getDomElements();

    enableListener();


});
//#endregion

