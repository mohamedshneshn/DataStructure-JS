/*

    JavaScript Events
    ------------------
    - JavaScript events are actions that can be detected by the browser.
    - Examples: clicking a button, hovering over an element, pressing a key, etc.

    - JavaScript allows you to execute code when events are detected.

    1. Event Handlers:
    -------------------
        - function that is executed when an event occurs.
        - added as attributes to HTML elements ex: onclick, onmouseover, onkeydown, etc.
        - only one function can be assigned to an event handler.
        - can't be dynamically removed.

    - Example:
        <button onclick="alert('Hello World!')">Click Me</button>

    - In the above example, the alert('Hello World!') function is executed when the button is clicked.

    - Common JavaScript Events:
        - onclick: occurs when an element is clicked.
        - onmouseover: occurs when the mouse pointer is over an element.
        - onmouseout: occurs when the mouse pointer moves out of an element.
        - onkeydown: occurs when a key is pressed down.
        - onkeyup: occurs when a key is released.
        - onload: occurs when an object has loaded.

    - Example:
        <button onclick="myFunction()">Click Me</button>

        <script>
            function myFunction() {
                alert("Hello World!");
            }
        </script>


    2. Event Listeners
    -------------------
    - used to attach an event handler to an element.
    - can be added and removed dynamically using the addEventListener() and removeEventListener() methods.
    - can have multiple functions assigned to the same event.


    - Example:
        <button id="myButton">Click Me</button>

        <script>
            document.getElementById("myButton").addEventListener("click", function() {
                alert("Hello World!");
            });
        </script>

    - In the above example, the alert("Hello World!") function is executed when the button is clicked.

    - To run the function only once, you can use the {once: true} option or remove the event listener after it is executed.

    - Example:
        <button id="myButton">Click Me</button>

        <script>
            document.getElementById("myButton").addEventListener("click", function() {
                alert("Hello World!");
            }, {once: true});
        </script>

        or

        <button id="myButton">Click Me</button>

        <script>
            function myFunction() {
                alert("Hello World!");
                document.getElementById("myButton").removeEventListener("click", myFunction);
            }

            document.getElementById("myButton").addEventListener("click", myFunction);
        </script>


    3. Event Object
    ----------------
    - The event object contains information about the event that occurred.
    - The event object is passed to the event handler as a parameter.

    - Example:
        <button onclick="myFunction(event)">Click Me</button>

        <script>
            function myFunction(event) {
                alert("Hello World! " + event.type);
            }
        </script>

    - In the above example, the event object is passed to the myFunction() function, and the type of the event is displayed in the alert box.


    4. Event Bubbling
    ------------------
    - is a way of event propagation from the target element to the parent elements.
    - When an event occurs in an element, it first runs the event handlers on it, then on its parent, then all the way up on other ancestors.
    - When an event occurs in an element, it first runs the event handlers on it, then on its parent, then all the way up on other ancestors.
    - Event bubbling is the opposite of event capturing.

    - Example:
        <div onclick="alert('DIV')">
            <button onclick="alert('BUTTON')">Click Me</button>
        </div>

    - In the above example, when the button is clicked, the alert box with the text "BUTTON" is displayed first, then the alert box with the text "DIV" is displayed.

    - To stop event bubbling, you can use the stopPropagation() method.

    - Example:
        <div onclick="alert('DIV')">
            <button onclick="event.stopPropagation(); alert('BUTTON')">Click Me</button>
        </div>

    - In the above example, when the button is clicked, only the alert box with the text "BUTTON" is displayed. 
    - The alert box with the text "DIV" is not displayed because the event.stopPropagation() method stops the event from bubbling up the DOM tree.


    5. Event Capturing
    -------------------
    - Event capturing is a way of event propagation in the HTML DOM.
    - When an event occurs in an element, it runs the event handlers on its ancestors first, then on the element itself.
    - Event capturing is the opposite of event bubbling.

    - Example:
        <div onclick="alert('DIV')">
            <button onclick="alert('BUTTON')">Click Me</button>
        </div>

    - In the above example, when the button is clicked, the alert box with the text "DIV" is displayed first, then the alert box with the text "BUTTON" is displayed.   

    - To use event capturing, you can set the third parameter of the addEventListener() method to true.

    - Example:
        <div id="myDiv">
            <button id="myButton">Click Me</button>
        </div>

        <script>
            document.getElementById("myDiv").addEventListener("click", function() {
                alert("DIV");
            }, true);

            document.getElementById("myButton").addEventListener("click", function() {
                alert("BUTTON");
            }, true);
        </script>





----------------------------------------------------------------------------------------------------------------------------

    JavaScript Events for the server-side
    -------------------------------------
    - JavaScript events can be used to trigger server-side actions in Salesforce.
    Example:
    
        1- server.on('connection', function(socket) {    //used to  trigger an action when a new connection is established.
                console.log('A new connection has been established.');
            }); 

        2- server.on('data', function(data) {    //used to trigger an action when data is received.
                console.log('Data received: ' + data);
            });

        3- server.on('close', function() {    //used to trigger an action when the connection is closed.
                console.log('The connection has been closed.');
            });

        4- server.on('error', function(err) {    //used to trigger an action when an error occurs.
                console.log('An error has occurred: ' + err.message);
            });

        5- server.on('listening', function() {    //used to trigger an action when the server starts listening for connections.
                console.log('The server is now listening for connections.');
            });

            
        







*/