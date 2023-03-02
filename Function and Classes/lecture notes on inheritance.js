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
console.log(professor1)