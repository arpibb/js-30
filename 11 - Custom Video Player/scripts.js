const playButton = document.querySelector('[title="Toggle Play"]')
const volume = document.querySelector('[name=volume]')
const playBackRateSlider = document.querySelector('[name=playbackRate]')
const skippingButtons = document.querySelectorAll('.player__button.skip')
const videoPlayer = document.querySelector('.player__video')
const progressBar = document.querySelector('.progress__filled')
const progressContainer = document.querySelector('.progress')
const fullScreenButton = document.querySelector('.fullscreen')

function playPuase(){
  // const method = videoPlayer.paused ? 'play' : 'pause'
  // videoPlayer[method]()
  if(videoPlayer.paused){
    videoPlayer.play();
    playButton.innerHTML = "&#10074; &#10074;";
  }
  else {
    videoPlayer.pause();
    playButton.innerHTML = '►';
  }
}
function handleRanges(){
  videoPlayer[this.name] = this.value;
}
function skipping(){
  videoPlayer.currentTime += parseInt(this.dataset.skip);
}
function handleProgress(){
  const percent = videoPlayer.currentTime/videoPlayer.duration *100;
  progressBar.style.flexBasis = `${percent}%`;
}
function scrub(e){
  videoPlayer.currentTime = videoPlayer.duration * (e.offsetX/progressContainer.offsetWidth);
}
function goFullscreen(){
  videoPlayer.requestFullscreen();
}

playButton.addEventListener('click',playPuase)
videoPlayer.addEventListener('click',playPuase)
videoPlayer.addEventListener('timeupdate',handleProgress)
volume.addEventListener('change',handleRanges)
playBackRateSlider.addEventListener('change',handleRanges)
skippingButtons.forEach(skippingButton => skippingButton.addEventListener('click',skipping))
progressContainer.addEventListener('click',scrub)
let mousedown = false;
progressContainer.addEventListener('mousemove', (e)=> mousedown && scrub(e));
progressContainer.addEventListener('mousedown', ()=> mousedown = true);
progressContainer.addEventListener('mouseup', ()=> mousedown = false);
fullScreenButton.addEventListener('click', goFullscreen)


