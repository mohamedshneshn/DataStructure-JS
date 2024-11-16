/*

JS functions
------------
- block of code that performs a specific task and can be reused.
- can take parameters and return values.
- can be defined using function declaration, function expression, arrow function, and class.
- can be called synchronously or asynchronously.
- can be anonymous or named.
- can be nested inside other functions.
- can be passed as arguments to other functions (callbacks).
- can be returned from other functions.


1. Function Declaration:
-------------------------
- syntax:
    function functionName(parameters){
        //code to be executed
    }

- Example:
    function greet(name){
        console.log('Hello ' + name);
    }

    greet('John');
    // Hello John

2. Function Expression:
------------------------
- syntax:
    const functionName = function(parameters){
        //code to be executed
    }

- Example:
    const greet = function(name){
        console.log('Hello ' + name);
    }

    greet('John');
    // Hello John

3. Arrow Function:
-------------------
- syntax:
    const functionName = (parameters) => {
        //code to be executed
    }

- Example:
    const greet = (name) => {
        console.log('Hello ' + name);
    }

    greet('John');
    // Hello John

4. Class:
---------
- syntax:
    class ClassName {
        constructor(parameters){
            //code to be executed
        }

        methodName(parameters){
            //code to be executed
        }
    }

- Example:
    class Person {
        constructor(name){
            this.name = name;
        }

        greet(){
            console.log('Hello ' + this.name);
        }
    }

    const john = new Person('John');
    john.greet();
    // Hello John

-----------------------------------------------------------------------------------------------------------------------------------

function types
--------------
1. Named Function:
-------------------
- has a name that can be used to call the function.

- Example:
    function greet(name){
        console.log('Hello ' + name);
    }

    greet('John');
    // Hello John

2. Anonymous Function:
-----------------------
- does not have a name because there is no need for it to be called directly.
- often used as callback functions or immediately invoked function expressions (IIFE).

- Example:
    function sum(num){
    if(num === undefined){
        num = 0;
    }
    return function addNums(num2, num3){
        if(num3 === undefined){
        num3 = 0;
        }
        return num + num2 + num3;
    }
}

console.log(sum(5)(10, 15));  // 30

Example:
    setTimeout(function() {
    console.log("This message is displayed after 2 seconds");
  }, 2000);

-----------------------------------------------------------------------------------------------------------------------------------


setTimeout and setInterval functions
--------------------------------
- setTimeout:  Executes a function once after a specified delay.
            : setTimeout(function, delay, [additional arguments])          

Example:
    setTimeout( () => {
    console.log("This message is displayed after 2 seconds");
    } , 2000);

- setInterval: executes a function at specified intervals (in milliseconds).

Example:
    // Set up a repeating interval
    let intervalId = setInterval(() => {
        console.log('This message will repeat every 2 seconds');
    }, 2000);

    // Stop the interval after 7 seconds
    setTimeout(() => {
        clearInterval(intervalId);  // Stops the interval
        console.log('Interval cleared, no more messages.');
    }, 7000);





-----------------------------------------------------------------------------------------------------------------------------------






*/