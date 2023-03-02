/*let num=346;
let sum=0;
while(num>0){
    let rem=num%10;//8
    sum=sum+rem;
    num=parseInt(num/10);
}
console.log(num);*/


// nim game
/*let n=38
let sum=0

for(let i=n;i>=10;i=sum){
    let rem=n%10
    sum=sum+rem
    let divi=parseInt(n/10)
    sum=divi+sum
}
console.log(i)*/




/*
let n=3
if(n==4){
    console.log("false");

}
else if(n<=3){
    console.log("true");
}

let num=27
for(let i=1;i<=20;i++){
    sq=(i**3)
    if(num===sq){
        console.log("true");
    }
    else{
        console.log("false");
    }
}
*/
let n=125
function isFloat(n) {
    if (
      typeof n === 'number' &&
      !Number.isNaN(n) &&
      !Number.isInteger(n)
    ) {
      return false;
    }
  
    return true;
  }
  let qr1=n**(1/3)
  
  console.log(isFloat(qr1))




