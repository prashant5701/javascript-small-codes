const prompt = require('prompt-sync')();

let a = Math.floor((Math.random() * 100))

// console.log(a)
console.log('-----------    Number guessing game : (Guess the number between 0 to 99) ------------ \n \t \tTo quit game in between press 101\n \n ');

let count = 100;
let num = 0;
// console.log(a);
while (num != 101) {

    num = prompt('Guess the number : ')
    if (a == num) {
        console.log('you entered the correct number');
        console.log(`\n your score : ${count} \n `);
        break;
    }
    else {
        if (a>num){
        console.log(`you entered wrong number enter again , number is greater than ${num} `);}
        else {
            console.log(`you entered wrong number enter again , number is less than ${num} `);}
        }
    count--;
}



