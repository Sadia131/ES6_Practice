// function doubleIt(num){
//     return num * 2;
// }

// const doubleIt = function(num){
//     return num * 2;
// }

const add = (x, y) => x+y;
const give6 = () => 6;
const doubleIt = num => num * 2; // es6

//multiline arrow function
const doMath = (x, y) => {
    const sum = x + y;
    const multiply = x * y;
    const sub = x - y;
    const result= (sum + sub) * multiply;
    return result;
}
const result3 =doMath(5, 2);
console.log(result3);


//const result = doubleIt(5);
const result = add(80, 70);
const result2 = give6();
console.log(result2)