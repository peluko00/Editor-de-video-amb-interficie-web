
var video

function obtain_video_local() {
    const path_local = document.getElementById("video").value;
    
    if (path_local == ''){
        alert("No s'ha introduit un video")
    }
    else {
        console.log('hola')
    }
}

function obtain_video_url() {
    //const url_web = document.getElementById("url").value;
    const url_web = document.getElementById("video").value;
    
    if (url_web == ''){
        alert("No s'ha introduit un video")
    }
    else {

        console.log('hola')
    }
}
