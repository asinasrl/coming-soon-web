const timeArea = document.getElementsByClassName("time-area")[0];
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const mins = document.getElementById("minutes");
const secs = document.getElementById("seconds");

let day = 25;
let hour = 7;
let min = 19;
let sec = 54;

window.addEventListener("load", () => {
  setInterval(() => {
    sec--;
    if (sec < 0) {
      min--;
      sec = 59;
    }
    if (min < 0) {
      hour--;
      min = 59;
    }
    if (hour < 0) {
      day--;
      hour = 23;
    }
    if (day === 0 && hour === 0 && min === 0 && sec === 0) {
      timeArea.innerHTML = `<span id="timeisup">Time's Up, We're Here!</span>`;
    }
    secs.innerHTML = sec;
    mins.innerHTML = min;
    hours.innerHTML = hour;
    days.innerHTML = day;
  }, 1000);
});
