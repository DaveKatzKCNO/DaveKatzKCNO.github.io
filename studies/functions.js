/**
 * FUNCTIONS
 * 
 * 0. Functions allow us to package reusable code blocks
 * so that we can call on them later to perform similar actions. 
 * 
 * 1. Functions are built with parameters in mind - they
 *  are place holders for other variables, values, or 
 * expressions that we pass through the function as 
 * arguments.
 * 
 * 2. Functions are closed out by their return statement.
 * Whenever you call a function, you can figure out what 
 * it will evaluate it to by checking its return 
 * statement.
 */

/***** FAQ and 
 * 1. The two phases to using functions: 
 * 
 * First we must declare the function;
 * Next we can execute (aka invoke, call) a function by
 * writing functionName (argument1, argument2);
 * 
 * ///
 * 
 * 2. What’s the difference between a function’s 
 * parameters and arguments PASSED to a function?
 * 
 * Parameters are included in the function during 
 * creation as placeholders for other expressions. It 
 * lets us reuse functions in different circumstances. 
 * Arguments the things that the parameters were holding  
 * the places for! They are stated with the function call.
 * 
 * ///
 * 
 * 
 * 3. What’s the syntax for a NAMED function? */ 
function funcName (parametersGoHere, anyNumberOfParams){
  //code block to be executed goes in here
  return 'we ran that function for ya'
  //functions stop running after the return statement
}
//below: calling the function
funcName();

/** ///
 * 4. How do we assign a function to a variable?
 * Like this! */
 var foo = funcName(x);
 /** You can also call the function on specific arguments 
 * and assign it to a variable; */

 /** ///
 * 
 * 5. Functions can OPTIONALLY take inputs, and 
 * OPTIONALLY return a single value. How do we specify 
 * inputs, and how do we specify outputs?
 * 
 * We specify inputs using parameters. Parameters are the 
 * placeholders for more specific arguments or dynamic 
 * data to be used when we actually call the function.
 * 
 * ///
 * 
 * 6. Scope: Functions can see and modify variables in 
 * parent or global scopes. The inverse is NOT true.
 * 
 * 
 * 7. Closures: Functions form closures around the data 
 * they house. If an object returned from the Function 
 * and is held in memory somewhere (referenced), that 
 * closure stays ALIVE, and data can continue to exist in 
 * these closures! 
 * 
 * Closures must have:
 * -  A function with access to the parent scope. Even after the parent function has closed
 * - A function using variables from a parent scope
 * Closures are Useful when returning functions from functions and they keep variables alive.
 * 
 * example of closure below, and how to call it
 */

function print(value) {
	return function() {
		console.log(value); 
	}
}
print(x)(); // need both parens to access the inner function

//////////////////////////////////////////////////
var x;
