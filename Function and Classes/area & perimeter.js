let fs=require("fs")
let data=fs.readFileSync("./stock module-1/edit.txt","utf-8")
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}




/*Area and Perimeter of the Circle - Classes Practice Problems
Design a Cirlce class which has 2 methods. One which calculates area of the circle and one which calculates circumference of the circle. Please use the pi value as 3.14.
 For any infeasible radius r, please return the area and circumference as 0

Your class should be named Circle. Method to get area should be named getArea. 
Method to get circumference should be named getCircumference.

Input
One line containing an integer denoting the radius.

Output
2 lines containing integers. First line containing the area of the circle. Second line containing the circumference of the circle. If the output is a float number, return the ceil of it.

Example
Input:

5
Output:

79
32
First line in input is radius which is 5. Area is 5*5*3.14 which is ceil(78.5) = 79, which is the first line of the output.
 Circumference is 2*3.14*5 which is ceil(31.40) = 32, which is the second line of the output.*/

 /*class Circle{
    constructor(radius){
        this.radius = radius
    }
    getArea(){
        return Math.ceil(this.radius* this.radius * 3.14)
    }
    
    getCircumference(){
        return Math.ceil(this.radius * 2 * 3.14)
    }
    
    
 }
let oneCircle = new Circle(parseInt(readLine()));
console.log(oneCircle.getArea());
console.log(oneCircle.getCircumference());*/


class Circle{
    constructor(radius) {
        this.radius=radius
    }
    getArea() {
        if (this.radius > 0) {
            return Math.ceil(this.radius * this.radius * 3.14)
        } else {
            return 0
        }
    }
    
    getCircumference() {
        if (this.radius > 0) {
        return Math.ceil(2 * 3.14 * this.radius)
    } else return 0
    }
}
let oneCircle = new Circle(parseInt(readLine()));
console.log(oneCircle.getArea());
console.log(oneCircle.getCircumference());