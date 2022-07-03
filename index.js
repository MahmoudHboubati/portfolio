var els = document.getElementsByClassName("progress-indicator");

Array.prototype.forEach.call(els, function (el) {
  if (el.getAttribute("data-value")) {
    el.style.width = `${el.getAttribute("data-value")}%`;
  }
});

var circles = document.getElementsByClassName("circle");

Array.prototype.forEach.call(circles, function (el) {
  let value = el.getAttribute("data-value");
  let color = el.getAttribute("data-color");
  let bg = el.getAttribute("data-bg");
  if (value) {
    el.style[
      "background-image"
    ] = `conic-gradient(${color} ${value}%, ${bg} 0)`;
  }
});
