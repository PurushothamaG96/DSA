const { count } = require("console");
const { getRandomValues } = require("crypto");
let fs = require("fs");
const { get } = require("http");
let data = fs.readFileSync("./HMS module/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}


/*

Wild Card
Given a binary pattern that contains ‘?’ wildcard character at few positions, find all possible combinations of binary strings that can be formed by replacing the wildcard character by either 0 or 1.

Note: The resultant strings should be returned in such a way, so that they look like a sorted binary numbers!

Input
Single line input denoting the given string.

Output
Each line containing one string, in the given format.

Example
Input:

1?11?00?1?
Output:

1011000010
1011000011
1011000110
1011000111
1011100010
1011100011
1011100110
1011100111
1111000010
1111000011
1111000110
1111000111
1111100010
1111100011
1111100110
1111100111

*/

function print(string,i){
    if(i===string.length){
    console.log(string.join("")+"\n");//1?11?00?1?
    return;
    }
if(string[i]==="?"){   //true i=1
    string[i]="0";     // 1011?00?1?
    print(string,i+1)
    string[i]="1";
    print(string,i+1)
    string[i]="?";
}
else{
    print(string,i+1);// 0
}
}
let string=readLine().split("");
print(string, 0);

// function wildCard(b, i){
//     if(i == b.length){
//         console.log(b.join("") + "\n")
//         return;
//     }

//     if(b[i]==="?"){
//         b[i]="0";
//         wildCard(b, i+1)
//         b[i]==="1";
//         wildCard(b, i+1)
//         b[i] ="?";

//     }
//     else{
//         wildCard(b, i+1)
//     }
// }


// let binary = readLine().split("")
// wildCard(binary, 0)


function Print(Str){
 
    let q = []
    q.push(Str)
 
    while (q.length > 0){
        let Str = q[0]
        let index = Str.indexOf('?')
        if(index != -1)
        {
         
            Str = Str.replace(Str[index] , '0')
            q.push(Str)
 
            Str = Str.replace(Str[index] , '1')
            q.push(Str)
        }
 
        else
        {
            console.log(Str +"\n")
        }
 
        q.shift()
    }
}
let Str = readLine()
Print(Str)
 