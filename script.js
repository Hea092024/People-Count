// document.getElementById("count").innerText = 5;
let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0
function increment() {
  count = count + 1
  countEl.innerText = count
  console.log("The button was clicked");

}
