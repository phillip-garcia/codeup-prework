"use strict";


var userName = ""

while (userName === "") {
	userName = prompt('What is your name?');
}

console.log(userName);



alert('Welcome ' + userName + "...");


var response = confirm('Do you like pizza ' + userName + "?");
if (response) {
    alert("ME TOO!!!");
} else {
	alert("What is wrong with you?");
}

