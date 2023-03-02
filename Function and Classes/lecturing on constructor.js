//Factory function-------------------------------------------------------
/*
function student (n, r, g, b, hb){
    return{
        name : n,// syntax should be name:n
        rollNum : r,
        gender : g,
        branch : b,
        hostelBlock: hb

    }
}
let student1 = student ("puru", 477, "male", "mech", "A")// the code shoudnt work if we do not use the string formate.
//console.log(student1)


//constuctor function------------------------------------------------------


function student (n, r, g, b, hb){
    this.name = n
    this.rollNum = r
    this.gender = g
    this. branch = b
    this.hostelBlock = hb 
    
}
let student2 = new student ("puru", 477, "male", "mech", "A")
console.log(student2)



//PARAMETERS
/*
a) propertie (data)
b) functionalities (function)

In this question they given student data. according data we need to print student name and branch and hostel block



//SOLUTION for 
let student3 = {   // note student = {}    syntax
    name: "puru",
    rollNum : 477,
    gender: "male",
    branch: 'mech',
    hostelBlock: 'A',
    printDetails : function(){
        //console.log( student3.gender, student3.hostelBlock)

        console.log("gender : ", this.gender, " hostelBlock : ", this.hostelBlock)
    }
  }
  //printDetails() we cant call like this
  student3.printDetails()// parantheses should be write




  for above solution we need to duplicates the thig more and its not possible when n number of contestants*/



  //CLASS and CONSTOCTOR function

  /*function student(n, r, g, b, hb){
    this.name = n
    this.rollNum = r
    this.gender = g
    this. branch = b
    this.hostelBlock = hb 

    //this is called functionalities
    this.printDetails = function(){    // ----------------dont forget mention this.printDetails function
        console.log(this.gender, "hostelBlock is ", this.hostelBlock)
    }
  }
  let student1 = new student("puru", 477, "male", "mech", "A Block")
  let student2 = new student("paul", 130, "female", "CSE",'B Block' )
  let student3 = new student ("ravi", 478, 'male', 'ECE', 'A Block')
  
  //calling function toi print student details
  //student1.printDetails()

  // in this problem if we search by rollnumber we need to get students details. for that

  let students = [student1, student2,student3 ]
  //                 0         1        2
  let rollNumber = 477
  for ( let i =0 ; i < students.length; i++){ // i = 0
    if(students[i].rollNum == rollNumber){    // students[0] = student1.rollNum == 477--yes
        students[i].printDetails()           // students[0] = student1.printDetails()
    }
  }

*/


  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Problem 2           diognostic Centre

//implement a class called BPrecord and 2 atributes called systolic and diostolic 
// systolic > 140 or diastolic > 90 consider high bp
//systolic < 90 and diastolic < 60 consider low bp
// otherwise normal
// the output



/*function BPRecords (s, d){
    this.systolic  = s;
    this.diostolic = d
    this.Report = function(){
        console.log('Blood Pressure is', this.systolic, '/', this.diostolic)
        if (this.systolic > 140 || this.diostolic > 90){
            console.log( 'Diognosis : High BP' )
        }
        else if (this.systolic < 90 || this.diostolic < 60){
            console.log ( 'Diognosis : Low BP')
        }
        else console.log ("Diognosis : Normal BP")
    }
}
let person1 = new BPRecords(110, 50)
person1.Report()





*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////





//problem 2                       CREDIT CARD Eligebility


/*function Customer (n, a, AC, p, b){
    this. name = n
    this . age = a
    this. AccountNum = AC
    this. period = p
    this. Balance = b
    this. DebitAmount = function (amount){
        if(this.period < =1 ) {
            if( amount <= this.balance + 100000){
                this.balance = this.balance + 1000000
            console.log('tansaction Success and balance is' (this.Balance + amount) - amount)
            }
            else {
                console.log ('transaction Failed')
            }


        }
        else if(this.period > 1 && this.period <= 5  ) {
            if( amount <= (this.balance + 500000)){
                this.balance = this.balance - Amount
            console.log('tansaction Success and balance is' (this.Balance - amount))
            }
            else {
                console.log ('transaction Failed for period 4')
            }
        }
        else if(5 < this.period <= 10  ) {
            if( amount <= this.balance + 1000000){
                this.balance = this.balance + 1000000
            console.log('tansaction Success and balance is' (this.Balance + amount) - amount)
            }
            else {
                console.log ('transaction Failed')
            }
        }

    }
}

let creditUser1 = new Customer('purushothama', 26, '872r9r708', 0.7, 25000)
creditUser1.DebitAmount(50000)
console.log(creditUser1.period)*/




function CreditCardUser(p , b , pH) {
        this.period = p
        this.balance = b
        this.phoneNumber = pH
        this.debitAmount = function(amount) {
            if(this.period <= 1 ) {
                if(amount <= this.balance + 100000){
                    this.balance = this.balance - amount
                    console.log("transaction success")
                }
                else {
                    console.log("Limit exceeded")
                }
            }
            else if(this.period > 1 && this.period <= 5) {
                if(amount  <= this.balance + 500000) {
                    this.balance = this.balance - amount
                    console.log("transacion success")
                }
                else {
                    console.log("Limit exceeded")
                }
            }
            else {
                if(amount <= 1000000+this.balance) {
                    this.balance = this.balance - amount
                    console.log("transaction success")
                }
                else {
                    console.log("Limit exceeded")
                }
            }
        }
    }
    let aravind = new  CreditCardUser( 4 , 200000 , 78123938123)
    console.log(aravind.balance)
    aravind.debitAmount(400000)
 
  