// function addTwo(n) {
//   console.log("long time ");
//   return n + 80;
// }

// let add = addTwo(5);
// console.log(addTwo(5));
// console.log(addTwo(5));
// console.log(addTwo(5));

let cache = {};
function memoiezedAddTwo80(n) {
  if (n in cache) {
    return cache[n];
  } else {
    console.log("long time ");
    cache[n] = n + 80;
    return cache[n];
  }
}
console.log(memoiezedAddTwo80(5));
console.log(memoiezedAddTwo80(5));
console.log(memoiezedAddTwo80(5));
console.log(memoiezedAddTwo80(5));
console.log(memoiezedAddTwo80(5));
console.log(memoiezedAddTwo80(5));
console.log(memoiezedAddTwo80(5));
console.log(memoiezedAddTwo80(5));
