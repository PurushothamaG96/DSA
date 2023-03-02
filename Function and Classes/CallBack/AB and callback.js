let a = 70                              ///-------------------1
let b = 30                              ///--------------------2
function cb(total){                     ///--------------------6
	console.log("this is from cb", total)    /// this will be execute----------7
}
function callBack(a,b){                   //------------------------4
	return cb(a + b)                        // this will invekes the cb function----5
}
callBack(a, b)                  ///--------------------------------3