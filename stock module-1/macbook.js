let fs = require("fs");
let data = fs.readFileSync("D:/java script/java script/mac.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}




/*You have been given n integer values. Lets say the given values are a1, a2, a3, a4 ...

Each of these values represents the remaining lifespan of different macbooks. (Negative values denotes that the particular macbook has already expired.)

You need to find the total lifespan of the macbooks which are still functional.

Input Format:
First line denotes n, the number of inputs. The next n lines contains one integer in each line.

Output Format:
One integer denoting the result, as mentioned above.*/
let n=parseInt(readLine())
let macBook=0
for (let i=0;i<n;i++){
    let m=parseInt(readLine())
    if (m>0){
        macBook+=m;
    }
}
console.log(macBook)