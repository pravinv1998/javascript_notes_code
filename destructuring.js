// array destructuring

// let arr = ["pravin", "vargad", 22];
// let [fname, lname, age] = arr;

// console.log(age, lname);

///////////////// onject destructing
// let mydata = {
//   fname: "pravin",
//   lname: "vargad",
//   age: 22,
// };

// console.log(mydata.fname);

// let { fname, lname, age } = mydata;

// console.log(fname);

// ============================================================
// object properties
// const fname = " firstname ";
// let mydata = {
//   [fname]: "pravin",
//   lname: "vargad",
//   age: 22,
// };

// console.log(mydata);

// no need to write same vslue and key

let fname = "pravin";
let age = 22;

const mydata = { fname, age };

// object loops
console.log(Object.values(mydata));

console.log(Object.entries(mydata)); // convert obj in array
let arr = Object.entries(mydata);
console.log(Object.fromEntries(arr)); //  convert array in object
