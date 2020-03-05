const array = [12,5, 5 , 8, 71, 89, 21];
// const part = array.slice(3,6);
const removed = array.splice(3,2,1001,2001);
console.log(removed);
// console.log(part);
 console.log(array);

 const together = array.join(" ");
 console.log(together);