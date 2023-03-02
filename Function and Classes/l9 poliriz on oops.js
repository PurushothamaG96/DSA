/*

class Parent {
    constructor(){
        this.name = 'aravind'//------------------------4

    }
}
class Child extends Parent{
    constructor (){//---------------------------------2
        super()//-------------------------------------3
        console.log(this.name)//-----------------------5    and print aravind
        this.name = 'naveen'//-------------------------6     update to naveen
    }
    getName(){//---------------------------------------8
        console.log(this.name)//-----------------------10     and print naveen
    }
}
let child1 = new Child()      ///--------------------------invoke1
child1.getName()//---------------------------------------7


*/  



/////////////////////////////////////////////////////////////////////////////////////////////////////
//---------------------------------------------problem on credit user---------------------------------



class CreditUser{
    constructor(n, e, ph, a){
    this.name = n
    this. email = e
    this.PhoneNumber = ph
    this.UsedUpAmount = a
    }
    getPendingBill(){
        return this.UsedUpAmount;
    }
    isTransactionAllowed(Amount){
        if (this.UsedUpAmount + Amount > 200000){
            console.log ('trasaction Declained')
        }
        else{
            this.UsedUpAmount += Amount
            console.log ('transaction Success') 
        }
        
    }
}

let user1 = new CreditUser('puru', 'puru2gmail.com', 545465, 30000)
user1.getPendingBill()
user1.isTransactionAllowed(160000)