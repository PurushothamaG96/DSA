rollNumber , gender , branch , hostelBlock
// properties
// input: rollNumber , output: gender & hostelBlock
// functionality
// student = properties(data)(attributes) , functionalities(function)(methods)
// function Student( n , r , g, b , h) {
//     this.name = n ;
//     this.rollNumber = r ;
//     this.gender = g
//     this.branch = b
//     this.hostelBlock  = h
//     this.printDetails = function() {
//         console.log("gender is : ", this.gender , " Hostel : ", this.hostelBlock)
//     }
// }
// let student1 = new Student("aravind" , 37733 , "Male" , "ECE" , "2") // #556
// let student2 = new Student("Akhil" , 12345, "Male" , "ECE" , "22") // #1024
// let student3 = new Student("Naresh" , 3883 , "Male" ,"CSE" , "3")  // #4088
// let students = [student1 , student2 , student3]
// let rollNumber = 3883
// for(let i = 0 ; i < students.length ; i++) {
//     if(students[i].rollNumber == rollNumber){
//         students[i].printDetails()
//         break ;
//     }
// }
// function BPRecord(s , d ) {
//     this.systolic = s
//     this.diastolic = d
//    this.generateReport = function() {
//         console.log("Blood Pressure is" ,this.systolic ,  "/" , this.diastolic)
//         if( this.systolic > 140 || this.diastolic > 90) {
//             console.log("Diagnosis:" , "High BP")
//         }
//         else if( this.systolic < 90 || this.diastolic < 60) {
//             console.log("Diagnosis:" , "Low BP")
//         }
//         else {
//             console.log("Diagnosis:" , "Noraml BP")
//         }
//     }
// }
// let report1 = new BPRecord(141 , 90)
// report1.generateReport()
// CREDIT
// period : 200 , balance : 200000 , phoneNumber,
//  debitAmout(amount) - 100000(period < 1yr)
//                     - 500000(period > 1 and period < 5)
//                     - 1000000(period > 5yr)
// function CreditCardUser(p , b , pH) {
//     this.period = p
//     this.balance = b
//     this.phoneNumber = pH
//     this.debitAmount = function(amount) {
//         if(this.period <= 1 ) {
//             if(amount <= this.balance + 100000){
//                 this.balance = this.balance - amount
//                 console.log("transaction success")
//             }
//             else {
//                 console.log("Limit exceeded")
//             }
//         }
//         else if(this.period > 1 && this.period <= 5) {
//             if(amount  <= this.balance + 500000) {
//                 this.balance = this.balance - amount
//                 console.log("transacion success")
//             }
//             else {
//                 console.log("Limit exceeded")
//             }
//         }
//         else {
//             if(amount <= 1000000+this.balance) {
//                 this.balance = this.balance - amount
//                 console.log("transaction success")
//             }
//             else {
//                 console.log("Limit exceeded")
//             }
//         }
//     }
// }
// let aravind = new  CreditCardUser( 0.7 , 200000 , 78123938123)
// console.log(aravind.balance)
// aravind.debitAmount(400000)
// console.log(aravind.balance)
// // 85000 = -60000
// // 25000 + 100000 = 1.25L



// OOP - object oriented programming
// Procedural programming(where we never used objects )
// name: string , age: Number , salary: Number , company: String
//  employee = { name : "aravind" , age: 22 , salary: 1 , company: "10xAcademy"}
// Factory function & Constructor functions & classes
















// pass by reference(non primitive) & pass by value(primitive)
// Objects in javaScript
// factory function , this keyword, new operator and  constructor function

// Primitive - stack memory( "aravind" , 23 , 45.9 , true)
// non-primitive data -  Heap memory  ( [1, 3, 43 ,56])

/*
    aadhar card :
        name , dob ,uniq id , address
*/

// Every Object literal will have a key:value
// { key1: val1 , key2 : val2 , ....}

