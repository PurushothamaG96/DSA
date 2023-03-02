//How to iterate an array
//let students = ["Aashish", "Chirag", "harsh", "Vivek"];
//for (let idx = 0; idx < students.length; idx++) {
//    console.log(students[idx]);
//}
//    N -> check if N is prime or not.
//first prime no: 2
//Algorithm
//Iterate index from 2 to N - 1 and check if number is divisible by idx.
//if number is divisible break from loop and print number is not prime
//otherwise number is prime.
//let N = 11;
//if (N == 0 || N == 1) {
//    console.log("number is not prime");
//}
//let idx = 2;
//for (; idx <= N - 1; idx++) {
//    if (N % idx == 0) {
//        console.log("Number is not prime");
//        break;
//    }
//}
//if (idx == N) {
//    console.log("Number is prime");
//}
//You have given a number N.And you have to print all prime numbers less than N.
//1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
//1 0 0 0 0 0 0 0 0  0  0  0  0  0  0
//number = 2
//1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
//1 0 0 1 0 1 0 1 0  1  0  1  0  1  0
//number = 3
//1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
//1 0 0 1 0 1 0 1 1  1  0  1  0  1  1
//number = 4
//1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
//1 0 0 1 0 1 0 1 1  1  0  1  0  1  1
//number = 5
//1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
//1 0 0 1 0 1 0 1 1  1  0  1  0  1  1
//number = 6
//2 3 4 5 6 7 8 9 10 11 12 13 14 15
//0 0 1 0 1 0 1 1  1  0  1  0  1  1
//number = 14
//Algorithms
//1. Intialize an array of size N and make all elements as zero, exceptionally make the value of index 1 as 1.
//(because 1 is not prime)
//2. Iterate from 2 to N - 1 only for prime numbers and in each iteration update value in array for indexes as mulitple value of iteration number.
//3. print all numbers from 1 to N for which values in array is zero.
//Version1
//N = 30;
//let arr = [0];
//for (let i = 1; i <= N; i++) {
//    arr.push(0);
//}
//arr[1] = 1;
//for (let i = 2; i <= N -1; i++) {
//    //arr[i * 2] = 1; arr[i * 3] = 1;
//    //arr[4]=1,        arr[6] = 1,
//    for (let j= 2*i; j <=N ;j=j+i) {
//        arr[j] = 1;
//    }
//}
//for (let i = 1; i <= N; i++) {
//    if (arr[i] == 0) {
//        console.log(i);
//    }
//}
//N= 30
//i = 2
//j = 4=> arr[4] = 1, arr[6] = 1; arr[8] = 1, arr[10] = 1;....arr[30] = 1;
//i = 3
//j = 2 * i = 6
//j = j + i = 9
//j = j + i = 12;
//j = j + i = 15;
//Version2
N = 30;
let arr = [];
arr.push(0)
for (let i = 1; i <= N; i++) {
    arr.push(0);
}
arr[1] = 1;
for (let i = 2; i <= N - 1; i++) {
    if (arr[i] == 0) {
        console.log(i);
        for (let j = 2 * i; j <= N; j = j + i) {
            arr[j] = 1;
        }
    }
}
//2 -> 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30
//3 -> 6, 9, 12, 15, 18, 21, 24, 27, 30
//4 -> 8, 12, 16, 20, 24, 28 -> not required
//5 -> 10, 15, 20, 25, 30
//6 -> 12, 18, 24, 30 -> not required 
//7 -> 14, 21, 28
//8 -> 16, 24 -> not requird
//9 -> 18, 27 -> not required
////////////////////////////////////////////////////////////////////////////////////////////////////////////

2

3

4

