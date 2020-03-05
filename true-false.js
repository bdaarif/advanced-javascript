// FALSE VALUE : 
// 0
// ""
// null
// undefined
// NaN
// false

// TRUTHY VALUE:
// "0"
// " "
// true
// []
// {}


// Without 0 (it's falsy) , all number is truthy-------------
let karim ;
console.log(karim);
const age = 5;
if (age){
    console.log("this is true");
}
else{
    console.log("this is not true");
}
// without empty string ("")(it's falsy) ,all string truthy ----------
const name = true;
if(name){
    console.log("this is not empty string");
}
else{
    console.log("this is empty srting");
}