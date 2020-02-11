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
function handleRanges(){
  videoPlayer[this.name] = this.value
}
function skipping(){
  videoPlayer.currentTime += parseInt(this.dataset.skip)
}

playButton.addEventListener('click',playPuase)
videoPlayer.addEventListener('click',playPuase)
volume.addEventListener('mousemove',handleRanges)
playBackRateSlider.addEventListener('mousemove',handleRanges)
skippingButtons.forEach(skippingButton => skippingButton.addEventListener('click',skipping))

