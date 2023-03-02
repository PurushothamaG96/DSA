// delete the key element in object
/*
class Obj{
    constructor(n, a){
        this.name = n
        this.age = a

    }
}
let obj1 = new Obj('puru', 26)
console.log('before delete',obj1)//-------------------------------------note
delete obj1.age
console.log('after delete', obj1)
delete obj1[x]//------------------------------------not work
console.log(obj1)

*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                       //  INHERITENCE  on object
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//problem 1
//collage wants to devolop a software to manage student data and professor and workers data
//the student should be able to update their adress and als well as phone number
//for same for professor too method should be accessable from outside of the class

/*

class Student{
    constructor(n, dob, adr, ph, dept, pro, yoj, tf, fp ){
        this.name = n
        this .dateOfBirth = dob
        this. adress = adr
        this.phonenum = ph
        this. department = dept
        this. Program = pro
        this.yearOfJoin = yoj
        this.TotalFees = tf
        this. FeesPaid = fp
    }
    UpdateAdress(newAdress){
        this.adress = newAdress
    }
    UpdatePhoneNum(newPH){
        this.phonenum = newPH
    }
    UpdateFeesPaid(moneypaid){
        this.FeesPaid += moneypaid
    }
}


class Professor{
    constructor(n, dob, adr, ph, dept, yoj, q, s ){
        this.name = n
        this .dateOfBirth = dob
        this. adress = adr
        this.phonenum = ph
        this. department = dept
        this.yearOfJoin = yoj
        this.Qualification = q
        this.salary = s
    }
        
    UpdateAdress(newAdress){
        this.adress = newAdress
    }
    UpdatePhoneNum(newPH){
        this.phonenum = newPH
    }

}  
let student1 = new Student('puru',1996, "bengaluru",56565, 'mech', 'fullStack', 2022, 200000, 10000 )
let professor1  = new Professor('aravind', 1999, 'warangle', 65655, 'ECE',2020, 'B tech In ECE', 150000)
console.log('before update', student1.phonenum)
student1.UpdatePhoneNum(6236565)
console.log('after update', student1.phonenum)///=--------------------------------------------see here

*/

/// problems is here there are so many duplication
/// like

// name age etc


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//the above example is with out INHERITANCE-----------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //--------------------------------------------------------
/*

class Person{
    constructor(n, a){           //=-------this is called parant class. stdent and professor called child class
    this.name = n 
    this.age = a
    } 
    sayHello(){
        console.log('this is from person class')
    }
}
class Student extends Person{  //--------------------syntax for inheritance
    constructor(n, a, rollN){
    super(n, a)                //-----------------------note
    this.rollNumber = rollN
    }
}
class Professor extends Person {
    constructor (n, a, EmpId){             //--------------constuctor(parameter or attributes)
    super(n, a)                   //------------------super() keyword  super (argument passing)
    this.EmployeeId = EmpId
    }
} 
let student1 = new Student('puru', 26, 8732687)
let pro1 = new Professor ('aravind', 24, 7347)

console.log(student1)
student1.sayHello()//------------------------------------------we can access method also

console.log('\n',pro1)
pro1.sayHello()  //-------------------------------------------------------note here


//result
//Student { name: 'puru', age: 26, rollNumber: 8732687 }
//Professor { name: 'aravind', age: 24, EmployeeId: 7347 }

// Student { name: 'puru', age: 26, rollNumber: 8732687 }
// this is from person class

//  Professor { name: 'aravind', age: 24, EmployeeId: 7347 }
// this is from person class


*/

////////////////////////////////////////////another method/////////////////////////////////////////////////

/*
class Person{
    // constructor(){       
    // //empty constuctor
    // } 
    sayHello(){
        console.log('this is from person class')
    }
}
class Student extends Person{  
    constructor(n,a, rollN){
    super()                              /// -----------------------syntax         
    this.rollNumber = rollN
    }
}
let student1 = new Student('puru', 26, 8732687)
console.log(student1.rollNumber)   // result 8732687

student1.sayHello()             // ANswer = this is from person class



*/
////////////////////////////////////////////////////// for previous problem ///////////////////////////////////////
//-----------------------------------------------inheritence method--------------------------------
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class ParantClass{
    constructor(n, dob, adr, ph, dept){
        this.name = n
        this .dateOfBirth = dob
        this. adress = adr
        this.phonenum = ph
        this. department = dept
    }
    UpdateAdress(newAdress){
        this.adress = newAdress
    }
    UpdatePhoneNum(newPH){
        this.phonenum = newPH
    }
}

class Student extends ParantClass{
    constructor(n, dob, adr, ph, dept, pro, yoj, tf, fp ){
        super (n, dob, adr, ph, dept)
        this.program = pro
        this.yearOfJoin = yoj
        this.TotalFees = tf
        this. FeesPaid = fp
    }
    
    UpdateFeesPaid(moneypaid){
        this.FeesPaid += moneypaid
    }
}


class Professor extends ParantClass{
    constructor(n, dob, adr, ph, dept, yoj, q, s ){
        super (n, dob, adr, ph, dept)
        this.yearOfJoin = yoj
        this.Qualification = q
        this.salary = s
    }
        
    
}  
let student1 = new Student('puru',1996, "bengaluru",56565, 'mech', 'fullStack', 2022, 200000, 10000 )
let professor1  = new Professor('aravind', 1999, 'warangle', 65655, 'ECE',2020, 'B tech In ECE', 150000)
console.log('before update', student1.phonenum)
student1.UpdatePhoneNum(6236565)
console.log('after update', student1.phonenum)///=--------------------------------------------see here