// name , rollNumber , gender , branch , hostelBlock
// properties
// input: rollNumber , output: gender & hostelBlock
// functionality
// student = properties(data)(attributes) , functionalities(function)(methods)
// function Student( n , r , g, b , h) {
//     this.name = n ;
//     this.rollNumber = r ;
//     this.gender = g
//     this.branch = b
//     this.hostelBlock  = h
//     this.printDetails = function() {
//         console.log("gender is : ", this.gender , " Hostel : ", this.hostelBlock)
//     }
// }
// let student1 = new Student("aravind" , 37733 , "Male" , "ECE" , "2") // #556
// let student2 = new Student("Akhil" , 12345, "Male" , "ECE" , "22") // #1024
// let student3 = new Student("Naresh" , 3883 , "Male" ,"CSE" , "3")  // #4088
// let students = [student1 , student2 , student3]
// let rollNumber = 3883
// for(let i = 0 ; i < students.length ; i++) {
//     if(students[i].rollNumber == rollNumber){
//         students[i].printDetails()
//         break ;
//     }
// }
// function BPRecord(s , d ) {
//     this.systolic = s
//     this.diastolic = d
//    this.generateReport = function() {
//         console.log("Blood Pressure is" ,this.systolic ,  "/" , this.diastolic)
//         if( this.systolic > 140 || this.diastolic > 90) {
//             console.log("Diagnosis:" , "High BP")
//         }
//         else if( this.systolic < 90 || this.diastolic < 60) {
//             console.log("Diagnosis:" , "Low BP")
//         }
//         else {
//             console.log("Diagnosis:" , "Noraml BP")
//         }
//     }
// }
// let report1 = new BPRecord(141 , 90)
// report1.generateReport()
// CREDIT
// period : 200 , balance : 200000 , phoneNumber,
//  debitAmout(amount) - 100000(period < 1yr)
//                     - 500000(period > 1 and period < 5)
//                     - 1000000(period > 5yr)
// function CreditCardUser(p , b , pH) {
//     this.period = p
//     this.balance = b
//     this.phoneNumber = pH
//     this.debitAmount = function(amount) {
//         if(this.period <= 1 ) {
//             if(amount <= this.balance + 100000){
//                 this.balance = this.balance - amount
//                 console.log("transaction success")
//             }
//             else {
//                 console.log("Limit exceeded")
//             }
//         }
//         else if(this.period > 1 && this.period <= 5) {
//             if(amount  <= this.balance + 500000) {
//                 this.balance = this.balance - amount
//                 console.log("transacion success")
//             }
//             else {
//                 console.log("Limit exceeded")
//             }
//         }
//         else {
//             if(amount <= 1000000+this.balance) {
//                 this.balance = this.balance - amount
//                 console.log("transaction success")
//             }
//             else {
//                 console.log("Limit exceeded")
//             }
//         }
//     }
// }
// let aravind = new  CreditCardUser( 0.7 , 200000 , 78123938123)
// console.log(aravind.balance)
// aravind.debitAmount(400000)
// console.log(aravind.balance)
// // 85000 = -60000
// // 25000 + 100000 = 1.25L







///////////////////////////////////////////////////////////////////////////////////////////////////////////




class Person {
    constructor(n , dob , a , p  , dept , yoj , aadhar) {
        this.name  = n
        this.dob = dob
        this.address = a
        this.phone = p
        this.department = dept
        this.yoj = yoj
        this.aadhar = aadhar
    }
    sayHello(){
        console.log("Says Hello from from Person class")
        console.log(this.name , this.salary)
    }
    updatePhoneNumber(newPhoneNumber) {
        this.phone = newPhoneNumber
        // student1.phone = 2992200
    }
    updateAddress(newAddress) {
        this.address = newAddress
        // professor1.address = "Hyderabad"
    }
    updateAadharNumber(newAadharNumber) {
        this.aadhar = newAadharNumber
    }
}
class Student extends Person{
    constructor(n , dob , a , p , pro , dept , yoj , tF , fP , aadhar) {
        super(n , dob , a , p , dept , yoj , aadhar)
        this.programme = pro
        this.totalFee = tF
        this.feePaid = fP
    }
    payFee(amount) {
        this.feePaid += amount
    }
}
class Professor extends Person{
    constructor(n , dob , a , p  , dept , yoj , q , s , aadhar) {
        super(n , dob , a , p  , dept , yoj , aadhar)
        this.salary = s
        this.sayHello()
        this.qualification = q
    }
}
class Worker  extends Person {
    constructor(n , dob , a , p , dept , yoj , salary, workType , aadhar ) {
        super(n , dob , a , p  , dept , yoj, aadhar)
        this.salary = salary
        this.workType  = workType
    }
}
let professor1 = new Professor("aravind" ,"1999" , "Warangal" , "18671823781" , "CSE", "2018" , "PhD" , 125000 , 2789283923829) ;