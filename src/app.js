var x = document.getElementById("myDIV");
x.querySelector(".random").style.background = "green";
x.querySelector("h3,h2").style.background = "blue";

var tableElm = document.getElementById("people");
var trArray = tableElm.querySelectorAll("tr");
trArray[3].style.background = "red";