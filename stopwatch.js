const timer = document.getElementById("timer");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let startTime ;
let elaspedTime = 0;
let timerID ;
let timeToadd= 0 ;

function displayTime() {
  let h = Math.floor(elaspedTime / 3600000) ;
  let m = Math.floor(elaspedTime / 60000) ;
  let s = Math.floor((elaspedTime % 60000) / 1000);
  let ms = elaspedTime % 1000 ;
  
  h = ("0" + h).slice(-2);
  m = ("0" + m).slice(-2);
  s = ("0" + s).slice(-2);
  ms= ("0" + ms).slice(-3);
  
  timer.textContent = h + ":"+ m + ":" + s + ":"+ ms ;
}

function countUp() {
  timerID = setTimeout(function() {
  elaspedTime = Date.now() - startTime + timeToadd;
  displayTime();
  countUp();
  },10);
}

function startTimer() {
  startTime = Date.now();
  countUp();
  start.setAttribute("disabled" , true);
  stop.removeAttribute("disabled");
  reset.removeAttribute("disabled");
}

function stopTimer() {
 clearInterval(timerID);
 timeToadd += Date.now() - startTime;
 stop.setAttribute("disabled" , true);
 start.removeAttribute("disabled");
}

function resetTimer() {
  clearInterval(timerID);
  elaspedTime = 0;
  timeToadd = 0;
  displayTime();
  start.removeAttribute("disabled");
  stop.setAttribute("disabled", true);
  reset.setAttribute("disabled" , true);
}
