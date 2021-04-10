const chalk = require("chalk");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`What\'s your name?\n`, (name) => {
  readline.question(`What\'s your year of birth?\n`, (yob) => {
    const date = new Date();
    const age = date.getFullYear() - yob;
    readline.question(`What\'s your home town?\n`, (homeTown) => {
      readline.close();
      console.log(
        chalk`Thank you. Hello {red ${name}}, so you are {blue ${age}} year old and from {green ${homeTown}}.`
      );
    });
  });
});
