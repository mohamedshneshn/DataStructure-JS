/*

JavaScript Variables
---------------------
- Variables are used to store data values.
- Variables are containers for storing data values.
- JavaScript variables are declared using the var, let, or const keyword.


Feature     	     var	                          let	                                const
--------------------------------------------------------------------------------------------------------------
Scope	            Function-scoped          	      Block-scoped                       	Block-scoped
Hoisting	        Yes (initialized as undefined)	  Yes (Temporal Dead Zone)	            Yes (Temporal Dead Zone)
Re-declaration	    Allowed	                          Not allowed within the same scope     Not allowed within the same scope
Reassignment	    Allowed                      	  Allowed                         	    Not allowed (but mutable for objects/arrays)


var:
----
- var is function-scoped available throughout the function in which it is declared.
-ex:
    function exampleFunction() {
    if (true) {
        var x = 10; // `x` is function-scoped
    }
    console.log(x); // This will output 10 because `var` is function-scoped
}
exampleFunction();
console.log(x); // This will throw a ReferenceError because `x` is not defined outside the function



let:
----
- let is block-scoped available only within the block in which it is declared.
- ex:
  
    let x = 10;
    if (true) {
        let x = 20;
        console.log(x); // Outputs: 20 (block scope)
    }
    console.log(x); // Outputs: 10 (original value outside block scope)


const:
------
- const is block-scoped and cannot be reassigned.
- ex:
    const x = 10;
    x = 20; // This will throw a TypeError because `const` variables cannot be reassigned
    const y; // This will throw a SyntaxError because `const` variables must be initialized during declaration          
    const obj = { name: 'John' };
    obj.name = 'Doe'; // This is allowed because the object itself is mutable
    console.log(obj); // Outputs: { name: 'Doe' }


Note:
-----
- avoid using var and use let or const instead because of function-scoped nature of var can lead to bugs and unexpected behavior.
- when you declare a variable without using var, let, or const, it becomes a global variable.

    function myFunction() {
        someVariable = 10; // No var, let, or const
    }

    myFunction();
    console.log(someVariable); // Outputs 10 because `someVariable` is now a global variable


--------------------------------------------------------------------------------------------------------------

what is the difference between null and undefined in JavaScript?
----------------------------------------------------------------

Feature                               	undefined	                            null
--------------------------------------------------------------------------------------------------------------
Definition                   	Uninitialized or missing value	          Explicitly empty or no value
Assigned By	                               JavaScript	                      Developer
Type	                                  "undefined"                       	"object"
Comparison (===)             	 undefined === undefined is true	        null === null is true
Conversion in Math Ops	                Results in NaN	                    Converted to 0
Typical Use	                    Checking uninitialized variables  	Signaling empty, intentional absence


- Example:
    var x;
    console.log(x); // Outputs: undefined

    var y = null;
    console.log(y); // Outputs: null

    console.log(typeof undefined); // Outputs: "undefined"
    console.log(typeof null); // Outputs: "object"

    console.log(undefined === undefined); // Outputs: true
    console.log(null === null); // Outputs: true

    console.log(undefined + 5); // Outputs: NaN
    console.log(null + 5); // Outputs: 5
    console.log(null + "Hello"); // Outputs: "nullHello"

    var z;
    if (z === undefined) {
        console.log('z is undefined');
    } else {
        console.log('z is defined');
    }

    var a = null;
    if (a === null) {
        console.log('a is null');
    } else {
        console.log('a is not null');
    }


NaN:
----
- NaN stands for "Not-a-Number" and is a special value in JavaScript used to represent an unrepresentable value in arithmetic operations.
- NaN is returned when a mathematical operation cannot be performed or results in an unrepresentable value.

- Example:
    console.log(10 / "Hello"); // Outputs: NaN
    console.log(Math.sqrt(-1)); // Outputs: NaN
    console.log(0 / 0); // Outputs: NaN

- To check if a value is NaN, you can use the isNaN() function or Object.is() method.
    
        console.log(isNaN(NaN)); // Outputs: true
        console.log(isNaN(10)); // Outputs: false
        console.log(Object.is(NaN, NaN)); // Outputs: true
        console.log(Object.is(10, 10)); // Outputs: true

- Note: NaN is not equal to any value, including itself. To check if a value is NaN, use the isNaN() function or Object.is() method.

Ex:
    console.log(NaN === NaN); // Outputs: false

*/