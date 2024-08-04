let number = document.getElementById("num");

const increment = document.getElementById("incr");

const decrement = document.getElementById("dcr");

const reset = document.getElementById("reset");

// number.innerText = 99;
let counter = 0;

increment.addEventListener("click", () => {
  counter++;
  number.innerText = counter;
  if (counter > 0) {
    number.classList.remove("median");
    number.classList.add("greater-0");
  } else if (counter < 0) {
    number.classList.remove("median");
    number.classList.remove("greater-0");
    number.classList.add("less-0");
  } else if (counter == 0) {
    number.classList.remove("less-0");
    number.classList.remove("greater-0");
    number.classList.add("median");
  }
});

decrement.addEventListener("click", () => {
  counter--;
  number.innerText = counter;
  if (counter > 0) {
    number.classList.remove("median");
    number.classList.add("greater-0");
  } else if (counter < 0) {
    number.classList.remove("median");
    number.classList.remove("greater-0");
    number.classList.add("less-0");
  } else if (counter == 0) {
    number.classList.remove("less-0");
    number.classList.remove("greater-0");
    number.classList.add("median");
  }
});

reset.addEventListener("click", () => {
  counter *= 0;
  number.innerText = counter;

  number.classList.remove("less-0");
  number.classList.remove("greater-0");
  number.classList.add("median");
});
