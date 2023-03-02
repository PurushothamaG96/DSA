let num=readline().split(" ")
let target=parseInt(readLine())
let sum=0
let output=[]
for(let i=0;i<num.length;i++){
    let n=parseInt(num[i])
    for(let j=i+1;j<num.length;j++){
        let m=parseInt(num[j])
        sum=n+m
        if(sum==target){
            output.push(i, j)
break;
        }
    }
}