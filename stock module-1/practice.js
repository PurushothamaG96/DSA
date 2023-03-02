
let fs = require("fs");
let data = fs.readFileSync("./stock module-1/edit.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}


// let input = readLine()
// let array = input.toUpperCase()
// let forword = array.split()
// let reverseArray = []
// for(let index = forword.length-1; index >= 0 ; index--){
//     reverseArray.push(forword[index])
// }
// if(JSON.stringify(reverseArray) == JSON.stringify(forword)){
//     console.log("YES")
// }
// else{
//     console.log("NO")
// }


// let input = readLine()
// let array = input.toUpperCase;
// for(let i=0, j = array.length)


// let input = readLine().split(" ")
// let result = 0;
// let resultchar = undefined
// let count = 0;
// let countchar = undefined
// if (input.length === 0){
//     console.log(0)
// }
// else{
//         for(let i = 0; i < input.length; i++){
//         count = input[i].length
//         countchar = input[i]
//         if (count > result){
//             result = count
//             resultchar = input[i]
//         }
        
//     }
// }
// if(count > result){
//     result = count
//     resultchar = countchar
//     console.log(result)
// }
// else if ( count < result){
//     console.log(result)
// }
// else if(result == count){
//     console.log(result)
// }


// function checkPalindrome(string) {  
//     let len = string.length;
//     for (let i = 0; i < len / 2; i++) {
//         if (string[i] !== string[len - 1 - i]) {
//             return 'NO';
//         }
//     }
//     return 'YES';
// }
// let string=readLine();
// let sstring=string.toUpperCase();
// console.log(checkPalindrome(sstring));




// let input = readLine().split(" ")
// let result = 0;
// let count = 0;
// if (input.length === 0){
//     console.log(0)
// }
// else{
//         for(let i = 0; i < input.length; i++){
//         count = input[i].length
//         if (count > result){
//             result = count
//         }
        
//     }
// }
// if(count >= result){
//     result = count
//     console.log(result)
// }
// else if ( count < result){
//     console.log(result)
// }


// function Palindrome(array) {  
//     for (let i = 0; i < array.length / 2; i++) {
//         if (array[i] !== array[array.length- 1 - i]) {
//             return 'NO';
//         }
//     }
//     return 'YES';
// }
// let input = readLine();
// let upperInput = input.toUpperCase();
// console.log(Palindrome(upperInput))





// compress string

// tale how much line need to take
// read input by loop
//comapare index-1 to index by nested loop
// print output aswell as loop running


// function compressString(number){
//     for(let i=0; i<number; i++){
//         let count = 1
        
//         let string = readLine()
//         let empty = string[0]
//         for(let j = 1; j < string.length; j++ ){
//             if(j == string.length-1 && count > 1){
//                 count+=1
//                 empty = empty + count
//             }
//             else if(string[j] == string[j-1]){
//                 count +=1                
//             }
//             else if(string[j]!= string[j-1] && count > 1 && j < string.length-1){ 
//                 empty = empty + count + string[j]
//                 count = 1
//             }
//             else if(count==1 && string[j]!= string[j-1]){
//                 empty = empty + string[j]
//             }
            
//         }
//         console.log(empty)
//     }
// }


// let number = parseInt(readLine())
// compressString(number)




//python

// function compress(st){
//     let res = st[0]
// 	let count =1
// 	let i = 1
// 	while (i <st.length){
// 		if (st[i] == st[i-1])
// 			count +=1
// 		else{
//             if (count > 1){
//                 res += str(count)
// 			res += st[i]
// 			count =1
// 		    i += 1
//             }
				
//         }
			
//     }
// 	if (count > 1){
//         res += str(count)
// 	print(res)

//     }
		
// }
	
// let t = parseInt(readLine())
// for (let i = 0; i < t ; i++){
//     let string = readLine()
//     compress(string)
// }



// let k = parseInt(readLine())
// let n = parseInt(readLine())
// let listA = []
// result = 0
// for(let i = 0; i < n; i++){
// 	listA.push(parseInt(readLine()))
// 	if(listA[i] == k){
// 		result = i
// 	}
	
// }
// if(result > 0){
// 	console.log(result)
// }
// else{
// 	console.log(-1)
// }


// let nameString = readLine().split(" ")
// let hapRating = readLine().split(" ")
// sum = 0
// for(let i = 0; i < nameString.length; i++){
//     sum =sum + parseInt(hapRating[i])
// }
// let avarage = sum/nameString.length
// if(avarage < 5){
//     console.log('They fired me')
// }
// else{
//     console.log( 'I still have a job' )
// }




// function compressString(string){
//     let count = 0
//     let result = string[i]
//     for(let i=0; i<string.length; i++){
//         if(string[i] === string[i-1]){

//         }
//     }
// }

// let number = parseInt(readLine())
// for(let i = 0; i < number; i++){
//     let string = readLine()
//     compressString(string)
// }

function compressString(str) {
    let temp = ''
    let count=1
    for (let i = 0; i < str.length; i++){
        if (str[i - 1] != str[i]) {
            if (count > 1  ) {
                temp=temp+(count)
                count=1
            }
            temp=temp+(str[i])
        } else {
            count=count+1
        }
        if (i == str.length-1 && count>1) {
            temp=temp+(count)
        }
    }

    return temp
}
let testCase = parseInt(readLine())
for(let i = 0; i < testCase; i++) {
    let string = readLine().split("")
     console.log(compressString(string))
}








