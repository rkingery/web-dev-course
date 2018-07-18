var h1 = document.querySelector("h1");

h1.style.color = "pink";

var body = document.querySelector("body");
var isBlue = false;

setInterval(function() {
	if (isBlue) {
		body.style.background = "white";
	}
	else {
		body.style.background = "rgba(0,0,200,0.2)";
	}
	isBlue = !isBlue;
}, 5000);

var tag = document.getElementById("highlight"); // selects highlight id block
var bolded = document.getElementsByClassName("bolded"); // list of all bolded classes
var tags = document.getElementsByTagName("li"); // list of all li tags
var sel = document.querySelector("#highlight"); // 1st element with given CSS selector
var sels = document.querySelectorAll("#highlight"); // all elements with given CSS selector


// bad practice:
// tag.style.color = "blue";
// tag.style.border = "1px solid red";
// tag.style.fontSize = "15px";
// tag.style.background = "yellow";
// tag.style.marginTop = "20px";

tag.classList.toggle("bullet-one"); // or remove, toggle

tag.textContent = "blah blah blah"; // change text in block
var foo = tag.innerHTML; // returns block including inner html tags

document.querySelector("a").setAttribute("href", "https://www.google.com");
var link = document.querySelector("a").getAttribute("href");

tag.addEventListener("mouseover", function() {tag.classList.toggle("bullet-one")});
document.querySelector("h1").addEventListener("click", function() {document.querySelector("h1").style.color="black";})