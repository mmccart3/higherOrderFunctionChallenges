// Challenege 1
function display(p1) {
    console.log(p1)
}

function higherOrder(myText, fn) {
    for (let index = 0; index < 5; index++) {
        fn(myText);
    }   
}
higherOrder("Hello Code Nation",display);

// Challenge 2
function add(num1, num2) {
    return num1 + num2
}

function cum(num1,num2,fn) {
    total = 0;
    for (let index = 0; index < 5; index++) {
        total = total + fn(num1,num2);
    }
    return total;
}

console.log(cum(2,2,add));

// Challenge 3

function multiplyByThree(num1) {
    return num1 * 3;
}

let timesTables = [1,2,3,4,5];
let threeTimesTables = timesTables.map(multiplyByThree);
console.log(threeTimesTables);


//challenge 4

const multiply = (a,b) => {
    return a*b
}

const addition = (a,b) => {
    return a+b
}

const divide = (a,b) => {
    return a/b
}

const subtract = (a,b) => {
    return a-b
}
const doMath = (num1) => {
    return (num2, fn) => {
        return fn(num1,num2)
    }
}

console.log(doMath(2)(3,multiply));

