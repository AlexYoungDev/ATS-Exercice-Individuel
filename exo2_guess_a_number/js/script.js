<button onclick="myFunction()">Try it</button>

function myFunction () {
let firstName = prompt("Quel est ton prénom ?");
let hello = "👋Bonjour" + firstName + "!";
document.body.innerHTML += '<h2> hello </h2>’
console.log (hello)
}