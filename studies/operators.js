/**
 * OPERATORS!
 * 
 * Table of contents:
 * 
 * Arithmetic operators
 * Comparison operators
 * Assignment operators
 * Logical operators
 * Unary operators (!, typeOf, -)
 * Ternary operator (a ? b : c)
 */



/** Operators - What's the deal?
 * 
 * 0. Operators act on our data - they change them, compare them, assign them, include them in arithmetic operations. They allow us to alter our data expressively.
 * 
 * 1. Operators are classed by what they do and how many operands they require.
 * 
 * 2. An operand is a value that is acted on by an operator. 
 * Unary operators only work with one value, binary operators work with two, ternary use three.
 * 
 * 3. The types of operators are as follows:
 * * Assignment operators
 * * Arithmetic operators
 * * Comparison operators
 * * Logical operators
 * * Unary operators (!, typeOf, -)
 * * Ternary operator (a ? b : c)
 */


//****** BINARY OPERATORS ******//

//****** ARITHMETIC OPERATORS ******//
/**
 * Remember 1st grade? 
 * It's back, baby. javascript can handle pretty basic and pretty not-so-basic math easily, and arithmetic operators should all look familiar.
 * 
 *  + //--> addition
 *  - //--> subtraction
 *  * //--> multiplication
 *  / //--> division
 *  % //--> modulo (finds the remainder after division)
 *
 */

//aritmetic operators examples//
console.log(20 + 400); //prints 420
console.log(20 - 400); //prints -380
console.log(4 * 20 / 8); //prints 10 because PEMDAS
console.log(14 % (3+4)); //prints 0

//****** COMPARISON OPERATORS ******//
/**
 * Comparison operators compare the operands on either side and evaluate them to boolean result (true or false).
 * They are used in if statements, for loops, and waaay more.
 * And you'll be using these puppies with more than just numbers. You can verify if strings are equal to each other, for instance.
 * 
 *  >   //--> greater than
 *  <   //--> less than
 *  >=  //--> greater than or equal to
 *  <=  //--> less than or equal to
 *  === //--> 'strictly equals' 
 *  ==  //--> 'loosely equals'
 *  !=  //--> does not equal
 *  !== //--> strictly does not equal
 */

//comparison operators examples//
console.log (4 > 8); // prints 'false'
console.log ('heyo' === 'heyo'); // prints 'true'
console.log (5 === '5'); // prints 'false'; compares value AND type.
console.log (5 == '5') //prints 'true'; Honestly, don't use the loose comparison operator, it has lots of strange exceptions and characteristics.

//****** ASSIGNMENT OPERATORS ******//
/**
 * The most basic version of assignment operators is what we use to assign a value to variables. It takes the operand on the left and assigns it the value of the operand on the right. 
 * 
 *  = // --> your basic assignment operator
 *  += //--> add right operand to left, assign result to left
 *  -= //--> subtract right operand from left, assign result to left
 *  *= //--> multiply right operand by left, assign result to left
 *  /= //--> divide right operand into left, assign result to left
 *  %= //--> modulus right operand into left, assign result to left
 * 
 */

//assignment operators examples//
var a = 10;
console.log(a); //prints 10

a += 15;
console.log(a); //prints 25

a -= 5; //the same as saying: a = a - 5;
console.log(a); //prints 20

a /= 20;
console.log(a); // prints 1

//****** LOGICAL OPERATORS ******//
/** 
 * These are the AND and OR operators.
 *
 * && // --> "and"; the statement will only equate true if both sides of this operator are true.
 * 
 * || // --> "or"; the statement will equate true if at least one of the sides of this operator are true.
 */

//logical operator examples//
var dave = 'learnin';
var codeCamp = 'challenging';
if (dave === 'learnin' && codeCamp === 'easy'){
  console.log('both are true');
} else {
  console.log ('dave is just learnin');
} //prints 'dave is just learning' because only one side of the if statement is true

if (dave === 'learnin' || codeCamp === 'easy'){
  console.log('at least one is true');
} else {
  console.log ('neither are true');
} // prints 'at least one is true


//****** UNARY OPERATORS ******//
/**
 * These take only one operand and can perform very specific actions. 
 * 
 * typeof <operand> //--> returns the data type of the value as a string
 * (!operand) //--> the !bang operator flips the truthiness value - used primarily as a 'not'
 * -number //--> makes numbers negative
 */

//Examples with typeof operator
var object ={
  firstName: 'Dave',
  lastName: 'Katz',
  hobby: 'chillin',
  intoStuff: 'yup'
}
console.log (typeof object); //--> prints 'object' to the console

var isCloudy = true;
console.log(typeof isCloudy);

//Examples with !bang operator
if (!isCloudy){
  console.log ('it aint cloudy');
} else {
  console.log ('where da sun at?')
} //prints 'where da sun at' because we established that isCloudy is true earlier, and if that's flipped, we result in the default log.

//Examples with -number operator 
var i = 1;
console.log(-i);//prints -1
var j = 'dave';
console.log(-j); //prints NaN

//****** TERNARY OPERATORS ******//
/**
 * Ternary operators take, you guessed it, three operands! 
 * Below is the syntax for a super quick way to run an if-else statement  
 * 
 * (a ? b : c) // --> condition ? exprIfTrue : exprIfFalse,
 * a. where condition is the expression whose value is used as a condition
 * b. where exprIfTrue is the expression to be evaluated if the condition evaluates to a truthy one
 * c. where exprIfFalse is an expression to be executed if the condition is falsy
 *
 */
//example using ternary operator
function sayHi(isFriend){
  return (isFriend ? "Hey Buddy!" : "Wait who are you");
}
console.log(sayHi(true)); //prints "Hey Buddy!"
console.log(sayHi(false)); //prints "wait who are you"
