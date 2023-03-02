//opps - object oriented progrmming
// and opposite of oops is procedural programming (where we never  used object)

/*

//example - 1 for class
class Employee{                                // First letter capital notates constoctor or class function
    constructor(n, a, s, dep){
        this.name = n 
        this.age = a
        this.salary = s
        this.department = dep
    }
    getDetails(){                 ////-----------------------------------syntax format
        console.log(this)         /// get details called Employee1 means this keyword
    }
}
let Employee1 = new Employee('purushothama', 26, 15000, 'assembly')
Employee1.getDetails()//---------------------------------------------------function invoking



*/


//---------------------------------------------------------------------------------------------------------------


class Diognosis {
    constructor ( s,d, sg, b){
        this.systolic = s
        this.diaStolic = d
        this.glucose = sg
        this.ECG = b

    }
    #BPCheck(){       ////////////----------abstaction method-----private method
        console.log('the BP value is :', this.systolic, '/', this.diaStolic)
        if(this.systolic > 140 && this.diaStolic > 90) {
            console.log ('BP is : HIGH')
        }
        else if (this.systolic < 90 && this.diaStolic < 60) {
            console.log ('BP is : LOW')
        }
        else {
            console.log('BP is NORMAL')
        }

    }
    #sugarTest(){// ----------outside we cannot access
        if(this.glucose > 10){
            console.log('sugar compaints and sugar level is :', this.glucose)
        }
        else {
            console.log('No sugar')
        }
    }
    FullbodyCheck(){
        this.#BPCheck()//----------------------- note here
        this.#sugarTest()// ----------------------------------see here

    }
    cardiacTest(){
        this.#BPCheck()
        if (this.ECG > 80 && this.ECG < 65){
            console.log ("Abnormal")
        }
        else {
            console.log('Normal')
        }
    }
}

let person1 = new Diognosis(120, 80, 11, 84)
person1.FullbodyCheck()
person1.cardiacTest()