
function process_video() {
    const video = document.getElementById("video").value;
    const url_video = document.getElementById("url").value;
    if (video === '' && url_video === ''){
        alert("No s'ha introduit un video")
    }
    else if (video !== '' && url_video !== ''){
        alert("S'han introduit dos videos")
    }
    else {
        console.log('hola')
    }
}
