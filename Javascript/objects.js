let student={
    name:"John",
    age:30,
    city:"New York"
};
console.log(student.name);
console.log(student.age);
console.log(student.city);
let numbers=[23,12,43,13];
console.log(numbers);
console.log(numbers[0]);
let mixedArray=[32,"Anshika",54,{name:"Alice"},[1,2,3]];
console.log(mixedArray[0]);
console.log(mixedArray[1]);
console.log(mixedArray[2]);
console.log(mixedArray[3]);
console.log(mixedArray[4]);
//map
let newArray=[1,2,3,4,5];
let squaredArray=newArray.map(num=>num*num);
console.log(squaredArray);

let price=[24,23,12,43];
let newPrice=price.map(price=>price+price);
console.log(newPrice);
const add=(a,b)=>a+b;
console.log(add(2,3));//arrow function
function pro(x,y){//function declaration
    return x*y;
}console.log(pro(34,2));

let divide=function(x,y){
    return x/y;
};console.log(divide(10,2));
let  multiply=function(m,n){//function expression
    return m*n;
}
console.log(multiply(2,4));