Reading input from File:
let fs = require("fs"); // file system
let data = fs.readFileSync('./input.txt', 'utf-8');
let idx = 0;
data = data.split('\n'); //escape sequence
function readLine() {
    idx++; //idx = idx + 1
    return data[idx - 1].trim();
}
/*--------------------------------------*/
let n = parseInt(readLine()); //5
let arr = []; //empty array
for(let i = 0; i<n; i++) //n = size of the array
{ 
    arr[i] = parseInt(readLine());
}
console.log(arr);
console.log(arr.length);
/*
    i       arr[i]
    0       2
    1       1
    2       5
*/
Array Basics:
/*
Characteristics of Arrays:
    1. Collection of similar kind of Data i.e. Numbers, Strings, etc.
    2. Array can have any number of data elements.
    3. Array indexing begins with 0.
    4. Length of the array can be found using: arr.length
*/
let arr = [];
console.log(arr); //[]
arr[0] = 6;
arr[1] = 9;
arr[2] = 4;
console.log(arr); // [6, 9, 4]
console.log(arr.length); //3
arr.push(54, 76); //[6, 9, 4, 54, 76] -> length = 5
console.log(arr);
arr.push(10); //[6, 9, 4, 54, 10] -> length = 6
console.log(arr);
console.log(arr[3]);
console.log(arr.length); //5
arr[arr.length - 1] = 18; //arr[4] = 18
console.log(arr);
/*
 [6, 9, 4, 54, 10]
  0  1  2  3    4
*/ 
Question on Arrays:
/**
 * Question:
 * Bunny runs a reading club. He has a huge collection of books. It is 
very time consuming
 * for the readers to go and physically search for a book. So, Bunny 
wants to provide a
 * quick way to search for a book. Help Bunny to build a program that 
does this.
 *
 * Input:
 * First Line contains a positive integer, say n, denoting the number of 
books with Bunny.
 * Next n lines contain one string each denoting the title of the book.
 * Next line contains a positive integer, say q, denoting the number of 
queries.
 * Next q lines contain one string each, denoting the book searched by a 
customer.
 *
 * Output:
 * q lines containing one string each, Available or Not Available, 
denoting whether that
 * particular book is available or not.
 *
 * Example:
 * Input:
 * 10
 * Wings of Fire
 * Harry Potter and The chamber of secrets
 * Swami and his friends
 * Animal Farm
 * Hound of Baskerville
 * Programming Pearls
 * Midnight Children
 * Surely you're joking, Mr. Feynman
 * Sapiens
 * Fat chance
 * 3
 * Game of Thrones
 * Harry Potter and the prisnor of Azkaban
 * Midnight Children
 *
 * Expected Output:
 * Not Available
 * Not Available
 * Available
 */
 let fs = require("fs"); // file system
 let data = fs.readFileSync('./input1.txt', 'utf-8');
 let idx = 0;
 data = data.split('\n'); //escape sequence
 
 function readLine() {
     idx++; //idx = idx + 1
     return data[idx - 1].trim();
 }
 /*--------------------------------------*/
 let n = parseInt(readLine()); //10
 let books = [];
 for (let i = 0; i<n; i++)
 {
    books.push(readLine()); //arr[i] = readLine();
 }
console.log(books);
let q = parseInt(readLine()); //3
let queries = [];
for(let i = 0; i<q; i++)
{
    queries[i] = readLine();
}
console.log(queries);
for(let i = 0; i<queries.length; i++) //queries
{
    let found = "Not Available";
    for(let j = 0; j<books.length; j++) // books
    {
        if(queries[i] === books[j])
            {
                found = "Available";
                break;
            }
    }
    console.log(found);
}
/**
 *  i     queries[i]                j    books[j]                        
Found
 *  0     "MidNight Children"       0    Wings of Fire 
 *                                  1 Harry Potter and The chamber of 
secrets   
 *                                  6   Midnight Children                
Available
 *  1   Game of Thrones
 */




 //////////////////////////////////////////////////////////////////////////////////////////////////
 1

2

3

4

