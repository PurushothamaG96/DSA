const { count } = require("console");
let fs = require("fs");
const { stringify } = require("querystring");
let data = fs.readFileSync("./HMS module/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}





// function substring(st){
//     let array = [st[0]]
//     let count = 1;
//     let result = 0
//     for(let i = 1; i < st.length; i++){
//         for(let j = 0; j < array.length; j++){
//             if(st[i]==array[j]){
//                 array = []
//                 array = [st[i]]
//                 if(result < count){
//                     result = count
//                     count = 1

//                 }
//                 else{
//                     count = 1
//                 }
                
                
//             }
//             else{
//                 array.push(st[i])
//                 console.log(array)
//                 count+=1
//             }
//         }
//         if((st.length - result) < result){
//             break
//         }
//     }
//     return result
// }



// let testcase = parseInt(readLine())
// while(testcase--){
//     let string = readLine().split("")
//     if(string.length==0){
//         console.log(0)
//     }
//     else{
//         console.log(substring(string))
//     }
    
// }
function Longest(st){
    let occurance = new Array(256).fill(-1)
    let start = 0
    let longest = 0
    for(let i = 0; i < st.length; i++){
        if(occurance[st.charCodeAt(i)] !== -1){
            start= Math.max(start, 1+ occurance[st.charCodeAt(i)])
            longest = Math.max(longest, i-start+1)

        }
        else{
            start = Math.max(start, 0)
            longest = Math.max(longest, i-start+1)
        }
        occurance[st.charCodeAt(i)] = i
    }
    return longest
}
let n = parseInt(readLine())
for(let i = 0; i < n; i++ ){
    let st = readLine()
    console.log(Longest(st))
}
