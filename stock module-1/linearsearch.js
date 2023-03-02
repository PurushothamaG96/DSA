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
// Templated code. No change
​
// Logic
// 1. Read the query integer.
// 2. Read the size of the list.
// 3. Maintain an initial response of Not Present.
// 4. Read one element and compare it to the query.
// 5. If it matches, print "Present" and end.
// 6. If not, repeat steps 3-5 for every element.
​
let query = parseInt(readLine());
let size = parseInt(readLine());
let response = "Not Present";
​
for(let i=0; i<size; i = i+1) {
    let element = parseInt(readLine());
    if(element === query) {
        response = "Present";
        break;
    }
}
console.log(response);