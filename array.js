// map()
const myArray = [1, 2, 3, 4];
const newArray = myArray.map((el) => el + 1);
const newArray1 = myArray.map(() => "b" + 1);
// console.log(newArray1);

let arr = [45, 23, 21];
let a = arr.map((value, index, array) => {
  // console.log(value + 1, index, array);
  return value + index;
});
// console.log(a);

/*----------------------------filter()--------------------------------------------------------*/
let arr2 = [45, 23, 21, 0, 3, 5];
let a2 = arr2.filter((a) => {
  return a < 10;
});
// console.log(a2);

// /*----------------------------- reduce()---------------------------------------------------*/
let arr3 = [1, 2, 3, 5, 2, 1];
let a3 = arr3.reduce((h1, h2) => {
  return h1 + h2;
});
// console.log(a3);

// find();

let arr5 = [1, 2, 3, 4, 5, 6, 7, 89];
let arr5p = arr5.find((el) => el === 5);
console.log(arr5p);
let arr5cl = arr5.find((el) => el < 4);
console.log(arr5cl);

const peopleArray = [{ id: 1 }, { id: 4 }, { id: 7 }];

let pa = peopleArray.find((person) => person.id === 4);

console.log(pa);

// includes();

const arr4 = [1, 2, 3, 4, 5];

let a4 = arr4.includes(3);
a4 = arr4.includes(9);
// console.log(a4);
let a5 = arr4.includes(5, 2);
// console.log(a5);
// let a6 = arr4.includes({ id: 1 });
// console.log(a6.arr4);
