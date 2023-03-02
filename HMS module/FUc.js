const { count } = require("console");
let fs = require("fs");
let data = fs.readFileSync("./HMS module/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}




function uniqueChar(m, check){
  if(check.has(m)){
    let inc = check.get(m)+1
    check.set(m, inc )
  }
  else{
    check.set(m, 1)
  }
}


let n = parseInt(readLine())
for(k = 0; k < n; k++){
  let check = new Map()
  let char = readLine()
  
  for(let i = 0; i < char.length; i++){
    let m = char[i]
    
      uniqueChar(m, check)
  }

  let flag = false
  for(let i = 0; i < char.length; i++){
    if(check.get(char[i])== 1){
      console.log(i)
      flag = true
      break
    }
  }
  if(flag === false){
    console.log(-1)
  }


}

