/*
object methods
--------------
-object : is a collection of key-value pairs
        : key is a string or symbol
        : value can be anything
        : objects are not iterable we can't iterate over them but we can iterate over the keys or values of the object
        : used when we have a collection of related data
        : objects are mutable  

ex: let obj={ name:"John",age:25,city:"New York" }

-to access the value of the object we use the key of the object 

   we can use dot notation or bracket notation
   obj.name or obj["name"] = "John"


- Object.keys(obj) - returns an array of the keys of the object 
                   - Object.keys(obj) - ["name", "age", "city"]

- Object.values(obj) - returns an array of the values of the object
                     - Object.values(obj) - ["John", 25, "New York"]

- Object.entries(obj) - returns an array of the key-value pairs of the object
                        - Object.entries(obj) - [["name", "John"], ["age", 25], ["city", "New York"]]

-to delete a property from the object we use the delete keyword
delete obj.name - delete the name property from the object

Big O notation
--------------
1. insert/remove/access  - O(1) - constant time complexity
                         - because we can access the property directly by its key

2. search - O(n) - linear time complexity
                  - because we have to iterate over the object to find the property



object methods
--------------

- Object.preventExtensions(obj)   // prevents new properties from being added to the object

ex: var obj = {name: "John", age: 30};
    Object.preventExtensions(obj);
    obj.city = "New York";   // city property will not be added to the object

    console.log(obj);   // {name: "John", age: 30}

-----------------------------------------------------------------------------------------------------------------------------------------
- Object.assign(target, source)   // copies the values of all enumerable own properties from one or more source objects to a target object

ex: var obj1 = {name: "John"};
    var obj2 = {age: 30};

    Object.assign(obj1, obj2);   // obj1 becomes {name: "John", age: 30}    
-----------------------------------------------------------------------------------------------------------------------------------------
- Obect.is(obj1, obj2)   // compares two objects to determine if they are references to the same object in memory

ex: var obj1 = {name: "John"};
    var obj2 = {name: "John"};

    Object.is(obj1, obj2);   // returns false

    var obj3 = obj1;

    Object.is(obj1, obj3);   // returns true


-----------------------------------------------------------------------------------------------------------------------------------------


JSON Methods:
--------------
- JSON.stringify(obj)   // converts an object to a JSON string

ex: var obj = {name: "John", age: 30};

    JSON.stringify(obj);   // returns "{"name":"John","age":30}"

What is JSON?
- JSON stands for JavaScript Object Notation
- JSON is easy to read and write
- ptoperty names must be strings, written with double quotes
- JSON can only represent data, not functions
- used to exchange data between a browser and a server because the data is in a text format that is easy to parse and generate
- ex: {"name":"John", "age":30}
     
     
-----------------------------------------------------------------------------------------------------------------------------------------
- JSON.parse(jsonString)   // converts a JSON string to an object

ex: var jsonString = '{"name":"John", "age":30}';
    JSON.parse(jsonString);   // returns {name: "John", age: 30}

-----------------------------------------------------------------------------------------------------------------------------------------

- JS object: a collection of key-value pairs.
           : used to store various data types.
           : can contain properties and methods.
           : used for programming and logic.
           : Ex: let person = { name: 'John', age: 30 , greet: function() { return 'Hello!'; } };

- JSON: JavaScript Object Notation
        : easy for humans to read and write.
        : easy for machines to parse and generate.
        : used to exchange data between a browser and a server.
        : can't store functions, undefined, or NaN values.
        : keys must be strings, and values must be valid JSON data types (string, number, object, array, boolean, null).
        ex: { "name": "John", "age": 30 }

- JSON string: a string that represents a JavaScript object in JSON format.
             : used to exchange data between a browser and a server.
             : ex: '{"name":"John","age":30}'













*/
