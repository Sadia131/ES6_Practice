function add(num1, num2 = 10){ //es6
    //num2 = num2 || 10;
    return num1 + num2;
}
//const total = add(14);
const total = add(14, 1);
console.log(total);