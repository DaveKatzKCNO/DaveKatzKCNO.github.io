/**
 * LOOPS 
 * 
 * Table of Contents
 * 
 * 1. while loops
 * 2. for loops
 * 3. Be able to loop any number of times, forward
 *    counting up to some limit, backward counting down
 *    to 0.
 * 4. Loop over an Array, forwards and backwards
 * 5. for-in loops
 * 6. Loop over an Object
 * 
 */

/**
 * Loops - What's their deal!?
 * 
 * 0. Loops allow us to run a block of code as many times as we want.
 *    They are a built in feature of javascript.
 * 
 * 1. They are particularly useful for iterating over collections
 *    like arrays and objects. We can find specific items and pull
 *    them out to work with them on their own.
 * 
 * 2. There are three main types of loops: 
 *    - for loop; perhaps the most used as we learn to code
 *    - while loop; less common, and less robust of a tool
 *    - for-in loop; the mechanic used for looping over objects.
 */

/**
 * WHILE LOOPS
 * 
 * While loops effectively say "while this is true, run this code".
 * 
 * Syntax
 * while (<stopping condition>){
 *  <body: block of code to execute>
 *  <incrementor>
 * } 
 * 
 * */

//Example:
var count = 20;
while (count < 25){
  console.log(count);
  count++
} //prints 20 through 24 to the console.

/**
 * count++ tells our code to increase the count by one until
 * count is no longer less than 30. Be careful not to crash your
 * program by writing a loop that never ends. If I had written:
 *  ```
 *   var count = 1; 
 *   while (count > 5) {
 *   console.log(count);
 *   count++
 *      }
 * ```
 * count would always be greater than 5 and the loop would
 * never end and our program would crash.
 */


/**
 * FOR LOOPS
 * 
 * For loops are effectively the same concept as while loops 
 * but with a bit more control. They are made up of a starting
 * condition, a stopping condition, and an incrementor.
 * 
 * 
 * Syntax:
 * for (<starting condition>; <stopping condition>; incrementor){
 *    <code block to be executed>
 *    }
 * 
 * We can loop as many times as we want - it just requires setting
 * the stopping condition the desired number of increments away 
 * from the starting condition 
 */

//Example counting up by 2s:
for (var i = 0; i < 5; i += 2){
  console.log(i);
} // prints 0 then 2 then 4 to the console

//example counting down to zero
for (var i = 7; i > -1; i--){ //note the use of the -- operator
  console.log(i);
} // prints 7 through 0 to the console.


//Example: Loop over an Array forwards
//Using bracket notation, we can loop over arrays and pull out a 
//specific value by pulling values at index [i].
var colors = ['red',
              'orange', 
              'yellow', 
              'green', 
              'blue',
              'indigo',
              'violet'];

for (var i = 0; i < colors.length; i++){
  console.log(colors[i]);
}
/**
 * The above example logs: 
 * "
 * red
 * orange
 * yellow
 * green 
 * blue
 * indigo
 * "
 * Note that we start at colors[0], the first value in the array.
 * We finish at colors[colors.length - 1], which would evaluate
 * to colors[5] in this case, or the last item in the array.
 */

//Example: Loop over an Array backwards
for (var i = colors.length-1; i > -1; i--){
  console.log(colors[i]);
} // prints violet through red

/**
 * FOR IN LOOPS
 * 
 * Now objects aren't exactly oriented numerically the way
 * arrays are. If we want to cycle through values in an object, 
 * we can tell javascript to run through every key. 
 * 
 * Syntax:
 * for (var <anything> in <defined object>) {
 *    <code block to be executed>
 *    } 
 * 
 * You don't need a start/stopping condition, or incrementor
 * because the loop just runs through every key in the object.
 * 
 */

//Example: Looping over an Object
var myPets = {
  cat: 'Smokey',
  dog: 'Willa',
  otherCat: 'Abita',
  housePlant: 'Pablo' 
}

for (var key in myPets){
  console.log(myPets[key]); //must use bracket notation - not dot!
}
/**
 * The above logs to the console:
 * "
 * Smokey
 * Willa
 * Abita
 * Pablo
 * "
 * 
 */

