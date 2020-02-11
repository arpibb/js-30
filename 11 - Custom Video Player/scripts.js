const playButton = document.querySelector('[title="Toggle Play"]')
const volume = document.querySelector('[name=volume]')
const playBackRateSlider = document.querySelector('[name=playbackRate]')
const skippingButtons = document.querySelectorAll('.player__button.skip')
const videoPlayer = document.querySelector('.player__video')
const progressFilled = document.querySelector('.progress__filled')


progressFilled.style.width = '40%';


function playPuase(){
  // const method = videoPlayer.paused ? 'play' : 'pause'
  // videoPlayer[method]()
  if(videoPlayer.paused){
    videoPlayer.play()
    playButton.innerHTML = "&#10074; &#10074;"
  }
  else {
    videoPlayer.pause()
    playButton.innerHTML = '►'
  }
}
function setVolume(){
  videoPlayer.volume = this.value
}
function setPlayBackRate(){
  videoPlayer.playbackRate = this.value
}
function skipping(){
  videoPlayer.currentTime += parseInt(this.dataset.skip)
}

// console.log(parseInt(skippingButtons[0].dataset.skip))

playButton.addEventListener('click',playPuase)
videoPlayer.addEventListener('click',playPuase)
volume.addEventListener('mousemove',setVolume)
playBackRateSlider.addEventListener('mousemove',setPlayBackRate)
skippingButtons.forEach(skippingButton => skippingButton.addEventListener('click',skipping))