Notes:
/*
Two types of Arrays:-
1) Single Dimensional Array (1D Array): Collection of elements of the 
same kind. e.g. [2, 4, 5]
                                                                         
0  1  2 
2) Double Dimensional Array (2D Array): Collection of 1D Arrays of the 
same kind. 
i.e. will have same data and same number of elements e.g.
        0   1   2  
    [
  0     [2, 4, 5],
  1     [6, 3, 8],
  2     [1, 9, 10]
    ] 
    Matrix[row (which 1D Array?)][col (which index in 1D Array)]
    Matrix[0][0] = 2
    Matrix[1][2] = 8
        0   1   2  
    [
  0     [2, 4, 5],
  1     [6, 3, 8]
    ] 
    Order: 3(no of rows) * 3(no of columns)
    Matrix: m(no of rows/no of 1D Arrays) * n(no of columns/no of 
elements in each 1D Array)
    Types of Matrix (2D arrays):
    (i) Column Matrix: Matrix that has only one column. i.e. 1D arrays 
with one element
                    0
        e.g.    [
            0        [1],
            1        [0],
            2        [7]
                ]
                Order = 3 * 1
    
    (ii) Row Matrix: Matrix that has only one row. i.e. only one 1D array
                  0  1  2
    e.g.    [
        0        [1, 2, 3]
            ]
            Order = 1 * 3
    (iii) Square Matrix: Matrix that has equal number of rows and columns
    i.e. no of 1D arrays = number of elements in each 1D Array
           e.g.     0   1   2  
                [
            0     [2, 4, 5],
            1     [6, 3, 8],
            2     [1, 9, 10]
                ]  
*/ 
Input.txt
3 
4 
12
11
10
34
21
17
23
12
56
45
92
67
Matrix Addition
/*
1) Read the input from input.txt and print the m*n (3*4) Matrix 
[
      0    1   2   3
  0  [12, 11, 10, 34],
  1  [21, 17, 23, 12],
  2  [56, 45, 92, 67]
]
2) Add all elements present in the Matrix formed in (1) 
*/
let fs = require("fs"); // file system
let data = fs.readFileSync('./input.txt', 'utf-8');
let idx = 0;
data = data.split('\n'); //escape sequence
function readLine() {
    idx++; //idx = idx + 1
    return data[idx - 1].trim();
}
/*--------------------------------------*/
let m = parseInt(readLine()); //3 (no of rows)
let n = parseInt(readLine()); //4 (no of columns)
//initialization
let arr = []; //2D array [ [], [], [] ]
let sum = 0;
let sumOf17And67 = 0;
for(let i = 0; i<m; i++) //row loop (0-2)
{
    arr.push([]); //arr = [ [] ] 
    for(let j = 0; j<n; j++)//column loop (0-3)
    {
        arr[i][j] = parseInt(readLine()); //arr[1][2]
        sum = sum + arr[i][j];  
        if((i === 1 && j === 1) || (i === 2 && j === 3))
            sumOf17And67 = sumOf17And67 + arr[i][j];
    } 
  //  console.log(arr[i]);
   // console.log('\n');
} // arr = [[], [], []]
console.log(arr);
console.log(sum); //400
console.log(sumOf17And67); //84
/** 
 * n = 4 m = 3
 * i    i<m    j      j<n        arr
 * 0     T     0       T         [[12]]
 *             1       T         [[12, 11]]   
 *             2       T         [[12, 11, 10]]
 *             3       T         [[12, 11, 10, 34]]
 *             4       F                     
 * 1     T     0       T         [[12, 11, 10, 34], [21]]     
 *             1       T         [[12, 11, 10, 34], [21, 17]]
 *             2       T         [[12, 11, 10, 34], [21, 17, 23]]
 *             3       T         [[12, 11, 10, 34], [21, 17, 23, 12]]
 *             4       F       
 * 2    T               
*/



/////////////////////////////////////////////////////////////////////////////////////////////////////////


1

2

3

4

