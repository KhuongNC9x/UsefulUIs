//CHARACTER COUNT FOR TEXTAREA INPUT
const textarea = document.querySelectorAll("textarea");
const submitBtn = document.querySelector("button");
const form = document.querySelector("form");
const counter1 = document.createElement("span");
const counter2 = document.createElement("span");
const labels = document.querySelectorAll("label");

counter1.innerHTML = "(0/300)";
counter2.innerHTML = "(0/300)";

labels[1].appendChild(counter1);
labels[2].appendChild(counter2);

textarea[1].setAttribute("maxLength", "300");
textarea[0].setAttribute("maxLength", "300");

function charCounter(e, whichCounter) {
  const target = e.target;
  const maxLength = target.getAttribute("maxlength");
  const currentLength = target.value.length;
  whichCounter.innerHTML = `(${currentLength}/${maxLength})`;
}
textarea[0].oninput = (e) => charCounter(e, counter1);
textarea[1].oninput = (e) => charCounter(e, counter2);
