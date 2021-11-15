//JS text
console.log("this");

const clock = document.getElementById("currentDay");

function updateTime() {
  const now = moment();
  const displayTime = now.format("MMMM Do YYYY, h:mm:ss a");

  clock.textContent = displayTime;
}
setInterval(updateTime, 1000);

// var currentTime = moment();
// console.log(currentTime);

// function displayTime() {
//   document.getElementById("#currentDay") = "Today is " + currentTime;
// }

// var m = moment.utc("");

// console.log(m);
