const handleFloatingLabel = function(){
    const floatingInput = document.querySelector('.js-name-input'),
        floatingLabel = document.querySelector('.js-name-label')

        //to do 
        //check of iets ingevuld is bij blur event
        floatingInput.addEventListener('blur', function(){
            if(floatingInput.value.length > 0){
                floatingLabel.classList.add('is-floating');

            } else {
                floatingLabel.classList.remove('is-floating')
            }
        })
        // voeg een klass is floating toe indien er een value is 
        //maak die klass isfloating aan en zorg dat het blijft bovenaan staan
        //indien de input leeg is , halen we die klas er weer af
}


document.addEventListener( 'DOMContentLoaded', function() {
    console.log( 'Script loaded!' );
    handleFloatingLabel()
});