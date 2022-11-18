
function obtain_video_local() {
    show(document.getElementById('vd'));



    const path_local = document.getElementById("video").value;
    const video = document.getElementById("video").files[0];

    if (path_local == ''){
        alert("No s'ha introduit un video")
    }
    else {
        console.log(path_local)
        const videoURL = URL.createObjectURL(video);
        document.querySelector('.profile img').setAttribute('src', videoURL);


        video.src = path_local
        localStorage.setItem("video", path_local)
    }
}

const getValuesFromInputs = () =>{
    const profileAud = document.querySelector('input.profile-aud').files[0];

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

    document.querySelector('.aud').setAttribute('src', profileAudURL);

    document.querySelector('.header').style.display = 'flex';
}

document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault();
    addInputToProfile();
});
