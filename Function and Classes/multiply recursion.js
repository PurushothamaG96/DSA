let fs=require("fs")
let data=fs.readFileSync("./stock module-1/edit.txt","utf-8")
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}



/* input
first line n number of testcase
second line n number of lines muliple and they are close together
output
n number of row multiple input product

input
2
12345
356045873
output
120
0
*/

let testCase = parseInt(readLine())
let index = 0
function RecursiveMultiple (index){

    let product = 1
    let i = 0
    if(index < testCase){
        let arr = readLine().split("")
        function NestedMultiple(i){
            if(i < arr.length){
                product *= parseInt(arr[i])
                i++
                NestedMultiple(i)
            }
            else{
                console.log(product)
                return
            }

        }
        NestedMultiple(i)

    }
    else{
        return
    }
    index++
    RecursiveMultiple(index)
}
RecursiveMultiple(index)