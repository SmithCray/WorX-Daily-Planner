//JS text
console.log("this");

const clock = document.getElementById("currentDay");
const row = document.getElementById("hourRow");
var timeBlock = moment().hour();
console.log(timeBlock);

var task = document.querySelector("task");
var saveButton = document.querySelector("saveBtn");
var data = localStorage.getItem("data");

task.textContent = data;

saveButton.addEventListener("click", function () {
  if (data >= "1") {
    task.textContent = data;
    localStorage.setItem("data", data);
  }
});

function updateTime() {
  const now = moment();
  const displayTime = now.format("MMMM Do YYYY, h:mm: a");
  clock.textContent = displayTime;

  if (timeBlock === document.getElementById("hourRow")) {
    row.classlist.add("present");
  } else if (timeBlock > document.getElementById("hourRow")) {
    row.classlist.add("future");
  } else if (timeBlock < document.getElementById("hourRow")) {
    row.classlist.add("past");
  }
}
setInterval(updateTime, 1000);

// var currentTime = moment();
// console.log(currentTime);

// function displayTime() {
//   document.getElementById("#currentDay") = "Today is " + currentTime;
// }

// var m = moment.utc("");

// console.log(m);
