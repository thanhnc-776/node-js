var name = prompt(`What\'s your name?`, "20");
var yob = prompt(`What\'s your year of birth?`);
var homeTown = prompt(`What\'s your home town?`);
var date = new Date();
var age = date.getFullYear() - yob;
console.log(
  "Thank you. Hello " +
    `%c${name}%c` +
    ", so you are " +
    `%c${age}%c` +
    " year old and from " +
    `%c${homeTown}.`,
  "color: blue",
  "color: none",
  "color: green",
  "color: none",
  "color: red"
);
