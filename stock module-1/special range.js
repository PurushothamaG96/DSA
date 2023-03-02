
/*Special Range
Given a range, as [m, n] both inclusive, print all non-negative integers in the range.

Input
First line contains an integer which is starting value of range, say m

Second line contains an integer which is ending value of range, say n

Output
Print all non-negative integers in that range. One integer per line.

If no such integers exist, print -1.*/
var m=-5
var n=4
if (n<0){
	console.log(-1);
}
else if(n>0){
	for(var i=0;i<=n;i++){
	console.log(i);
	}
}
	
