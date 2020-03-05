const borgo = [2,3,4,5,6,7];
const output = [];
for(let i =0; i < borgo.length; i++){
    const element = borgo[i];
    const result = element * element;
    output.push(result);
}
console.log(output);
const result =  borgo.map(function(element){
    return element * element;
})
console.log(result);
const result1 = borgo.map(x=>x*x);
console.log(result1);

const smaller = borgo.filter(x => x<5);
console.log(smaller);
const bigger = borgo.find(x => x>5);
console.log(bigger);
