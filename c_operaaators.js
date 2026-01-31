//Needs 2 operand
//Arithmetic : 
let a = 5 , b =2;
console.log("a+b" , a+b);
console.log("a-b" , a-b);
console.log("a*b" , a*b);
console.log("a/b" , a/b);

console.log("a%b" , a%b); //modulus 
console.log("a**b" , a**b); //exponential a^b

//Needs 1 operand
//Unary operator :  -- , ++ , a = -a , logical not(!) , bitwise not(`) , sizeof() , address (&) , derefernce(*p = 20)
console.log("a++" , a++);
console.log(a);
console.log("--a" , a);

//Assignement operator : = , += , -= , *= , %= , **=
a = 2;

//Comparison operator comparision : == , equalto & tyupe : === , notequalto : != , notequalto and type : !== , >= , < , >  , <=


//Logical Operator: used to combine condition always give true or false reuslt : logical and , not , or : &&, ! , || 

// TERNARY OPERATOR : condition ? result if true : result if false; not 
9 > 6 ? console.log("yes") : console.log("no");



//EXCEERCISE    
//1:
let num = prompt("Enter a number");
if(num % 5 == 0) console.log("it is a multiple");
else console.log("Not a multiple😿");


//2

let score = prompt("Enter your score");
if(score >= 90 && score <= 100) console.log("A");
else if(score >=80 && score < 90) console.log("B");
else if(score >=60 && score < 80) console.log("c");
else if(score >=40 && score < 60) console.log("D");
else console.log("Fail");
