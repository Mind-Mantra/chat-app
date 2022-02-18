var person = "";
var operson = "";
if (localStorage.getItem("you")) {
  person = "other";
  operson = "you";
} else {
  person = "you";
  operson = "other";
}

localStorage.setItem(person, "***");

var user = prompt("Enter your Name: ");
var nam = document.getElementById("user");
nam.innerHTML = user;

var input = document.getElementById("messageInput");
var chatDisplay = document.getElementById("chatDisp");
var typing = document.getElementById("typing");

input.addEventListener("keydown", function () {
  typing.style.visibility = "visible";
});

input.addEventListener("keyup", function () {
  typing.style.visibility = "hidden";
});

var displayChat = document.getElementById("chatDisp");

var s = document.querySelector("#sendMessage");
s.addEventListener("click", message, false);

function message() {
  var mess = document.createElement("div");
  mess.setAttribute("class", "right");
  mess.innerHTML = input.value;
  chatDisplay.appendChild(mess);
  localStorage.setItem(person, input.value);
}

document.addEventListener("storage", msg, false);

function msg(e) {
  if ((e.key = operson)) {
    var mess = document.createElement("div");
    mess.setAttribute("class", "left");
    mess.innerHTML = localStorage.getItem(operson);
    chatDisplay.appendChild(mess);
  }
}

if (!localStorage.getItem("chat")) {
  localStorage.setItem("chat", JSON.stringify([]));
}
var chatHistory = JSON.parse(localStorage.getItem("chat"));
var send = document.getElementById("sendMessage");
var i = 0;
send.addEventListener("click", function () {
  if (document.getElementById("messageInput").value == "") {
    alert("please Enter something in Chat....");
    return;
  }
  var message = {
    name: userName,
    text: document.getElementById("messageInput").value,
    dateTime: new Date().toLocaleTimeString() + " " + new Date().toDateString(),
    src: "http://pickaface.net/includes/themes/clean/img/slide4.png",
  };
  chatHistory.push(message);
  document.getElementById("messageInput").value = "";
  localStorage.setItem("chat", JSON.stringify(chatHistory));
  localData = localStorage.getItem("chat");
  localData = JSON.parse(localData);
  var templateDiv =
    "<div class='message'>" +
    "<img class='avatar' src='" +
    localData[i].src +
    "' alt=''/>" +
    "<p class='text'>" +
    localData[i].text +
    "</p>" +
    "<div class='clear'></div>" +
    "</div>" +
    "<p class='datetime'>" +
    localData[i].dateTime +
    "</p>" +
    "<div class='clear'></div>";
  i++;
  chatDisplay.innerHTML += templateDiv;
});
