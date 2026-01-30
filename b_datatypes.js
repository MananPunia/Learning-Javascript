/**
 Primitive : Int , Boolean  String , Null , Undefined , big int , symbol (7types)
*/

//Non Primitive : object (further divided into arrays and all)

const profile = {
    username : "manan.whynot",
    followers: 175,
    following: 247,
    isfollowing : true
}
console.log(profile["username"]);
console.log(profile);
// fun fact here profile obj is const but u can change any component in profile but it wont affect so u have to change all the collection of object ie full address of it

profile["username"]= "hindustan";