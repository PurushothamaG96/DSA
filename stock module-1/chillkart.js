let fs = require("fs");
let data = fs.readFileSync("C:/Users/anandnishant/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');
​
function readLine() {
    idx++;
    return data[idx-1].trim();
}
​
// Logic:
// 1. Maintain 3 counts - 1 for each input_number.count1, count2, count3. Initialize  to 0.
// 2. Read the first unread input of customer.
// 3. If the input is 0, print the 3 counts and end.
// 4. If the input is 1, increment count1.
// 5. If the input is 2, increment count2.
// 6. If the input is 3, increment count3.
// 7. Repeat steps 2 through 6 for all inputs.
​
let count1 = 0;
let count2 = 0;
let count3 = 0;
​
let choice = parseInt(readLine()); // init expression
​
while (choice != 0) {
    if(choice === 1) {
        count1 = count1 + 1;
    } else if (choice === 2) {
        count2 = count2 + 1;
    } else if (choice === 3) {
        count3 = count3 + 1;
    }
    choice = parseInt(readLine()); // step expression         
}
​
console.log(count1);
console.log(count2);
console.log(count3);