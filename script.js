const container = document.getElementById("container");
const time = document.querySelector(".time");
const start = document.querySelector(".start");
const flag = document.querySelector(".flag");
const reset = document.querySelector(".reset");
const pause = document.querySelector(".pause");
let   hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
let   miliseconds = document.querySelector(".miliseconds");
const lapTiming = document.getElementById("lapTiming");

let count = 0;
let sec = 0;
let min = 0;
let hour = 0;
let flagg;
function stopWatch() {
  if (flagg) {
    count++;
    if (count == 100) {
      count = 0;
      sec++;
    }
    if (sec == 60) {
      sec = 0;
      min++;
    }
    if (min == 60) {
      min = 0;
      hour++;
    }

    miliseconds.innerHTML = `${count}`;
    seconds.innerHTML = `${sec} : `;
    minutes.innerHTML = `${min} :`;
    hours.innerHTML = `${hour} :`;

    setTimeout(stopWatch);
  }
}

start.addEventListener("click", () => {
  flagg = true;
  stopWatch();
  // setTimeout(stopWatch(flagg), 1000);
});

reset.addEventListener("click", () => {
  flagg = false;
  count = 0;
  sec = 0;
  min = 0;
  hour = 0;

  miliseconds.innerHTML = `${count}`;
  seconds.innerHTML = `${sec} : `;
  minutes.innerHTML = `${min} :`;
  hours.innerHTML = `${hour} :`;
  // stopWatch(flagg);
});

flag.addEventListener('click', () => {
    console.log(count);

    let div = document.createElement("div");
    div.innerHTML = `
        <span>${hour}</span>
        <span>${min}</span>
        <span>${sec}</span>
        <span>${count}</span>
    `;

    lapTiming.append(div);

    console.log(div);
})

pause.addEventListener('click',()=>{
    flagg = false;
    stopWatch();
})
