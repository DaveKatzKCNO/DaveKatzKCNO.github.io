/**
 * STRING MANIPULATION
 * 
 * Table of contents:
 * 
 * 1. With Operators
 * 2. With string Methods
 * *  .length
 * *  retrieve a specific character
 * *  .slice
 * *  .replace
 * *  .toLowerCase
 * *  .toUpperCase
 * * 
 * * 
 */



/** String Manipulation - What's the deal?
 * 
 * 0. We can use operators and methods in Javascript to alter
 *    alter original strings and return new strings. 
 * 
 * 1. This can be useful in working with data that changes
 *    and requires us to present new messages to people that
 *    dynamically responds to other inputs.
 *  
 */


/**
 * MANIPULATING STRINGS WITH OPERATORS
 * 
 * As if we were stacking up building blocks, we can
 * concatenate and split up strings with the arithmetic 
 * operators + and +=.
 * 
 * 1. +
 * 2. +=
 * 
 */

//example with +
var firstName = 'Dave';
var lastName = 'Katz';
var fullName = firstName + ' ' + lastName;
console.log(fullName); // prints 'Dave Katz'

//example with +=
var greeting = 'Hello';
var audience = 'World';
greeting += ' ' + audience; // += reassigns the value of greeting
console.log(greeting); //prints Hello World


/**
 * USING STRING METHODS
 * 
 * Just by using the String datatype, there are a host of 
 * characteristics built into the background of Javascript.
 * These are following methods that are important in manipulating
 * strings.
 * 
 * *  a) .length
 * *  b) retrieve a specific character
 * *  c) .split
 * *  d) .slice
 * *  e) .replace
 * *  f) .toLowerCase
 * *  g) .toUpperCase
 * * 
 * 
 */


// .length returns the number of characters in the string
console.log(firstName.length) // prints 4 - the number of characters in the string variable firstName, which is dave

//use bracket notation to return a specific character from a string
console.log(firstName[2]); //prints 'v' (firstName is Dave)

//Use .split(str, num) to Split a string into substrings using the specified separator and return them as an array.
console.log(firstName.split('')); // prints ['D', 'a', 'v', 'e']
//syntax = String.split(separator: string | RegExp, limit?: number)
console.log(greeting.split(' ', 2)) //prints ['Hello', 'World']

var str = "whats up man?";
var word = "elephants";
var bigWord = 'I AM BIG';

//use .slice(x, y) to returns a section of a string. 
//the first param is the index to start at, the second it where it ends.
console.log(str.slice(0, 4)); //prints 'what'

//use .replace(x, y) to identify a string or a portion of a string you'd like to replace with another (delineated in param2)
console.log(word.replace('ants', 'ones')); //prints elephones instead of elephants

//use .toLowerCase() to make all alphabetic characters a string lower case
console.log(bigWord.toLowerCase());// prints 'i am big'

//use .toUpperCase() to put a string in upper case
console.log(str.toUpperCase()); //prints 'WHATS UP MAN'