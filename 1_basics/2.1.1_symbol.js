// Just an example of symbols
const id = Symbol("myUniqueKey");

user = {
    //obj cretn
    name : "Manan",
    [id] : 42,
    age :29
};
console.log(user);
console.log(user.age);
console.log(user[id]);

//Two vars with same sybol declrn are never equal

let arsh = Symbol("emma")
let udhav = Symbol("emma")
if(udhav == arsh) console.log("they are equal");
else {console.log("they arent")}