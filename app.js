// function increment() {
//   var number = Number(document.getElementById("number").innerHTML);
//   document.getElementById("number").innerHTML = number + 1;
// }

let increment = document.querySelector("#increment");
let decrement = document.querySelector("#decrement");
let number = document.querySelector("#number");

let counter = 0;

increment.addEventListener("click", () => {
  counter++;
  number.innerHTML = counter;
});
decrement.addEventListener("click", () => {
  counter--;
  number.innerHTML = counter;
});
