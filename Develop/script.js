//JS test link*
console.log("test");

//clock and time pieces
const clock = document.getElementById("currentDay");
const row = document.getElementById("hourRow");
var timeBlock = moment().hour();
console.log(timeBlock);

//save button variables
var task = document.getElementsByClassName("textbox");
var saveButton9am = document.getElementById("saveBtn9am");
var saveButton10am = document.getElementById("saveBtn10am");
var saveButton11am = document.getElementById("saveBtn11am");
var saveButton12am = document.getElementById("saveBtn12am");
var saveButton1pm = document.getElementById("saveBtn1pm");
var saveButton2pm = document.getElementById("saveBtn2pm");
var saveButton3pm = document.getElementById("saveBtn3pm");
var saveButton4pm = document.getElementById("saveBtn4pm");
var saveButton5pm = document.getElementById("saveBtn5pm");

//local storage pulls
task9am.textContent = localStorage.getItem("9am");
task10am.textContent = localStorage.getItem("10am");
task11am.textContent = localStorage.getItem("11am");
task12am.textContent = localStorage.getItem("12am");
task1pm.textContent = localStorage.getItem("1pm");
task2pm.textContent = localStorage.getItem("2pm");
task3pm.textContent = localStorage.getItem("3pm");
task4pm.textContent = localStorage.getItem("4pm");
task5pm.textContent = localStorage.getItem("5pm");

saveButton9am.addEventListener("click", function (event) {
  console.log("click");
  var taskText =
    this.parentElement.parentElement.previousElementSibling.firstElementChild
      .value;
  console.log(taskText);
  localStorage.setItem("9am", taskText);
});

saveButton10am.addEventListener("click", function (event) {
  console.log("click");
  var taskText =
    this.parentElement.parentElement.previousElementSibling.firstElementChild
      .value;
  console.log(taskText);
  localStorage.setItem("10am", taskText);
});

saveButton11am.addEventListener("click", function (event) {
  console.log("click");
  var taskText =
    this.parentElement.parentElement.previousElementSibling.firstElementChild
      .value;
  console.log(taskText);
  localStorage.setItem("11am", taskText);
});

saveButton12am.addEventListener("click", function (event) {
  console.log("click");
  var taskText =
    this.parentElement.parentElement.previousElementSibling.firstElementChild
      .value;
  console.log(taskText);
  localStorage.setItem("12am", taskText);
});

saveButton1pm.addEventListener("click", function (event) {
  console.log("click");
  var taskText =
    this.parentElement.parentElement.previousElementSibling.firstElementChild
      .value;
  console.log(taskText);
  localStorage.setItem("1pm", taskText);
});

saveButton2pm.addEventListener("click", function (event) {
  console.log("click");
  var taskText =
    this.parentElement.parentElement.previousElementSibling.firstElementChild
      .value;
  console.log(taskText);
  localStorage.setItem("2pm", taskText);
});

saveButton3pm.addEventListener("click", function (event) {
  console.log("click");
  var taskText =
    this.parentElement.parentElement.previousElementSibling.firstElementChild
      .value;
  console.log(taskText);
  localStorage.setItem("3pm", taskText);
});

saveButton4pm.addEventListener("click", function (event) {
  console.log("click");
  var taskText =
    this.parentElement.parentElement.previousElementSibling.firstElementChild
      .value;
  console.log(taskText);
  localStorage.setItem("4pm", taskText);
});

saveButton5pm.addEventListener("click", function (event) {
  console.log("click");
  var taskText =
    this.parentElement.parentElement.previousElementSibling.firstElementChild
      .value;
  console.log(taskText);
  localStorage.setItem("5pm", taskText);
});

function updateTime() {
  console.log("Hi");
  const now = moment();
  const displayTime = now.format("MMMM Do YYYY, h:mm a");
  clock.textContent = displayTime;

  // if (timeBlock === document.getElementById("hourRow")) {
  //   row.classlist.add("present");
  // } else if (timeBlock > document.getElementById("hourRow")) {
  //   row.classlist.add("future");
  // } else if (timeBlock < document.getElementById("hourRow")) {
  //   row.classlist.add("past");
  // }
}
setInterval(updateTime, 1000);
