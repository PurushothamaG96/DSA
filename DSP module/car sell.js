let fs = require("fs");
let data = fs.readFileSync("./HMS module/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}




// let no_of_cust = parseInt(readLine)
// let array = []
// for (let i = 0; i < no_of_cust; i++){
//     let temp = parseInt(readLine())
//     if(temp >= 900000){
//         array.push(i)
//     }
// }
// if(array.length > 0){
//     for(let i = 0; i < array.length; i++){
//         console.log(array[i])
//     }
// }
// else{
//     console.log(-1)
// }

class  CarSell {
    constructor(t){
        this.action = t
    }
    getPromisingCustomers(amount, index){
        let parsentage = (amount/ this.action)*100
        if(parsentage >= 90){
            flag = true
            console.log(index)
        }
    }
}
let seller = new CarSell(1000000)
no_of_cust = parseInt(readLine())
let flag = false
for (let i = 0; i < no_of_cust; i++ ){
    let amount = parseInt(readLine())
    seller.getPromisingCustomers(amount, i)
}
if(flag == false){
    console.log(-1)
}





// class CarSell{
//     constructor(){
//         this.boughtPrice = 1000000;
//         this.sellingPrice = parseInt((90 * 1000000) / 100);
//     }
//     getPromisingCustomers(customer){
//         if(customer >= this.sellingPrice){
//             flag = "Yes"
//             return flag;
//         }
//     }
// }
// let testCase = parseInt(readLine());
// let flag = "No";
// let car = new CarSell();
// for(let i=0;i<testCase;i++){
//     let customer = parseInt(readLine());
//     let result = car.getPromisingCustomers(customer);
//     if(result == "Yes"){
//         console.log(i);
//     }
// }
// if(flag =="No"){
//     console.log(-1);
// }
