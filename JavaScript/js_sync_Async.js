/*

Synchronous vs Asynchronous JavaScript
---------------------------------------
- Synchronous: 
---------------
- JavaScript is synchronous by default and is single-threaded.
- the code is executed line by line and must wait for the previous line to finish executing before moving on to the next line.
- blocking code: code that takes a long time to execute can block the execution of other code.
- ex: 
    console.log('Hello');
    console.log('World');
    // Hello
    // World

- Asynchronous:
----------------
- Asynchronous code allows multiple things to happen at the same time.
- non-blocking code: code that doesn't block the execution of other code.
- ex:
    console.log('Hello');
    setTimeout(() => {
        console.log('World');
    }, 2000);
    console.log('Goodbye');
    // Hello
    // Goodbye
    // World


-----------------------------------------------------------------------------------------------------------------------------------
- Callbacks:
------------
- Callbacks are functions that are passed as arguments to other functions.
- used to handle asynchronous operations.
- ex:
    function getData(callback) {
        setTimeout(() => {
            callback('Data received');
        }, 2000);
    }

    getData((data) => {
        console.log(data);
    });
    // Data received

-----------------------------------------------------------------------------------------------------------------------------------
- Promises:
------------
- Promises are used to handle asynchronous operations in JavaScript .
- a promise is an object that represents the result of an asynchronous operation success or failure.
- a promise can be in one of three states: pending, fulfilled, or rejected.

- Syntax:
    const promise = new Promise((resolve, reject) => {
        // async code
        if(success) {
            resolve('Success');
        } else {
            reject('Error');
        }
    });

    promise.then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    });

- Example:
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data received');
        }, 2000);
    });

    promise.then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    });
    // Data received

-----------------------------------------------------------------------------------------------------------------------------------
- Async/Await:
---------------
- Async/Await is a modern way to handle asynchronous operations in JavaScript.
- Async/Await is built on top of promises.
- async functions always return a promise.
- the await keyword is used to wait for a promise to resolve.
- async functions can contain multiple await expressions.
- async functions can be used with try/catch blocks to handle errors.

- Syntax:
    async function getData() {
        try {
            const data = await promise;
            console.log(data);
        } catch(error) {
            console.log(error);
        }
    }

    getData();

- Example:
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data received');
        }, 2000);
    });

    async function getData() {
        try {
            const data = await promise;
            console.log(data);
        } catch(error) {
            console.log(error);
        }
    }

    getData();
    // Data received

    when using async/await, the code looks synchronous, but it's still asynchronous under the hood.


    -Difference between try/catch and then/catch 
    ---------------------------------------------

    - try/catch:
        - used with synchronous code to handle errors.
        - used with async/await to handle errors in asynchronous code.
        - allows you to catch errors in the async function itself.
        - can't be used with promises directly.

    ex:
    async function getData() {
        try {
            const data = await promise;
            console.log(data);
        } catch(error) {
            console.log(error);
        }
    }

    - then/catch:
        - used with promises to handle success and error cases.
        - allows you to handle both success and error cases separately.
        - can be used with async functions as well.

    ex:
    promise.then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    });

    Note:
    -----
    - .then() and .catch() can be switched to .catch() and .then() respectively.
       ex: promise.catch((error) => console.log(error)).then((data) => console.log(data));

    - .then() should return a result to be used in the next .then() block.
       ex: promise.then((data) => data.toUpperCase()).then((data) => console.log(data));

    - .then() it is optional to provide a function to .then() and .catch().
         ex: promise.then().catch();

    - .then() creates a new promise and doesn't modify the original promise.
         ex: promise.then((data) => console.log(data));   // returns 'Data received'
             promise.then((data) => console.log(data.toUpperCase()));   // returns 'DATA RECEIVED'



    - Finally:
    -----------
    - the finally() finally always executes after try and catch, regardless of whether an error was thrown or not.
    - used when you want to run some code after a block of code, regardless of the outcome like closing a file or network connection.

    ex:
        function example() {
            try {
                console.log("In try block");
                throw new Error("Error occurred");
            } catch (err) {
                console.log("In catch block: " + err.message);
            } finally {
                console.log("In finally block");
            }
         }

    example();

    - Output:
        In try block
        In catch block: Error occurred
        In finally block

    Note: Even if there's a return in try or catch, finally still executes:

      function exampleWithReturn() {
        try {
            console.log("In try block");
            return "Returning from try";
        } catch (err) {
            console.log("In catch block");
        } finally {
            console.log("In finally block");
        }
        }

console.log(exampleWithReturn());
     
    - Output:
        In try block
        In finally block
        Returning from try

    Note: Even when an error is thrown and rethrown, the finally block still runs before the outer catch (if there is one) handles the error:

    try {
                try {
                    throw new Error("Inner error");
                } catch (e) {
                    console.log("Caught inner error");
                    throw e; // Rethrow the error
                } finally {
                    console.log("Inner finally");
                }
            } catch (e) {
            console.log("Caught outer error");
            }

    - Output:
        Caught inner error
        Inner finally
        Caught outer error



    -----------------------------------------------------------------------------------------------------------------------------------

  how to handle errors based on event listeners in JavaScript?
    -----------------------------------------------------------
    - Event listeners can be used to handle errors in JavaScript.
    - The error event is triggered when an error occurs.
    - The error event can be used to handle errors in different parts of the code.

    - Example:
        window.addEventListener('error', function(event) {
            console.log('An error occurred:', event.error);
        });

        -Example:
        



   


    




*/