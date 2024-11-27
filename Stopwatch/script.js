let displayTime = document.getElementById('stop-watch')
let stopBtn = document.getElementById('btn-stop')
let startBtn = document.getElementById('btn-start')
let resetBtn = document.getElementById('btn-reset')

let msec = 0
let secs = 0
let mins = 0

let timer = null

startBtn.addEventListener('click', function () {
  if (timer !== null) {
    clearInterval(timer)
  }
  timer = setInterval(startTimer, 10)
})

stopBtn.addEventListener('click', function () {
  clearInterval(timer)
})

resetBtn.addEventListener('click', function () {
  clearInterval(timer)
  displayTime.innerHTML = `00:00:00`
})

function startTimer() {
  msec++
  if (msec == 100) {
    msec = '0'
    secs++
    if (secs == 60) {
      secs = '0'
      mins++
    }
  }

  let msecstring = msec < 10 ? `0${msec}` : msec
  let secsstring = secs < 10 ? `0${secs}` : secs
  let minsstring = mins < 10 ? `0${mins}` : mins

  displayTime.innerHTML = `${minsstring}:${secsstring}:${msecstring}`
}
