n = 30;
let arr = [];
for (let i = 1; i <= n; i++) {
    arr.push(0);
}
for (let i = 2; i <=n;i++){
    if(arr[i]===0){
        console.log(i)
        for(j=2*i;j<=n;j=j+i){
            arr[j]=1
        }
    }
}
