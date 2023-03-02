let fs=require("fs")
let data=fs.readFileSync("./stock module-1/edit.txt","utf-8")
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// let n=parseInt(readLine());
// let dict=["L", "M", "U", "L", "M", "U", "SD","SU"];
// for(let i=0;i<n;i++){
//     let m=readLine().split(" ");
//     let totalSeat=parseInt(m[0])
//     let berth=parseInt(m[1])
//     if(berth>0&&berth<=totalSeat){
//         console.log(dict[((berth-1)%8)])
//     }
//     else{
// 		console.log("Invalid")

//     }
// }
let testcase=parseInt(readLine())
let seats = ["L", "M", "U", "L", "M", "U", "SD", "SU"]
for( let i=0;i<testcase;i++){
    let input=readLine().split(" ")
    let numofberths =parseInt(input[0])
    let seat = parseInt(input[1])
    if(seat>0 && seat<=numofberths){
        console.log(seats[(seat-1)%8])
    }
    else{
        console.log("Invalid")
    }


}