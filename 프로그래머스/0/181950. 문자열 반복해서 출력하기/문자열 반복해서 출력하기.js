const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
    const str = input[0];
    const n = Number(input[1]);
    const repeatedString = str.repeat(n);
    console.log(repeatedString);
    rl.close();
});