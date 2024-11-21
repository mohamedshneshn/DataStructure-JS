/*
Array
-------
- used to store multiple values in a single variable.
- values are stored in a sequence from 0 to n-1.
- values can be any data type.

when to use array?
-------------------
1. when we need to store multiple values in a single variable.
2. when we need to access the elements by index.
3. when we need to loop through the elements.
4. when we need to store the elements in a specific order.


when not to use array?
----------------------
1. when we need to add/remove elements at the beginning of the array.
2. when we need to search elements in the array.
3. when we need to add/remove elements in the middle of the array.


array big O notation
--------------------
1. insert/remove at the end of the array: - push(1)/pop()
                                          - O(1) - constant time complexity
                                          - because we can access the last element in the array directly by its index

2. insert/remove at the beginning of the array: - unshift(1)/shift() -concat() -slice() -splice() -
                                                - O(n) - linear time complexity 
                                                - because we have to shift all the elements to the right 

3.access an element by index: - O(1) - constant time complexity
                              - because we can access any element in the array directly by its index
                              - we don't have to iterate over the array to find the element

4. search an element: - includes() - indexOf() - find() - findIndex()- filter() - some() - every()- map() - reduce() - forEach()

                      - O(n) linear time complexity
                      - because we have to iterate over the array to find the element



array methods:     arr=[1,2,3]
----------------

1.[1,2,3].length   // 3   returns the length of the array

1. arr.push()      - add element at the end of the array
                   -arr.push(10)   - [1,2,3,10]
            
2. arr.pop()       - remove element from the end of the array
                   -arr.pop()      - [1,2]
        
3. arr.shift()     - remove element from the beginning of the array
                   -arr.shift()    - [2,3]

4. arr.unshift()   - add element at the beginning of the array
                   -arr.unshift(10)- [10,1,2,3]

5- - arr.sort()                  // sorts the elements of the array as strings in alphabetical order
   - arr.sort((a, b) => a - b)   // sorts the elements of the array in ascending order
   - arr.sort((a, b) => b - a)   // sorts the elements of the array in descending order
   - arr.reverse()               // reverses the order of the elements in the array

   ex: var arr = [3,10,2];
      arr.sort();   // arr becomes [10,2,3]
      arr.sort((a, b) => a - b);   // arr becomes [2,3,10]
      arr.sort((a, b) => b - a);   // arr becomes [10,3,2]
      arr.reverse();   // arr becomes [2,3,10]

6- arr.reverse()           - reverse the array
                           -arr.reverse()  - [3,2,1]

7-arr.indexOf()           - return the index of the element
                          -arr.indexOf(2) - 1

8-arr.lastIndexOf()       - return the last index of the element

9- arr.includes()         - return true if the element is in the array

10- arr.slice(start,end)  - return a new array that contains the elements from index start to index end-1

11- arr.splice(start,deleteCount,ele1,ele2,ele3) - modify the array
                                                 - remove elements from the array and add elements to the array
                                                 - start is the index of the element to start removing from
                                                 - deleteCount is the number of elements to remove
                                                 - ele1,ele2,ele3 are the elements to add to the array
                ex: let arr=[1,2,3,4,5]
                    arr.splice(2,2,10,20,30) - [1,2,10,20,30,5]
                    arr.splice(1,0,10,20,30) - [1,10,20,30,2,3,4,5]

9- arr.forEach((ele,i)=>{}) - loop through the array and return nothing and doesn't modify the array

      ex: let arr=[1,2,3]
            arr.forEach((ele,i)=>{
               console.log(ele)
            })

10- arr.map((ele,i)=>{})   - loop through the array and return a new array
   
         ex: let arr=[1,2,3]
            let newArr=arr.map((ele,i)=>{
               return ele*2;
            })   - [2,4,6]

11- arr.filter((ele,i)=>{ condition }) - loop through the array and return a new array that contains the elements that satisfy the condition

12- arr.reduce((acc,ele,i)=>{ acc+ele },0) - loop through the array and return a single value
                                           - acc is the accumulator 


14- arr.concat(arr1) - merge two arrays
      ex: let arr1=[1,2,3]
            let arr2=[4,5,6]
            let arr3=arr1.concat(arr2)    => [1,2,3,4,5,6]
            let arr3=[...arr1,...arr2]    => [1,2,3,4,5,6]
            let arr3= [].concat(arr1,arr2) => [1,2,3,4,5,6]

15- arr.join('')     - convert the array to a string
      ex: let arr=[1,2,3]
            let str=arr.join('')   => '123'

    
---------------------------------------------------------------------------------------------------------------------------------------
- How to flatten an array in JavaScript?
    
    Example:
    --------
    var arr = [[1,2], [3,4], [5,6]];

    let flatArr = [].concat.apply([], arr);   // returns [1,2,3,4,5,6]
    or
    let flatArr = [].concat(...arr);   // returns [1,2,3,4,5,6]
    or
    let flatArr = arr.flat();   // returns [1,2,3,4,5,6]
 ---------------------------------------------------------------------------------------------------------------------------------------
 How to remove duplicates from an array in JavaScript?

      Example:
      --------
      var arr = [1,2,2,3,4,4,5];

      let uniqueArr = [...new Set(arr)];   // returns [1,2,3,4,5]
      or
      let uniqueArr = arr.filter((ele, i) => arr.indexOf(ele) === i);   // returns [1,2,3,4,5]

---------------------------------------------------------------------------------------------------------------------------------------
- How to copy an array in JavaScript with reference and without reference?
   
         Example:
         --------
         var arr = [1,2,3];
   
         let copyArr = arr.slice();   // returns [1,2,3] - copy without reference
         
         let copyArr = arr;   // returns [1,2,3] - copy with reference
---------------------------------------------------------------------------------------------------------------------------------------



*/
