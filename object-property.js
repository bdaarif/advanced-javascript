const student = [
{ name:"kd", id : 12},
{ name:"kt", id : 14},
{ name:"ky", id : 16},
{ name:"kg", id : 18}

];
const Names = student.map(s => s.name);
const ID = student.filter(s => s.id>12);
const one = student.find(s => s.id>14);


console.log(Names);
console.log(ID);
console.log(one);