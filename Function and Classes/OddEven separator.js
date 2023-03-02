let fs=require("fs")
let data=fs.readFileSync("./stock module-1/edit.txt","utf-8")
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

function EvenOdd(arr){
    let Evenarr = []
    let Oddarr = []
    for (let i = 0; i < arr.length; i++){
        if(arr[i]%2 !== 0){
            Oddarr.push(arr[i])
        }
        else {
            Evenarr.push(arr[i])
        }
    }
    for (let i = 0; i < Evenarr.length; i++){
        Oddarr.push(Evenarr[i])
    }
return Oddarr
}

let arr = readLine().split(' ')
for ( let i = 0; i < arr.length; i++){
    arr[i] = parseInt(arr[i])
}
console.log(EvenOdd(arr))
