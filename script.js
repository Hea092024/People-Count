// document.getElementById("count-el").innerText = 5

// change the count-el in the HTML to reflect the new count

// camelCase
let countEl = document.getElementById("count-el");
let count = 0;
// console.log(countEl);

// increment adds a count
function increment() {
  // count++
  count = count + 1;
  countEl.innerText = count;
}

// function save() {
//   console.log(count);
// }


function reset () {
  count = 0;
  
  countEl.innerText = count;
}

