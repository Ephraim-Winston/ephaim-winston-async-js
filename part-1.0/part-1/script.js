//Event handlers were discussed in the article 
//Callbacks (an event handler is a type of callback)
const btn = document.getElementById('button');
const form = document.getElementById('form');
const randNumDisplay = document.getElementById('randomNumberDisplay');
//Creating a random number generator using event listeners.
function randomNumber(e){
    e.preventDefault();
    const randomNumber = Math.floor(Math.random()*100)
    randNumDisplay.innerHTML = `Random Number: ${randomNumber}`
    console.log(randomNumber);
    return randomNumber;

}

form.addEventListener('submit', randomNumber);
//are you happy now github