const { count } = require("console");
const { getRandomValues } = require("crypto");
let fs = require("fs");
const { get } = require("http");
let data = fs.readFileSync("./HMS module/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}


class HopRacing{
    constructor(t, z){
        this.target = t
        this.reach = z
    }
    
    getRounds(hop){
        this.reach += hop
        if(this.reach == this.target){
            tracker = true
        }

    }
}

let friend1 = new HopRacing(10, 0)
let friend2 = new HopRacing(10, 0)
let n = parseInt(readLine())
let tracker = false
for(let i = 1; i <= n; i++ ){
    
    let line = readLine().split(" ").map(Number)
    if(line[0]== 1){
        friend1.getRounds(line[1])
    }
    else{
        friend2.getRounds(line[1])
    }

    if(tracker == true){
        console.log(line[0])
        break
    }

}