const timer = document.getElementById("timer");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let startTime ;
let elaspedTime= 0;
let timerID ;
let timetoadd= 0;

function displayTime() {
  let m = Math.floor(elaspedTime / 60000) ;
  let s = Math.floor((elaspedTime % 60000) / 1000);
  let ms = Math.floor(elaspedTime % 1000) ;
  
  m = ("0"+ m).slice(-2);
  s = ("0"+ s).slice(-2);
  ms= ("00"+ms).slice(-3);
  
  timer.textContent =  m + ":" + s + ":"+ ms ;
}

function countUp() {
  timerID = setInterval(function() {
    elaspedTime = Date.now - startTime + timetoadd;
    displayTime();
    countUp();
  },10);
}

function startTimer() {
  startTime = Date.now;
  countUp();
  start.setAttribute("disabled" , true);
  stop.removeAttribute("disabled");
  reset.removeAttribute("disabled");
}

function stopTimer() {
 clearInterval(timerID) ;
 timetoadd += Date.now - startTime;
 stop.setAttribute("disabled" , true);
 start.removeAttribute("disabled");
}

function resetTimer() {
  clearInterval(timerID);
  elaspedTime = 0;
  timetoadd = 0;
  displayTime();
  start.removeAttribute("disabled");
  stop.setAttribute("disabled", true);
  reset.setAttribute("disabled" , true);
}
