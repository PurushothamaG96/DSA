let fs = require("fs");
let data = fs.readFileSync("./stock module-1/edit.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

/*Shuffle array
Description
Given an array consisting of 2n elements in the form [x1, x2, ..., xn, y1, y2, ..., yn],
 suffle the array into [x1, y1, x2, y2, ... , xn, yn]. Assume that n is never 0.

Input format
First line contains a positive integer, denoting n. It is followed by 2n lines. 
Each line contains one integer.

Output format
2n lines where each line contains one element of the shuffled array.

Sample input
3
2
5
1
3
4
7
Sample output
2
3
5
4
1
7
Explanation
First line is 3, i.e. Following 6 lines are the elements of the array.
The first 3 lines contains the first half of the array and the 2nd set of 3 
elements contain the second half of the array.
First 2 lines of output will be first element of first half, 
first element of second half so the first 2 lines of the output are 2 and 3.
Next 2 lines of output will be second element of first half and second element of second half, 
so the next 2 lines of output will be 5 and 4
Next 2 lines of output will be third element of first half and third element of second half, 
so the next 2 lines of output will be 1 and 7*/

// let size=parseInt(readLine())
// let arr=[];
// for(let i=0;i<2;i++){
// arr.push([])
//     for(let j=0;j<size;j++){
//         arr[i][j]=parseInt(readLine())
//         // console.log(arr[j][i])
//     }
// }
// for(let i=0;i<2;i++){
//     for(let j=0;j<size;j++){
//         console.log(arr[j][i])
// }
// }

let n=parseInt(readLine())
let arr=[];
let brr=[]
for(let i=0;i<n;i++){
    arr[i]=parseInt(readLine())
}
for(let i=0;i<n;i++){
    brr[i]=parseInt(readLine())
}
for(let i=0;i<n;i++){
    console.log(arr[i])
    console.log(brr[i])
}