Notes:
/*-----------------------------------------Array 
Operations------------------------------------*/
/*
    Push -> appends new elements to the end of the array and returns new 
length of the array.
    Unshift -> Inserts new elements at the start of an array, and returns
the new length of the array.
    Shift -> Removes the first element from an array and returns it. If 
array is empty returns undefined.
    If the array is empty, undefined is returned and the array is not 
modified.
    Pop -> remove elements from end of the array.
    Splice -> Remove elements from specific index of the array.
            1) first parameter -> start index of deletion, 
            2) second parameter -> no of elements to be deleted from 
start index.
            3) The second parameter is optional. If you don't specify it,
all elements after start 
             index will be deleted.  
            4) returns deleted elements.
    indexOf -> Returns the index of the first occurrence of a value in an
array, or -1 if it is not present.
            1) first parameter (searchValue) -> Value to locate
            2) second parameter (fromIndex) —> The array index at which 
to begin the search. 
            If fromIndex is omitted, the search starts at index 0.
    lastIndexOf -> Returns the index of the last occurrence of a 
specified value in an array, or -1 if it is 
    not present.
            1) first parameter (searchValue) -> Value to locate
            2) second parameter (fromIndex) —> The array index at which 
to begin searching backward. 
            If fromIndex is omitted, the search starts at the last index 
in the array.       
*/
Array Operations Demo:
/*---------------------------------------------*/
let arr = [2, 1, 8, 9, 4]; //length = 5
//insert 5 and 6 at the end of arr: [2, 1, 8, 9, 4, 5, 6]
let l1 = arr.push(5, 6);
//console.log(arr); //[2, 1, 8, 9, 4, 5, 6]
//console.log(l1); //7
let l2 = arr.unshift(21, 9);//[21, 2, 2, 1, 8, 9, 4, 5, 6]
//console.log(arr);
//console.log(l2);
let x = arr.shift(); //21
//console.log(arr); //[2, 2, 1, 8, 9, 4, 5, 6]
//console.log(x); //21
let a = arr.pop();
//console.log(a);//6
//console.log(arr);//[2, 2, 1, 8, 9, 4, 5]
//Splice 
/* case - 1 */
//let y = arr.splice(1, 1);
//console.log(arr); //[ 2, 1, 8, 9, 4, 5 ]
//console.log(y); //[ 2 ]
/* case - 2 */
//let z = arr.splice(3);
//console.log(arr);//[ 2, 1, 8 ]
//console.log(z); //[ 9, 4, 5 ]
console.log(arr); //[9, 2, 1, 8, 9, 4, 5]
let index = arr.indexOf(9);
//console.log(index); //0
index = arr.indexOf(9, 2);
//console.log(index); //4  
index = arr.indexOf(9, 5);
//console.log(index);//-1
index = arr.indexOf(9, 0);//same as line 35
//console.log(index);//0
//[9, 2, 9, 8, 9, 4, 5]  
index = arr.lastIndexOf(9);
console.log(index);//4
index = arr.lastIndexOf(9, 3);
console.log(index);//2
input.txt
6 
3
1
7
5
8
10
Question 1
let fs = require("fs"); // file system
let data = fs.readFileSync('./input.txt', 'utf-8');
let idx = 0;
data = data.split('\n'); //escape sequence
function readLine() {
    idx++; //idx = idx + 1
    return data[idx - 1].trim();
}
/*--------------------------------------*/
/**
 * Reverse a sequence 
 * input: 
 * 6 -> size
 * [3, 1, 7, 5, 8, 10] -> array elements
 * output: [10, 8, 5, 7, 1, 3]
 */
let n = parseInt(readLine());
let givenSeq = [];
for(let i = 0; i<n; i++){
    givenSeq.push(parseInt(readLine()));
}
console.log(givenSeq); //[3, 1, 7, 5, 8, 10]
//reverse
let reverseSeq = [];
for(let i = n-1; i>=0; i--){
    reverseSeq.push(givenSeq[i]);
}
console.log(reverseSeq);
console.log(givenSeq.reverse());
Question 2
let fs = require("fs"); // file system
let data = fs.readFileSync('./input.txt', 'utf-8');
let idx = 0;
data = data.split('\n'); //escape sequence
function readLine() {
    idx++; //idx = idx + 1
    return data[idx - 1].trim();
}
/*--------------------------------------*/
/**
 * Reverse a sequence using array Operations
 * input: 
 * 6 -> size
 * [3, 1, 7, 5, 8, 10] -> array elements
 * output: [10, 8, 5, 7, 1, 3]
 */
 let n = parseInt(readLine());
 let reverseSeq = [];
 for(let i = 0; i<n; i++){
    reverseSeq.unshift(parseInt(readLine()));
 }
 console.log(reverseSeq);





 //////////////////////////////////////////////////////////////////////////////////////////////////////





 lecture 7



