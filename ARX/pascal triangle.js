let fs=require("fs")
let data=fs.readFileSync("./stock module-1/edit.txt","utf-8")
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

/*Pascal Triangle
Pascal’s triangle is a triangular array of the binomial coefficients. Write a function that takes an integer value N as input and prints Nth line of the Pascal’s triangle.
Following is the representation of a pascal triangle of depth 5
1
1 1
1 2 1
1 3 3 1
1 4 6 4 1
Refer to below link for more information
https://en.wikipedia.org/wiki/Pascal%27s_triangle
Input
You will be given N, depth of the traingle
Output
Print pascal triangle cofficients at depth N
Example
Input:
4
Output:
1
3
3
1
At depth 4 the elements are 1 3 3 1.
Submit a solution*/

// let n = parseInt(readLine())//4
// let res = []
// let fin
// res.push([1])//res = [1]
// for (let i=1; i<n; i++){// 1<5=>2<4=>2<4
//   let list = [];
//   list.push(1)// list = [1]
//   for (let j = 1; j <res [i-1].length; j++ ){//1!<0=>1<2=>1<3
   
//     let sum =res[i-1][j-1] + res [i-1][j]//i=2 j=2---[1][1]=2+1
//     list.push(sum)//[1,2,3]
//   }
//   list.push(1)//[1, 2,1]
//   res.push(list)//=[1][1,1][1, 2, 1]
//   fin = list
 
// }
// for(let i = 0; i < fin.length; i++){
//   console.log(fin[i])
// }
var generate = function(numRows) {
  var res=[]
  if(numRows === 0) return res
  res.push([1])
  for( let i=1; i < numRows; i++){
      var arr = []
      arr.push(1)
      for(let j = 1; j < res[i-1].length; j++ ){
          let sum = res[i-1][j-1] + res[i-1][j];
      arr.push(sum)
  }
  arr.push(1)
  res.push([...arr])

  }  
  return res;  
};
let numRows = parseInt(readLine())
console.log(generate(numRows))