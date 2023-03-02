let num=[2,9,12,15]
let target=9;
let count=0
let output=[]
for(let i=0;i<num.length;i++){
    count+=num[i]
    output.push(i)
    if(count===target){
        

    }
    else if(count>target){
        break;
    }
}
console.log(output)