let fs = require("fs"); // file system
let data = fs.readFileSync('./input.txt', 'utf-8');
let idx = 0;
data = data.split('\n'); //escape sequence
function readLine() {
    idx++; //idx = idx + 1
    return data[idx - 1].trim();
}
/*--------------------------------------*/
/**
 * Reverse a sequence using two pointer approach
 * input: 
 * 6 -> size
 * [3, 1, 7, 5, 8, 10] -> array elements
 * output: [10, 8, 5, 7, 1, 3]
 * --------------------------
 * explanation:
 * [3, 1, 7, 5, 8, 10]
 *  0  1  2  3  4   5 
 * 
 * [10, 8, 5, 7, 1, 3]
 *   0  1  2  3  4  5
 * 
 *  pointer 1 -> i -> left to right -> start from 0
 *  pointer 2 -> j -> right to left -> start from n-1
 *  i<j
 * 
 * Odd:
 * [3, 1, 7, 6, 5, 8, 10]
 *  0  1  2  3  4  5   6
 * 
 * output:
    [10, 8, 5, 6, 7, 1, 3]
 *   0   1  2  3  4  5  6
 */
let n = parseInt(readLine());
let seq = [];
for(let i = 0; i<n; i++){ //-------> n
    seq.push(parseInt(readLine()));
}
console.log(seq);
//for(initializations;conditions;updations)
for(let i = 0, j = seq.length - 1; i<j; i++, j--)//---->n/2
{
    let temp = seq[i];
    seq[i] = seq[j];
    seq[j] = temp;
}
console.log(seq);
/*
let j = seq.length - 1;
for(let i = 0; i<j; i++)//---->n/2
{
    let temp = seq[i];
    seq[i] = seq[j];
    seq[j] = temp;
    j--;
}
console.log(seq);*/
/*
    temp = 3
    at pos of 3 = 10
    at pos of 10 = temp = 3
*/
/**
 *      i       seq[i]      j       seq[j]        i<j      seq
 *      0       3           6        10            T       [10, 1, 7, 6, 
5, 8, 3]
 *      1       1           5        8             T       [10, 8, 7, 6, 
5, 1, 3]
 *      2       7           4        5             T       [10, 8, 5, 6, 
7, 1, 3]         
 *      3                   3                      F 
 * 
-------------------------------------------------------------------------
----------
 *      0       3           5        10            T       [10, 1, 7, 5, 
8, 3]
 *      1       1           4        8             T       [10, 8, 7, 5, 
1, 3]  
 *      2       7           3        5             T       [10, 8, 5, 7, 
1, 3]  
 *      3                   2                      F    
 */
/* 
f(n) = n + n/2 = 3n/2 approximately equal to n
Time Complexity: O(n/2) approximately equal to O(n) */
/* Space Complexity: O(n) */
Space Complexity:
/**
 * Memory required to execute your algorithm, excluding the input.
 * 
 * input: [] -> size n -> O(1)
 * input.txt -> O(n)
 */
