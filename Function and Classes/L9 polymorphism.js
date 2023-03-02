///-------------------------------Method Overridding-------------------------------------------------

//example 1



class one{
    sayHello(){                        //------------------------------method - 1
        console.log("hellow from one")
    }
    

}
class Two extends one {                                 //----------------------extents one
    sayHello(){                             //----------------------------- method 2-----execute method 2
        console.log("hello from two")
    }
}
class Three extends one{
    sayHello(){                             //----------------------------- method 2-----execute method 2
        console.log("hello from wo")
    }
}
let t2 = new Two()
let t3 = new Three()

t2.sayHello()
t3.sayHello()




/////////////////////////////////////////////////////////////////////////////////////////////

