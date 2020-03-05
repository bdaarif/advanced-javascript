function add(n1,n2){
    console.log([...arguments]);
    return n1 + n2 + arguments[2];
}
const result = add(2,5,7,6);
console.log(result);