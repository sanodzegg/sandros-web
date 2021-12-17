var audio = document.getElementById('audio');
var playBtn = document.getElementById('play');
var pauseBtn = document.getElementById('pause');
var progressBar = document.getElementById('progressBar');
var isPlaying = false;

function init() {
    if(performance.navigation.type == performance.navigation.TYPE_RELOAD){
        isPlaying = false;
        playBtn.style.display = 'block';
    }
}

function togglePlay() {
    if(isPlaying == true) {
        audio.pause();
        isPlaying = false;
        playBtn.style.display = 'block';
    }else {
        audio.play();
        isPlaying = true;
        playBtn.style.display = 'none';
    }
}

audio.addEventListener('timeupdate', function(){
    var progBar = audio.currentTime / audio.duration;
    progressBar.style.width = `${progBar * 100}%`
    if(parseInt(progressBar.style.width) >= 50){
        document.getElementById('decor').style.fill = '#fff';
    }
})