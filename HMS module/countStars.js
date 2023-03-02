const { count } = require("console");
let fs = require("fs");
let data = fs.readFileSync("./HMS module/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}






function countStar(n, str){    
    let countSta = new Map();
    let sum = 0
    for(let i = 0; i < n; i++ )
        if(countSta.get(str[i], 0) == undefined){
          countSta.set(str[i], 0)  
        }
        else{
           let temp = countSta.get(str[i]) + 1
           countSta.set(str[i], temp)
           sum = sum +temp
        }
        
    
        return sum
    }
    
    
    let testcase = parseInt(readLine())
    while(testcase--){
      let no_stars = parseInt(readLine())
      let string = readLine()
      console.log(countStar(no_stars, string))
    }