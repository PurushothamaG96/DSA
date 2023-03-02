const { count } = require("console");
let fs = require("fs");
let data = fs.readFileSync("./HMS module/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}








class StudentData{
    constructor(name){
        this.name = name
    }

    enter_score(marks){
        this.markscard = marks
    }


    get_test_score(test_number){
        if(test_number > this.markscard.length){
            let answer = `${this.name} test ${test_number} marks: NA`
            return answer
        }
        else {
            let answe = `${this.name} test ${test_number} marks: ${this.markscard[test_number-1]}`
            return answe
        }
    }
    get_average_score(){
        let sum = 0
        for(let i = 0; i< this.markscard.length; i++){
            sum = sum + this.markscard[i]

        }
        let avarage =Math.round(sum/this.markscard.length) 
        let ans = `${this.name} average score: ${avarage}`
        return ans

    }
    


}



let name = readLine()
let student = new StudentData(name)

let no_of_test = parseInt(readLine())
let scoreArray = []
while (no_of_test--){
    scoreArray.push(parseInt(readLine()))
}
student.enter_score(scoreArray)



let querry = parseInt(readLine())
while (querry--){
    let memberFunc = readLine(parseInt())

    if(memberFunc == "get_marks"){
        let test_number = parseInt(readLine())
        console.log(student.get_test_score(test_number))
    }

    else if(memberFunc == "average"){
        console.log(student.get_average_score())
    }


}

