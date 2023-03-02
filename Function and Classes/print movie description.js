let fs=require("fs")
let data=fs.readFileSync("./stock module-1/edit.txt","utf-8")
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}



/*Print Movie Description -- Classes Practice Problems
Write a Movie class for which you can create movie objects. 
The objects should have the following variables: integer length_in_minutes, integer num_characters, string language.
 Each object should also have a run method which prints out: 
"This is a movie with characters and is minutes long."

Input
First line is a string, denoting the language of the movie Second line is an integer,
 denoting the number of characters Third line is an integer, denoting the length in minutes

Output
The output should be the return statement of run: "This is a movie with characters and is minutes long."

Example
Input:

French
4
200
Output:

This is a French movie with 4 characters and is 200 minutes long.
First line is French indicating the movie's language is French Second line is 4,
indicating that the movie has 4 characters Third line is 200, indicating that the movie is 200 minutes long*/


class Movie{
    constructor(lIM, NC, lan){
        this.language = lan
        this.numCharacters = NC
        this.lengthInMinutes =  lIM
    }
    run (){
        let description = "This is a "+ this.language + " movie with " + this.numCharacters + " characters and is " + this.lengthInMinutes + " minutes long."
        return description;
    }
}
let language = readLine();
let numCharacters = readLine();
let lengthInMinutes = readLine();

let movie =  new Movie(lengthInMinutes, numCharacters, language)
console.log(movie.run());