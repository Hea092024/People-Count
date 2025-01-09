// document.getElementById("count-el").innerText = 5

// change the count-el in the HTML to reflect the new count

// camelCase
let countEl = document.getElementById("count-el");
let count = 0;
let saveEl = document.getElementById("save-el");
let resetSave = document.getElementById("resetSave");
// console.log(countEl);

// increment adds a count
function increment() {
  count++;
  // count = count + 1;
  countEl.textContent = count;
}

function reset() {
  count = 0;
  countEl.textContent = count;
}

function save() {
  saveCount = count + " - ";
  saveEl.textContent += saveCount;
}

function resetSavedText() {
  saveEl.textContent = "Previous Entires";
}
