// Array in JS stores values based on index whereas obj in JS stores in form of keys and values here keys is replaaced by indices of array
 let arr = ["Nishant" , "Manan" , "INstagram"];
 console.log(arr);
 console.log(arr[0]);

 let nums = [1,3,5,2,19];

 //for of loop
 for(let elem of arr){
    console.log(elem.toUpperCase());
 }

let sum; // if val not defined this will show undefined
sum++; // if any operator applied it becomes Nan
// console.log(sum);

//For in loop
let sum1 =0;
 for(let elem in nums){
    sum1 += elem;
 }

 let average = sum1/nums.length;
 console.log("average of nums is:" ,average);
 console.log(`average of nums is: ${average}`);


 //QUE2:

 let itemPrice = [250 , 650 , 300 , 900 , 50];
 for(let i = 0 ; i < itemPrice.length ; i++){
    itemPrice[i] -= (itemPrice[i] * 0.1);
 }
 console.log(itemPrice); 