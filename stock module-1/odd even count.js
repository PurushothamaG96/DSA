let n=parseInt(readLine())
let oddd=0
let evenn=0
for (let i=0;i<n;i++){
	let array=parseInt(readLine())
	if((array%2)===0){
		evenn+=1;
	}
	else{oddd+=1}
}
console.log(evenn)
console.log(oddd)