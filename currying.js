//currying
const multiply = (a, b) => a * b;

console.log(multiply(3, 4));

const curryingMultiply = (a) => (b) => a * b;
const curryingmultiplyBy5 = curryingMultiply(5);
console.log(curryingmultiplyBy5(4));