Array reversal both approaches Space Complexity (two pointer stated at top):
let fs = require("fs"); // file system
let data = fs.readFileSync('./input.txt', 'utf-8');
let idx = 0;
data = data.split('\n'); //escape sequence
function readLine() {
    idx++; //idx = idx + 1
    return data[idx - 1].trim();
}
/*--------------------------------------*/
/**
 * Reverse a sequence using array Operations
 * input: 
 * 6 -> size
 * [3, 1, 7, 5, 8, 10] -> array elements
 *  0  1  2  3  4   5 
 * output: [10, 8, 5, 7, 1, 3]
 *           0  1  2  3  4  5 
 */
 let n = parseInt(readLine());
 let reverseSeq = [];
 for(let i = 0; i<n; i++){
    reverseSeq.unshift(parseInt(readLine()));
 }
 console.log(reverseSeq);
 /**    i     i<n         reverseSeq
  *     0     0<6 T          [3]
  *     1     1<6 T          [1, 3]   
  *     2     2<6 T          [7, 1, 3]
  *     3     3<6 T          [5, 7, 1, 3]
  *     4     4<6 T          [8, 5, 7, 1, 3]   
  *     5     5<6 T          [10, 8, 5, 7, 1, 3]
  *     6     6<6 F              
  */
 /* Space Complexity: O(n) */
let fs = require("fs"); // file system
let data = fs.readFileSync('./input.txt', 'utf-8');
let idx = 0;
data = data.split('\n'); //escape sequence
function readLine() {
    idx++; //idx = idx + 1
    return data[idx - 1].trim();
}
/*--------------------------------------*/
/**
 * Reverse a sequence 
 * input: 
 * 6 -> size
 * [3, 1, 7, 5, 8, 10] -> array elements
 *  0  1  2  3  4  5 
 * output: [10, 8, 5, 7, 1, 3]
 *           0  1  2  3  4  5 
 * 0 -> 3
 * 6-1 (n-1) -> 3
 */
let n = parseInt(readLine()); //----------> 1
let givenSeq = []; //---------> 1
for(let i = 0; i<n; i++){ // --------------------> n
    givenSeq.push(parseInt(readLine())); 
}
console.log(givenSeq); //[3, 1, 7, 5, 8, 10] ---------->1
//reverse
let reverseSeq = []; // ------------> 1
for(let i = n-1; i>=0; i--){ //----------------------> n
    console.log(givenSeq[i]);
    reverseSeq.push(givenSeq[i]);
}
console.log(reverseSeq); //------------> 1
//console.log(givenSeq.reverse());
/**
 * f(n) = 1 + 1 + n + 1 + 1 + n + 1 = 5 + 2n = O(2n) approximately equal 
to O(n)
 */
/**
 * i            i>=0             reverseSeq
 * 5            5>=0 T            [10]   
 * 4            4>=0 T            [10, 8]
 * 3            3>=0 T            [10, 8, 5]
 * 2            2>=0 T            [10, 8, 5, 7]
 * 1            1>=0 T            [10, 8, 5, 7, 1]
 * 0            0>=0 T            [10, 8, 5, 7, 1, 3]
 * -1           -1>=0 F          
 *///////////////////////////////////////////////////////////////////////////////////////////////////////////////

 let fs = require("fs"); // file system
