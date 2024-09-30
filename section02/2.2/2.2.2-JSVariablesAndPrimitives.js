// create a constant variable called "name" that references a string
const name = "John";
// create a reassignable variable called "favoriteSong" that references a string
let favoriteSong = "Blue in Green";
// create a reassignable variable called "wage" that references a number
let wage = 0;
// create a variable called "age" that references a number, should it be reassignable?
let age = 101;
// create a variable called "onlyChild" that references a boolean
const onlyChild = false;
// create a variable called "satisfied" that references a boolean
let satisfied = true;
// print the types of two variables that reference two different data types (typeof)
console.log(typeof satisfied);
console.log(typeof wage);
// create a variable called "favoriteThing" that references ANY primitive value
// print the data type of "favoriteThing"
let favoriteThing = "music";
console.log(typeof favoriteThing);
// You heard a new song that became your favorite.
// Reassign the variable "favoriteSong"
favoriteSong = "flavor of the week song";
// You no longer like the type of data stored in "favoriteThing"
// Reassign "favoriteThing" to a different primitive data type and print its type
favoriteThing = 42;
console.log(typeof favoriteThing);
// Happy Birthday!
// Reassign "age" to a new value
age = 102;
// You got a big raise at work.
// Reassign "wage" to a new value
wage = 10000000;
// Your raise changed your job satisfaction.
// Assign "satisfied" to true
satisfied = true;
// use "console.log()" and "+" to print a sentence that includes two of the above variables
console.log("I am " + age + " years old. My name is " + name + ".");
