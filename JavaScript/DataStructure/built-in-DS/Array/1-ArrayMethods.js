/*
array methods:     arr=[1,2,3]
----------------
1. arr.push()      - add element at the end of the array
                   -arr.push(10)   - [1,2,3,10]
            
2. arr.pop()       - remove element from the end of the array
                   -arr.pop()      - [1,2]
        
3. arr.shift()     - remove element from the beginning of the array
                   -arr.shift()    - [2,3]

4. arr.unshift()   - add element at the beginning of the array
                   -arr.unshift(10)- [10,1,2,3]

5- arr.sort()              - sort the array if the array contains only positive numbers
   arr.sortt.reverse()     - descending order
   arr.sort((a,b)=>a-b)    - ascending order a,b are elements of the array
   arr.sort((a,b)=>b-a)    - descending order a,b are elements of the array

6- arr.reverse()           - reverse the array
                           -arr.reverse()  - [3,2,1]

7-arr.indexOf()           - return the index of the element
                          -arr.indexOf(2) - 1

8-arr.lastIndexOf()       - return the last index of the element

9- arr.includes()         - return true if the element is in the array

10- arr.slice(start,end)  - return a new array that contains the elements from index start to index end-1

11- arr.splice(start,deleteCount,ele1,ele2,ele3) - remove elements from the array and add elements to the array
                                                - start is the index of the element to start removing from
                                                - deleteCount is the number of elements to remove
                                                - ele1,ele2,ele3 are the elements to add to the array
                ex: let arr=[1,2,3,4,5]
                    arr.splice(2,2,10,20,30) - [1,2,10,20,30,5]
                    arr.splice(1,0,10,20,30) - [1,10,20,30,2,3,4,5]

9- arr.forEach((ele,i)=>{}) - loop through the array

10- arr.map((ele,i)=>{})   - loop through the array and return a new array

11- arr.filter((ele,i)=>{ condition }) - loop through the array and return a new array that contains the elements that satisfy the condition

12- arr.reduce((acc,ele,i)=>{ acc+ele },0) - loop through the array and return a single value
                                           - acc is the accumulator 



---------------------------------------------------------------------------------------------------------------------------





*/


