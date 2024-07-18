const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin, // введення зі стандартного потоку
  output: process.stdout, // виведення у стандартний потік
});

rl.on("line", (cmd) => {
  console.log(`You just typed: ${cmd}`);
});

rl.question("Як вас звати?", (answer) => {
  console.log(`Приємно познайомитися ${answer}`);
});
