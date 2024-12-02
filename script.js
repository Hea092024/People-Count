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

let resetCount = 0;
function reset () {
  resetCount = 0;
  
  countEl.innerText = resetCount;
}
