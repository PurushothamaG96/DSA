let fs=require("fs")
let data=fs.readFileSync("./stock module-1/edit.txt","utf-8")
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
/*
Right to Left Diagonal
Write a function rightToLeftDiagonal which takes a matrix (as an array of arrays) 
and returns an array of numbers containing elements of the anti-diagonal of the given matrix.

Input
First line contains an integer (say m), which denotes the size of the matrix.
This is followed by m lines, each containing m space separated elements.

Output
m lines containing one element each.

Note
The code for reading input and printing output is already given as part of the template. 
You only need to write the function rightToLeftDiagonal.

Example
Input:
4
1 2 3 4
5 6 7 8
9 10 11 12
13 14 15 16

Output:
4
7
10
13

Explanation
Anti-Diagonal is the diagonal of a matrix that leads from top-right to bottom-left,
 here for the given square matrix the elements present in the anti-diagonal of the matrix are [4, 7, 10, 13].
*/
function rightToLeftDiagonal(matrix){
    let arr=[]
    let j = m-1
    for(let i = 0 ; i < m ; i++){
        arr.push(parseInt(matrix[i][j]))
        j = j-1
        
    }
    
    return arr
}



let m = parseInt(readLine());
let matrix = [];
for (let row = 0; row < m; row++) {
  let rowElements = readLine().split(" ");
  matrix.push(rowElements);
}
let result = rightToLeftDiagonal(matrix);

for (let i = 0 ; i < m ; i++) {
  console.log(result[i]);
}