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
// Logic
// 1. Read the number of applications. 
// 2. Maintain a count of eligible applications. Initialize it to 0.
// 3. Read the first unread applicant age, and compare it to 18. 
// 4. If the age is greater than 18, increase the count of eligible applications by 1.
// 5. If not greater, continue to the next application.
// 6. Repeat steps 3 - 5 for all applications.
​
let size = parseInt(readLine());
let eligibleCount = 0;
​
for(let num = 1; num <= size; num = num + 1) {
    let age = parseInt(readLine());
    if(age <= 18) {
        continue;
    }
    eligibleCount = eligibleCount + 1;
}
​
console.log(eligibleCount);