let data = fs.readFileSync('./input1.txt', 'utf-8');
let idx = 0;
data = data.split('\n'); //escape sequence
function readLine() {
    idx++; //idx = idx + 1
    return data[idx - 1].trim();
}
/
*------------------------------------------------------------------------
-----------------*/
/* Find the sum of first n natural numbers. 
Natural Numbers: - Numbers starting from 1 and ending at infinity.
Read the value of n from input1.txt 
example: n = 3
sum = 6 (1 + 2 + 3)
*/
let n = parseInt(readLine()); //9
let sum = n*(n+1)/2;
console.log("Sum using formula:", sum);
/** 
 * f(1) = 1 unit
 * f(5) = 1 unit
 * f(n) = 1 unit
 * considering the value of c is 1
 * Worst Case: O(1)
 * Best Case: Omega(1)
*/
let sum1 = 0;
for(let i = 1; i<=n; i++) // Sum from 1 to 9
{
    sum1 = sum1 + i;
}
console.log("Sum using for loop:", sum1);
/*
    f(1) = 1 unit
    f(2) = 2 units
    f(3) = 3 units
    f(9) = 9 units
    f(n) = n units
    Worst Case: O(n)
    Best Case: Omega(n)
*/
Time Complexity:
/*
Time complexity is defined as the amount of time taken by an algorithm to
run, 
as a function of the length of the input. 
f(n) = x units where n is the length of the input
Time Complexity Analysis:
There are 3 asymptotic notations for calculating an algorithm's running 
time complexity:
    1) O Notation: Systematic way to express an algorithm's upper limit 
of running time. Widely known as 
    Worst Case Time Complexity. This is the most commonly used notation 
for expressing time complexity.
    2) Omega Notation: The systematic way to express the lower bound of 
an algorithm's running time is to use
    the notation. It calculates the best-case time complexity, or the 
shortest time an algorithm will take to 
    complete. 
    3) Theta Notation: The systematic way to express both the lower limit
and upper bound of an algorithm's 
    running time is to use this notation.
*/
let fs = require("fs"); // file system
let data = fs.readFileSync('./input.txt', 'utf-8');
let idx = 0;
data = data.split('\n'); //escape sequence
function readLine() {
    idx++; //idx = idx + 1
    return data[idx - 1].trim();
}
/*--------------------------------------*/
/**
 * Reverse a sequence using array Operations
 * input: 
 * 6 -> size
 * [3, 1, 7, 5, 8, 10] -> array elements
 *  0  1  2  3  4   5 
 * output: [10, 8, 5, 7, 1, 3]
 *           0  1  2  3  4  5 
 */
 let n = parseInt(readLine());
 let reverseSeq = [];
 for(let i = 0; i<n; i++){
    reverseSeq.unshift(parseInt(readLine()));
 }
 console.log(reverseSeq);
 /**    i     i<n         reverseSeq
  *     0     0<6 T          [3]
  *     1     1<6 T          [1, 3]   
  *     2     2<6 T          [7, 1, 3]
  *     3     3<6 T          [5, 7, 1, 3]
  *     4     4<6 T          [8, 5, 7, 1, 3]   
  *     5     5<6 T          [10, 8, 5, 7, 1, 3]
  *     6     6<6 F              
  */
 /* time Complexity: O(n) */
let fs = require("fs"); // file system
let data = fs.readFileSync('./input.txt', 'utf-8');
let idx = 0;
data = data.split('\n'); //escape sequence
function readLine() {
    idx++; //idx = idx + 1
    return data[idx - 1].trim();
}
/*--------------------------------------*/
/**
 * Reverse a sequence 
 * input: 
 * 6 -> size
 * [3, 1, 7, 5, 8, 10] -> array elements
 *  0  1  2  3  4  5 
 * output: [10, 8, 5, 7, 1, 3]
 *           0  1  2  3  4  5 
 * 0 -> 3
 * 6-1 (n-1) -> 3
 */
let n = parseInt(readLine()); //----------> 1
let givenSeq = []; //---------> 1
for(let i = 0; i<n; i++){ // --------------------> n
    givenSeq.push(parseInt(readLine())); 
}
console.log(givenSeq); //[3, 1, 7, 5, 8, 10] ---------->1
//reverse
let reverseSeq = []; // ------------> 1
for(let i = n-1; i>=0; i--){ //----------------------> n
    console.log(givenSeq[i]);
    reverseSeq.push(givenSeq[i]);
}
console.log(reverseSeq); //------------> 1
//console.log(givenSeq.reverse());
/**
 * f(n) = 1 + 1 + n + 1 + 1 + n + 1 = 5 + 2n = O(2n) approximately equal 
to O(n)
 */
/**
 * i            i>=0             reverseSeq
 * 5            5>=0 T            [10]   
 * 4            4>=0 T            [10, 8]
 * 3            3>=0 T            [10, 8, 5]
 * 2            2>=0 T            [10, 8, 5, 7]
 * 1            1>=0 T            [10, 8, 5, 7, 1]
 * 0            0>=0 T            [10, 8, 5, 7, 1, 3]
 * -1           -1>=0 F          
 */
Reverse an array using two pointer approach:
let fs = require("fs"); // file system
let data = fs.readFileSync('./input.txt', 'utf-8');
let idx = 0;
data = data.split('\n'); //escape sequence