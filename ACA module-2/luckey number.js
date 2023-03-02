let fs=require("fs")
let data=fs.readFileSync("./stock module-1/edit.txt","utf-8")
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

/*Lucky Number
Given a sorted array of n integers, a lucky integer is an integer which has a frequency in the array equal to its value.

Return a lucky integer in the array. If there is no lucky integer return -1.

If you have multiple lucky integers, please return the first lucky integer in the array (lucky number with the least index).

Input
First line contains a positive integer n, denoting the number of elements in the array. 
It is followed by n lines. Each line contains one integer denoting an element in the array.

Output
One line specifying the lucky integer in the array

Example
Input:

4
2
2
3
4
Output:

2
Explanation
First line is 4, i.e. 4 elements in the array. The array is [2,2,3,4]. 
We can see that number 2 is repeating 2 times hence it is the lucky number which is our output*/

// var n = parseInt(readLine())
// let arr=[];
// let count=0
// for(let i=0;i<n;i++){
//     let m= parseInt(readLine())
//     arr.push(m)
// }
// const brr=[]
// for (let i=0;i<n;i++){
//     count=1
//     for(let j=i+1;j<n;j++){
//         if (arr[i]===arr[j]){
//             count+=1;
//             brr.push(arr[i])
//             if(arr[j]===arr[n-1])
//         }
        
//     }
// }
// console.log(brr) 


// let num_elems = parseInt(readLine())
//    let arr=[]
//     for(let i=1;i<num_elems;i++){
//       let tmp = parseInt(readLine())
//        arr.push(tmp)
//       }
//      console.log(findLuckyNumber(arr))

// function findLuckyNumber(arr){
  
//     let freq =1
//     for(let i=1;i<arr.length;i++){
//       if (arr[i] === arr[i-1]){
//          freq +=1
//       }
//        else{
//           if (freq ==arr[i-1]){
//              return arr[i-1]
//           } 
               
//            freq =1
//         } 
            
//     }
    
//     if (freq == arr[-1]){
//         return arr[-1]
      
//     }
        
//     return -1
      
//     }
        
  
// ------------------------------------------after----------------------------------------------
// let n=parseInt(readLine());
// let arr=[];
// for(i=0;i<n;i++){
//    let temp=parseInt(readLine());
//    arr[i]=temp;
// }
// let freq=1
// let output=-1
// for(let i=1;i<n;i++){
//    if(arr[i]===arr[i-1]){
//       freq+=1;
//    }
//    else if(freq===arr[i-1]){
//       output=arr[i-1]
//       break;
//    }
   
// }
// console.log(output)
// let n = parseInt(readLine());
// let flag = -1;
// let c= 1;
// let arr = [];
// for (let i = 0 ;i < n ; i++){
// 	arr.push(parseInt(readLine()));
// if ( arr[i] == arr[i-1]){
// 	c++
// }if ( c == arr[i-1]){
// 	flag = arr[i-1]
// 	break;
// }
// }if (arr[0] == 1 && arr[1] != 1 ){
// 	flag = 1 
// }console.log(flag);
let n=parseInt(readLine());
let arr=[];
for(i=0;i<n;i++){
   let temp=parseInt(readLine());
   arr[i]=temp;
}
let freq=1
let output=-1
for(let i=1;i<n;i++){
   if(arr[i]===arr[i-1]){
      freq+=1;
   }
   else if(freq===arr[i-1]){
      output=arr[i-1]
      break;
   }else {
    count = 1;
   }
}
console.log(output)