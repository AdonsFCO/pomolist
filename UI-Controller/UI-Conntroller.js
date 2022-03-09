let burger = document.getElementById("burger");
let closeButton = document.getElementById("closeTap");
let menuTab = document.getElementById("menu");
let main = document.getElementById("todoList");
let pomodorosTab = document.getElementById("pomo"); 
let tempPomodorButton = document.getElementById("ThisButton"); //<-- please delete this later. 

let interface = new UserInterfaceController(menuTab, pomodorosTab, main, closeButton, burger, tempPomodorButton);