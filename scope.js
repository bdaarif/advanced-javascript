let bonus = 25;

function sum(first,second){
    let result = first+second+bonus;
    console.log(result);
    if(result>10){
        var mood = "i'm happy";
        mood = "i'm sad";
        mood = "i'm hi";
        mood = "i'm dim";
        console.log(mood);
    }

    var day = "friday";
    console.log(day);
    console.log(mood);
    return result;

}
const output = sum(3,7);
console.log(bonus);
console.log(output);
