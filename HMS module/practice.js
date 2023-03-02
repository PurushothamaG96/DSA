
// let fs = require("fs");
// const { receiveMessageOnPort } = require("worker_threads");
// let data = fs.readFileSync("./HMS module/input.txt", 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//     idx++;
//     return data[idx - 1].trim();
// }



// let [n, m] = readLine().split(" ").map(Number)
// let matrix = []
// for(let i = 0; i < n; i++){
//   arr = readLine().split(" ").map(Number)
//   matrix.push(arr)
// }

// let [left,right,top,bottom] = readLine().split(" ").map(Number)

// let res = []
// for (let j = top-1; j < bottom; j++){
//   let temp = []
//   for(let k = left-1; k < right; k++){
//     temp.push(matrix[j][k])
//   }
//   res.push(temp)
// }
// for(let m = 0; m < res.length; m++){
//   console.log(...res[m])
// }
  
// for(let m = 0; m < res.length; m++){
//   console.log(...res[m])
// }

// function recPrint(m, n, mat){
  
//   if(m == n){
//     console.log(m)
//     return mat
//   }
//   else{
//     console.log(m,"")
//     m+=1
//     recPrint(m, n, mat)
//   }
// }
  

// let n = parseInt(readLine())
// while(n--){
//   let m, n = readLine().split(" ").map(Number)
//   let mat = []
//   recPrint(m, n, mat)
//   for(i = 0; i < mat.length; i++){
//     console.log(...mat[i])
//   }
// }

// let [n, m] = readLine().split(" ").map(Number)
// let matrix = []
// for(let i = 0; i < n; i++){
//   arr = readLine().split(" ").map(Number)
//   matrix.push(arr)
// }
// let [left,right,top,bottom] = readLine().split(" ").map(Number)
// let res = []
// for (let j = top-1; j < bottom; j++){
//   let temp = []
//   for(let k = left-1; k < right; k++){
//     temp.push(matrix[j][k])
//   }
//   res.push(temp)
// }
// for(let m = 0; m < res.length; m++){
//   console.log(...res[m])
// }


// let array
//  function betweenNumbers(n, m) {
//      if (n > m) {
//          return console.log(...array)
//      }
//      else {
//          array.push(n)
//          betweenNumbers(n + 1, m)
//      }
//  }
//  let n = parseInt(readLine())
//  for (let i = 0; i < n; i++) {
//      let arr = readLine().split(" ")
//      let n = parseInt(arr[0]);
//      let m = parseInt(arr[1])
//      array = []
//      betweenNumbers(n, m)
//  }

// function print(p, q, arr){
//   if(p == q){
//     arr.push(p)
//     return console.log(...arr)
  
//   }
//   else{
//     arr.push(p)
//     p += 1
//     print(p, q, arr)
//   }
// }

// function recu(i, n){
//   if(i == n){
//     return
//   }
//   else{
//     let array = []
//     let [p, q] = readLine().split(" ").map(Number)
//     print(p, q, array)
//     i += 1
//     recu(i, n)
//   }
  
// }


// let n = parseInt(readLine())
// let i = 0;
// recu(i, n)




