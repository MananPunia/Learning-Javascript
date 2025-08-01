function getVal(val){
    if(0 <=val && val<= 100){
        if(25 < val&& val <=75) return "practice more(as u are an asian)"
        else if(val <= 25) return "koi na arts leliyo"
    }
    else return "BJ di thi kya"
}

// let val = Number(prompt("Enter ur marks to be judged"));


console.log(getVal(101))


// ROCK PAPER SCISSOR logic
//btw to take input I just installed prompt-sync library

let person1 , person2;
const prompt = require('prompt-sync')();
person1 = (prompt("What did person 1 threw: "));
person2 = (prompt("What did person 2 threw: "));

function RPS(person1 , person2){

        if (person1 == person2) return "draw";

        if(person1 == "rock" && person2 == "scissors") return "person 1 wins";
        else if(person1 == "paper" && person2 == "rock") return "person 1 win";
        else if(person1 == "scissors" && person2 == "rock") return "person 1 wins";
        else return "person2 wins"
}

console.log(RPS(person1 , person2));


//Switch

let x =2;
switch(x){
    case 1 : 
        console.log("1");
        break;
    case 2 : 
        console.log("2");
        break
    case 3 : 
        console.log("3");
        break
}