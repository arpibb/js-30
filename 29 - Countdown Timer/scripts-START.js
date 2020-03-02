let countDown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const btns = document.querySelectorAll('[data-time]');

function timer(seconds){
  clearInterval(countDown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);
  countDown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if(secondsLeft < 0){
      clearInterval(countDown);
    }
    displayTimeLeft(secondsLeft);

  },1000);
}

function displayTimeLeft(seconds) {
  const mins = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${mins}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp){
  const end = new Date(timestamp);
  const hour =  end.getHours();
  const adjustedHour = hour > 12 ? hour -12 : hour;
  const minutes = end.getMinutes();
  endTime.textContent = `Be back at ${hour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer(){
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

btns.forEach(btn => btn.addEventListener('click',startTimer));
document.customForm.addEventListener('submit',function(e){
  e.preventDefault();
  const mins= this.minutes.value;
  timer(mins*60);
  this.reset();
})
