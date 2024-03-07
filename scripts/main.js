// Image switcher code

let myImage = document.querySelector('img');

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('who get a rick roll this time ?.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'hope you like this times rick roll, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'hope you like this times rick roll, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}