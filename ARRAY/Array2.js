//Methods and properties of array
//Lets learn some practiccal use of array: as array arent immutable so there exists two types of methods in the array ie  1. that change the entire array and   2. that return new value

let games = ["Into the dead 2" , "Free Fire" , "Dead Target"];
games.push("Overflow");
console.log(games);
let val = games.pop(); //deletes and pops last val
console.log(games);
console.log(`deleted val from end :${val}`);

//Unshift and Shift : these adds and delte from start Shift also retruns 

games.unshift("Sekiro");
console.log(games);
let cal = games.shift();
console.log(games);
console.log(`Deleted val from start: ${cal}`);

//gives a new value:

//toString: changes array to string
console.log(games.toString());

//Concat : concantes two or more array

let marvel = ["Ironman" , "Hulk" ,"BlackWidow" ];
let marvelVillains = ["Dr Doom" , "Kraven" , "Kin Pin"];
let dcHeros = ["Batman" , "Superman" , "WonderWoman"];

let fictionCharacters = marvel.concat(marvelVillains , dcHeros , marvel);
console.log(fictionCharacters);

//SLICE method : returns part of array .slice(startIndex , endIndex -1);
let val1 = fictionCharacters.slice(1 , 3); //will remove char from index 1 and 2
console.log(val1);




//SPLICE method: it is a multiuse element which changes original array u can add , replace elem from the array
// Working : splice(start: number, deleteCount ,  number to be replaced (if any) , number to be replaced (if any)....) and u know wht IT ALSO RETURNS VALUES TOO, WTF IS GOIN ON

let nums = [12 ,20 , 30 ,40 , 50 , 60 , 70 ,90];
//Normal usage:
nums.splice(1 , 1 , 101 ); //here at index 1 , 1 number is deleted (30) , instead of that 101 is placced
console.log(nums);

//add number
nums.splice(1 , 0 , 102);
console.log(nums)

//del elem
nums.splice(3 , 2);
console.log(nums);


//QUE1:
let listOfCompanies = ["Bloomberg" , "Google" , "Microsoft" , "Uber" , "IBM" , "Netflix"];
listOfCompanies.shift();
listOfCompanies.splice(2 , 1 , "Ola");
listOfCompanies.push("Amazon");

console.log(listOfCompanies);