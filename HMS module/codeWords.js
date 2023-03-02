const { count } = require("console");
let fs = require("fs");
let data = fs.readFileSync("./HMS module/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}


/*
Code Words
Description
International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.

For convenience, the full table for the 26 letters of the English alphabet is given below:

[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cab" can be written as "-.-..--...", (which is the concatenation "-.-." + ".-" + "-..."). We'll call such a concatenation, the transformation of a word.

Return the number of different transformations among all words we have.

Input format
First line contains a positive integer n, denoting the number of test cases. It is followed by n lines. Each of the n lines contains space separated words.

Output format
n lines containing the number of different transformations among all words we have.

Sample input
1
gin zen gig msg
Sample output
2
Explanation
The transformation of each word is:

"gin" -> "--...-."

"zen" -> "--...-."

"gig" -> "--...--."

"msg" -> "--...--."

There are 2 different transformations, "--...-." and "--...--.".

Note
The length of words will be at most 100000

Each words[i] will have length in range [1, 12].

words[i] will only consist of lowercase letters.
*/

// let codes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

// let map = new Map()
// function codeWords(str){
//     for(let i = 0; i < str.length; i++){
//        let words = str[i]
//        let code = ""

//        for(let j = 0; j < words.length; j++){
//         let temp = words.charCodeAt(i)-97
//         code = code + codes[temp]
//        }
//        if(map.has(code)){
//         map.set(code, map.get(code) + 1)
//        }
//        else{
//         map.set(code, 1)
//        }
//     }
    
//     let unique = 0

//     for (const x of map.values()) {
//         if(x === 1){
//             unique += 1
//         }
        
//     }
//     console.log(unique)
// }


// let n = parseInt(readLine())
// while(n--){
//     strArray = readLine().split(" ")
//     codeWords(strArray)
// }

// Simran Jyot Singh Lall22:40
// lallsimmu80@gmail.com
// Deepak Rawat22:40
// deepakrawat3738@gmail.com
// You22:40
// purushothamachar96@gmail.com


let CONFIG = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..',
  ];
  
  var uniqueMorseRepresentations = function (words) {
    let output = 0;
    const hashmap = {};
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      let code = '';
      for (let j = 0; j < word.length; j++) {
        code += CONFIG[word.charCodeAt(j) - 97];
      }
  
      if (hashmap[code] === undefined) {
        output++;
        hashmap[code] = i;
      }
    }
  
    return output;
  };
  let n = parseInt(readLine());
  while (n--) {
    let words = readLine().split(' ');
    console.log(uniqueMorseRepresentations(words));
  }