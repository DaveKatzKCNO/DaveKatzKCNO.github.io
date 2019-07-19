/**
 * VARIABLES (table of contents):
- Variables
- Declaration and assignment
- var, let, const
- Hoisting
*/


/** 
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables are named identifiers that can point to values of a particular type, like: 
* Numbers,
* Strings,
* Booleans,
* Arrays,
* Objects,
* or another data-type.  Variables are called so because once created, we can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized it to anything. All we've done so far is declared that the variable 'myName' exists.
*/
console.log(myName); // prints => undefined

// 2. assignment //
// The = symbol is known as the assignment operator. It assigns values to variables. Below is the proper syntax to assign the value John to the variable 'myName
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

//4. initialization//
//A nifty way to speed up the whole "this variable exists and this is its value" thing is to initialize your variable out the gates. Below is the proper syntax:
var thisStudy = 'Variables';
console.log(thisStudy);

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/** 
 * VAR, LET, CONST
 * 
 * 0. We know that we can store values in a program's memory by assigning them to variables using the keyword var. But, there are actually two other keywords we use to store values - let and const. 
 * 1. Syntactically, let and const are declared and initialized the same as var. 
 * 2. However, these variables behave differently. There are three properties that define how they'll behave: reassignment, scope, and hoisting.
 */

/**
 * Reassignment of var, let, const
 * 
 * var and let values can be re-assigned while const variables cannot. eg
 * 
 */ 
var myFavPlayer = 'AD';
myFavPlayer = 'Zion';
console.log(myFavPlayer); //--> prints 'Zion'

let barry = 'Hurricane';
barry = 'Tropical Storm';
console.log(barry); //--> prints 'Tropical Storm'

//below we deem the constant "hometown" to equal KC. If we try to reassign it, our code breaks.
const hometown = 'KC';
//hometown = 'Nola'; // --> throws a TypeError: assignment to constant variable

/**
 * Scoping of var, let, const
 *
 * A "scope" in coding terminology refers to the space in which certain variable can be used after it's been declared. Global scope is the space we start coding in in the beginning when learning to code. Once we learn to use code blocks in if statements, functions and loops, we see block scoping. Certain variables declared in certain types of code blocks will only be accessible in that code block.
 * 
 * 0. All three types of variables ( var, let, const ) are scoped to functions. This means any var created in a function will be "stuck" there - we can't access it, use it, etc. outside of that function.
 * 
 * 1. let and const values are scoped to any code block - so when they're created in functions, loops, and if statements they can only be accessed in those realms.
 */

function foo(){
  var x = 10;
  let y = 12;
  const z = 15;
}
/*
console.log(x); // throws reference error (x not defined)
console.log(y); // throws reference error (y not defined)
console.log(z); // throws reference error (z not defined)
*/

if (true){
  var a = 9;
  let b = 11;
  const c = 14;
}
/*
console.log(a); //prints 9
console.log(b); //throw ref error (b not defined)
console.log(c);// throws ref error (c not defined)
*/

for (var i = 0; i < 10; i++){
  var d = 8;
  let e = 9;
  const f = 13;
}
//console.log(d); //prints 8
//console.log(e); //throw ref error (e not defined)
//console.log(f);// throws ref error (f not defined)

/**
 * HOISTING
 * 
 * 0. Remember how code in javascript is executed from top to bottom? Say we've written an entire program but need to add a variable to it that will be used at certain points earlier in the code. Well hoisting allows just that - certain types of variables will have their declarations conceptually dragged to the top of the code so that they can be used at any point later.
 * 
 * 1. When javascript runs, it initially scans the entirety of the code to find this kind of info that should be globally available and hoists it to the top. Functions are also hoisted.
 * 
 * 2. Note that only the declaration, not the initialization is brought to the top.
 * 
 * 3. Of the three types of variables we're covering, only var is hoisted. That means you can use a var in your code, functions, etc. at any point as long as you declare it later. It won't throw a reference error. 
 * 
 * 4. const and let are not hoisted.
 * 
 * Examples:
 */

//ex1
console.log(x); //--> prints undefined (NOT ref error)
var x = 10; //--> the declaration that var x exists is hoisted to top
console.log(x); //--> prints 10

//ex2
//console.log(y); //--> throws ref error, y is not defined
let y = 20; //--> the declaration that let y exists is not hoisted to top
console.log(y); //--> prints 20

//ex3
let message = '';

let weather = 'sunny'
if(weather === 'cloudy') {
  message = "nice day if you're a duck!";
} else if (weather === 'sunny') {
  message = "nice day, eh?"
}
console.log(message); // --> prints 'nice day, eh?' because variables without variable type are hoisted to the top
