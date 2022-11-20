const getValuesFromInputs = () =>{
    const profileAud = document.querySelector('input.video').files[0];

    if (profileAud == null){
        alert("No s'ha introduit un video")
        return ;
    }

    document.querySelector('form').style.display = 'none';

    return profileAud;

}

const convertInputValues = () => {
    const profileAud = getValuesFromInputs();


    const profileAudURL = URL.createObjectURL(profileAud);

    return profileAudURL

}

const addInputToProfile = () => {

    const profileAudURL  = convertInputValues();

    document.querySelector('.video').setAttribute('src', profileAudURL);

    document.querySelector('.header').style.display = 'flex';
}

document.getElementById('upload').addEventListener('click', (e) => {
    e.preventDefault();
    addInputToProfile();
});

document.getElementById('edita').addEventListener('click', (e) => {
    e.preventDefault();
    validateOptions()
});

function validateOptions () {
    const escalar = document.getElementById("escalar");
    const bitrate = document.getElementById("bitrate");
    const velocitat = document.getElementById("velocitat");

    console.log(escalar)

    var checkboxes = []

    if (escalar.checked){
        checkboxes.push('escalar')
    }
    if (bitrate.checked){
        checkboxes.push('bitrate')
    }
    if (velocitat.checked){
        checkboxes.push('velocitat')
    }
    if(checkboxes.length === 0) {
        alert("S'ha de seleccionar com a minim una opció");
    }
}
