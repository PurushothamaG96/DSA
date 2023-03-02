let fs = require("fs");
let data = fs.readFileSync("d:/text.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
/* a car travelling from hyderabad to bengaluru and the distance is to 600km,
 lets asume average speed of the car and calucalate how much car takes time.*/
let speed=parseInt(readLine()); //lets asume 80 is the average car speed
let timeTravel=600/speed//distance=speed*time
console.log(timeTravel)