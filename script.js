// document.getElementById("count-el").innerText = 5

// change the count-el in the HTML to reflect the new count

// camelCase
let countEl = document.getElementById("count-el");

console.log(countEl);

let count = 0;

function increment() {
  count++
  countEl.innerText = count;
}

function reset () {
  count = 0;
  
  countEl.innerText = count;
}
