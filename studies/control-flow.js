/**
 * CONTROL FLOW
 * 
 * Table of contents:
 * 
 * 1. If
 * 2. Else-if
 * 3. Else
 * 4. Switch
 */



/** Control Flow - What's the deal?
 * 
 * 0. Control flow means we can conditionally define which parts of our application run. 
 * In other words, we can use conditional statements to let our application know which lines of code it should flow through.
 * 
 * 1. We achieve this through conditional statements, which rely on truthy-ness vs falsey-ness. 
 * The value of the conditional statement is evaluated in a boolean context.
 * 
 * 2. Depending on the condition and following code block, we can write code that tells the computer:
 * "If this is true, do this. Else if this is true, do this. All else fails, do this."
 * 
 * 3. This is achieved through If-statements and their chains, if-elseif-else. 
 * 
 * 4. Switch-statements are a similar concept that use a different syntax.  
 * 
 * 
 */

/** IF STATEMENTS
 * 
 * Using our code, we are able to say "if this is true, do this!"
 * Here's how:
 * 
 * SYNTAX
 * Start a conditional block of code with the keyword if. 
 * Follow this with parentheses containing the condition that will be coerced to either true or false. 
 * Make sure you are using comparison operators in the parentheses.
 * Follow the parenthese with an open curly brace, which denotes the start of a code block that will run if the condition is true.
 * 
 * This code block is called the body.
 *  It must be terminated with a semi-colon like any other line of code. 
 * Close the If-statement with another curly brace.
 * 
 * 
 */

//Example:
var dave = 'running late';
if (dave === 'running late'){
console.log('Dave is stressed');
} //prints 'Dave is stressed' because the condition is true; var dave deeply equals the string 'running late'


/** ELSE-IF STATEMENTS
 * 
 * 
 * SYNTAX
 * Pick up exactly where you left off with the if statement.
 * Add the keyword `else if` followed by a parentheses filled with the next condition you'd like to test. 
 * 
 * Note that your code will stop running your if-elseif-else chain after the first condition it has deemed true. 
 * 
 */

//Example:

var color = 'red';
if (color === 'blue'){
  console.log('it\'s blue');
} else if (color === 'red'){
  console.log('it\'s red')
} // prints "it's red". The condition in the first if statement isn't satisfied, but the second is, so it runs that code in the 2nd block.

/** ELSE STATEMENTS
 * 
 * Else statements are also referred to as the default statement.
 * They basically say "if everything else isn't true (ie no other conditions are met, do this by default"
 * 
 * SYNTAX
 * Pick up exactly where you left off with the else if statement.
 * Follow the closing curly brace with the keyword `else` .
 * Then launch right into a new code block and write the action that should happen if all else fails.
 * 
 * 
 */

//Example:
function testScore(score){
  if (score > 90){
    console.log("Aced the test!")
  } else if (score > 79 && score < 90){
    console.log("You got a B");
  } else if (score > 69 && score < 80){
    console.log("You got a C");
  } else if (score > 59 && score < 70){
    console.log("You got a D");
  } else {
  console.log("You failed!")
  }
}
testScore(82); //logs 'You got a B'
testScore(46); //logs 'You failed!
/**
 * The above function shows a few important things about if statements.
 * 
 * 1. You can nest if statements in functions, and use the parameters in the nested if statments' conditions.
 * 
 * 2. You can chain else if statements endlessly
 * 
 * 3. The else statement ends the if-elseif-else chain because it's the default condition. 
 * There's no condition to test here. 
 * The block of code will as long as it doesn't meet any of the conditions listed above it.
 */

/** SWITCH STATEMENTS
 * 
 * Switch statements provide another path to a similar outcome, and in some cases, are cleaner code. 
 * 
 * SYNTAX
 * The syntax of switch statements is better shown than explained. 
 * Take a look at the example below to see that the statement starts with the switch keyword, 
 * evaluates an input expression, 
 * then takes multiple cases and break points at which it decides whether or not to run the code
 */


//Example:
function nbaConvo(favTeam){
  switch (favTeam){
    case 'Bulls' :
    console.log('MJ is the GOAT');
    break;
    case 'Lakers':
    console.log('LeBron and AD are my heroes');
    break;
    case 'Pelicans':
    console.log('Welcome to LouiZIONa');
    break;
    default:
    console.log('Uh, yeah, I like that team too.');
  }
}
nbaConvo('Pelicans'); //prints "Welcome to LouiZiona"
nbaConvo('Suns'); //prints Uh, yeah, I like that team too.
/**
 * In the above example, note that a break statement is needed
 * after every code block.
 * Also note that the default requires no specified case
 * 
 */

//Example - run one block of code for multiple cases
function trashTalk(favTeam){
  switch (favTeam){
    case 'Bulls' :
    case 'Lakers':
    case 'Bucks':
    console.log('Early playoff exit guaranteed');
    break;
    case 'Pelicans':
    console.log('We goin\' straight to the ship');
    break;
    default:
    console.log('Your team sucks!!');
  }
}
trashTalk('Pelicans'); //prints "We goin' straight to the ship"
trashTalk('Bulls'); //prints 'Early playoff exit guaranteed'
trashTalk('Lakers'); //prints 'Early playoff exit guaranteed'
trashTalk('Suns'); //prints 'Your team sucks!!'