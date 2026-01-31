let str = "   Manan Punia";
console.log(str); // spaces also included
console.log(str.length);
console.log(str[9]);
 
/* TEMPLATE LITERALS IN JS : a way to have embedded expressions in thestrings 
    can be done with the help of back ticks*/

    let literal = `This is a string literal`;
    console.log(literal);

/* STRING INTERPOLATION :
    the pehnomenon to create strings by substiotion of place holder i : e ${expression};*/

    let obj = {
        name : "Rolce Royce",
        type : "car",
        engine : "V6",
        core : 4
    }

    console.log("I have a " , obj["name"] , "it is a" , obj.type , "it has a ", obj["engine"] , "and have" , obj.core , "cores");
    console.log(`I have a ${obj.name} and have ${obj.core} tyres i can also do ${1+2+3}`);

    // note here when using obj.core in a normal string it is number so while priinting it, it highlights meaning it is different from string , but while using it as a templaate literal it acts as a string itself


// IMPORTANT FOR INTERVIEWS: ESCAPE CHARCTERS

//Escape charactes are some special charctes in js that give some spaces like new line or tab 
let newline = "Manan\nPunia";
let tabboo = "Manan\tPunia";
console.log(newline);
console.log(tabboo);

//In case u r wondeing what woulf be the length of newline and tabboo it wont be 13 but 12 as though "\" & "n" in \n individually are two seperate characters but they sount as 1 as a combined escape charcter 😿😿pta ni shradah bhabi ne toh yhi kha tha but ye inko count hi ni krra 11 hi len dikha ra hai dono ki lol

console.log(tabboo.length)


//STRING METHODS
/*  .toUpperCase() = change all the char to lower case
    .toLowerCase() = change all the char to lower case
    .trim() = trims all the white spaces  at start or end
    NOTE: 1. any of these methods doesnt omit the original string literal but returns a new string value only
          2. most of the string methodds are also in camel case like toUpperCase , to LowerCase etc*/

console.log(newline.toUpperCase());
console.log(str.trim());

/*  .slice(startIndex , endIndex); = returns a part of str from given indexes if only one start index is given then it reurns a string from startInex to st.length-1(index) , if anything not given then returns full string

    str1.concat(str2) = concat 1 string to another

    .replace(oldVal , newVal) = replaces q val to another 
                    NOTE: generally strings are immutable u cant just change any value of string like this str1[0] = 9 this will throw an err so u have to use this merhod

    .charAt(index) */


    //EX:
    let user = prompt("Enter ur name");
    console.log(`Username genrated: \n${"@" + user.toLowerCase() + user.length} `);