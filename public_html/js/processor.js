
var video

function obtain_video_local() {
    const path_local = document.getElementById("video").value;

    if (path_local == ''){
        alert("No s'ha introduit un video")
    }
    else {
        video = path_local
        window.location.href = '../preview.html'
        put_video_preview()
    }
}

function obtain_video_url() {
    const url_web = document.getElementById("url_video").value;
    if (url_web == ''){
        alert("No s'ha introduit un video")
    }
    else {
        video = url_web
        window.location.href = '../preview.html'
        put_video_preview()
    }
}

function put_video_preview() {
    const video_preview = document.getElementById("video_preview");
    console.log(video)
    video_preview.src = video

}
