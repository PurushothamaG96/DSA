let fs = require("fs");
let data = fs.readFileSync("./stock module-1/edit.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
/*Image Icon Match
You are given a 1D image. The image is a sequence of pixel values. 
You are also given an icon of a particular size. The icon is a sequence of 2 pixels.
 Find the number of times this icon appears in the image.

Input
First line contains n, the number of pixels in the image. 
This is followed by n lines, each containing one positive integer denoting a pixel,
 j, 0 <= j <= 255. This is followed by m, the number of pixels in the icon.
  This is follwoed by m lines, each containing one positive interger denoting a pixel k, 0 <= k <= 255.

Output
An integer i i >= 0, denoting the number of times the icon appears in the image.

Example
Input:

10
7
27
31
8
9
10
25
8
9
11
2
8
9
Output:

2
The first line is 10 i.e. 10 pixels in the given image 7, 27, 31, 8, 9, 10, 25, 8, 9, 11 
is the given image After this, the line contains 2, i.e. 2 pixels in the icon 8, 9 is the given icon.
 8, 9 appears twice in the image. So 2 is the answer.*/

 /*let n=parseInt(readLine());
 let arr=[];
 for(let i=0;i<n;i++){
    arr[i]=parseInt(readLine())
 }
 let p=parseInt(readLine())
 let repeat=[] 
 for(let i=0;i<p;i++){
    repeat[i]=parseInt(readLine())
 }
 if (p===0){
    console.log(0)
 }
 else if(p===1){
    let count=0
    for(let i=0;i<p;i++){
        if(repeat[0]===arr[i]){
            count++
        }
 }
 console.log(count)
}
else{
    count=0
    for(let i=1;i<n;i++){
        if(arr[i]===repeat[1]&& arr[i-1]===repeat[0]){
            count++
        }
    }
    console.log(count)
}*/
let n = parseInt(readLine())
let arr = []
let pix = []
let temp=[]
let count=0
for (let i = 0; i < n; i++){
    arr.push(parseInt(readLine()))
}
let psize=parseInt(readLine())
for (let j = 0; j < psize; j++) {
    pix.push(parseInt(readLine()))
}

for (let i = 0; i < n; i=i+1) {
    if (pix[0] === arr[i]) {
          
        for (let j = i; j < i+psize ; j++) {
            temp.push(arr[j])
        
        }
        let isEqual = JSON.stringify(temp) === JSON.stringify(pix);
        if (isEqual === true) {
            count++
            temp=[]
       }
        }
        
    }
console.log(count)
 

 