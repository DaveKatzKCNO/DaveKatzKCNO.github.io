/**
 * DATATYPES
 * 
 * Table of Contents:
 * 
 * 1. Number
 * 2. String
 * 3. Boolean
 * 4. Array
 * 5. Object
 * 6. Function
 * 7. undefined
 * 8. null
 * 9. NaN
 * 10. Infinity and -Infinity 
 * 11. What is the difference between primitive/simple and complex data types?
 * 12. Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. 
 *      What does that mean, and how are they different?
 */

/**
 * Datatypes - What's their deal?
 * 
 * 0. We learned in the last section that you can assign values to variables so that those 
 *    values can be accessed and used throughout your code. 
 *    Now, we learn that there are different TYPES of data and they all have their own 
 *    rules and ways of behaving.
 * 
 * 1. There are two broad categories of datatypes: simple (aka primitive) and complex
 * 
 * 2. In the simple/primitive datatypes we have:
 *** a. Number
 *** b. String
 *** c. Boolean
 *** d. NaN: Not a Number // typeof NaN; --> 'number'
 *** e. undefined: no-value, incept, unitialized;
 *** f. null: no-value, nullified by a programmer;
 * 
 * 3. In the Complex datatypes, we have:
 *** a. Object
 *** b. Array (which is really just an object programmed to behave like an array)
 *** c. Function
 *
 */

//NUMBERS
//Numbers are just numeral values.
var num = 1;
var jibjab = 90;
console.log(typeof num); //--> prints number

//STRINGS
//Strings are a collection of characters between quotes
var myName = 'Dave';
var weather = 'rainy AF';
console.log(typeof weather); //--> prints string

//BOOLEANS
//Booleans come out to either true or false, let us determine the validity of certain statements and datatypes
var isCloudy = true;
console.log(typeof isCloudy); //--> prints boolean


//ARRAYS
//Arrays are collections of values as a list. They can collect any type of data. 
var array = [1, 2, 'coding', true, isCloudy];
console.log(Array.isArray(array)); //--> here's how you check if a datatype is an array. It prints the boolean true or false
/**
 * Elements are organized in arrays using a zero-based indexing system.
 * We can access the values using bracket notation and element's index, 
 * representing the element's position in the array.
 * Like so: 
 * > the value of array[0] would be '1', 
 * > the value of array[3] would be 'true'.
//

//OBJECTS
//An object is a collection of key:value pairs.
var object ={
  firstName: 'Dave',
  lastName: 'Katz',
  hobby: 'chilling',
  intoStuff: 'yeah'
}
console.log (typeof object); //--> prints object to the console

//FUNCTIONS
//Perform actions on data and return them. See the syntax below:
function foo(){
  console.log('howdy hey, your function ran');
}
foo(); //--> this is how you call or invoke a function

//UNDEFINED
//Values that are undefined. Happens when you don't assign a value to a variable, among other times.
var x;
console.log(typeof x); //--> prints undefined

//NULL
//different than undefined, Null denotes the absence of value. It's a value that's been nullified by the programmer.
let age = null; //--> we've deemed age to be empty by design

//NaN
//A Numerable type that stands for 'Not a Number'. For instance, this might happen when you try to add a string to a number.
console.log(9/'asdf') //--> prints NaN

//INFINITY
//Another special numerical datatype, this represents a  number greater than any other number.
console.log(1/0); //--> prints Infinity

//-INFINITY
//Just as above but flipped. A number less than any number.
console.log(-1/0); //--> prints -Infinity.
//Can also be referenced directly by just writing -Infinity in your code.

/**
 * THE DIFFERENCE BETWEEN SIMPLE & COMPLEX DATATYPES
 * 
 * Simple datatypes are immutable/atomic. 
 * They don't hold, collect or aggregate other values, and operations on simple values return new simple values 
 * - they don't alter the og value.
 * They copy by value - when assigning or passing, simple data-types are copied from one variable to the next.
 * 
 * Complex values aggregate other values and indefinite in size - they can be as big or small as we want. 
 * We can pass new values and properties into them.
 * They copy value by reference when assigning or passing.
 * 
 */

/**
 * COPY BY WHAT? 
 * -- WHAT IT MEANS TO COPY BY VALUE vs REFERENCE 
 * 
 * When working with all datatypes, the expressions and the operations
 * we perform on them can result in new or altered data, as is usually intended. 
 * The way the computer handles those operations differs between complex and primitive datatypes.
 * Primitive datatypes copy by value. 
 * They're dealing with immutable, simple bits of information stored in the compiler's memory. 
 * 
 * When you perform an action on a simple datatype, the computer finds where the original value 
 * is stored and physically copies it to a new place to be acted on.
 * 
 * That's why only new values are created and original values aren't altered. 
 * 
 * With more complex data, the computer still goes and finds where the values 
 * are stored in the memory, but it doesn't go through the effort of recreating 
 * that data in a new instance - it simply performs its actions on that original 
 * value and alters it.   
 * 
 */
 
 //Example of copying by reference below:
 function changeAgeAndReference(person) {
    person.age = 25;
    person = {
        name: 'John',
        age: 50
    }; 
    return person;
}
var personObj1 = {
    name: 'Alex',
    age: 30
};

var personObj2 = changeAgeAndReference(personObj1);

console.log(personObj1); // -> { name: 'Alex', age: 25 }
console.log(personObj2); // -> { name: 'John', age: 50 }

//Example of copying by value below:
var x = 10;
var y = 'abc';
var a = x;
var b = y;
a = 5;
b = 'def';
console.log(x, y, a, b); // -> 10, 'abc', 5, 'def'