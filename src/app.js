/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = ["before the class", "when I was sleeping", "while I was exercising", "during my lunch", "while I was praying"];

function randomIndex(arr) {
  let newIndex = Math.floor(Math.random() * arr.length);
  return arr[newIndex];
}

window.onload = function() {
  let whoElement = randomIndex(who);
  let actionElement = randomIndex(action);
  let whatElement = randomIndex(what);
  let whenElement = randomIndex(when);

  const newExcuse = `${whoElement} ${actionElement} ${whatElement} ${whenElement}`;

  document.getElementById("excuse").innerHTML = newExcuse;
};