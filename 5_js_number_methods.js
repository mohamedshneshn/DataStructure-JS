/*
number methods 
---------------

JS Number Methods:
--------------------

- Number.isInteger()   // returns true if the value is an integer, otherwise false

------------------------------------------------------------------------------------------------------------
- Number()   // converts a string of numbers to a number
   Example:
    var num = "123";
    Number(num);   // returns 123

    if we pass a string that contains non-numeric characters, it returns NaN
    Example:
    var num = "abc";
    Number(num);   // returns NaN


parseInt("1234");      // 1234
parseInt("123abc");    // 123
parseInt("12.34");     // 12

Number("1234");        // 1234
Number("123abc");      // NaN
Number("12.34");       // 12.34
1. Math.random() - returns a random number between 0 and 1
2. Math.floor(num) - returns the largest integer less than or equal to a given number
3. Math.ceil(num) - returns the smallest integer greater than or equal to a given number
4. Math.round(num) - returns the value of a number rounded to the nearest integer
5. Math.abs(num) - returns the absolute value of a number
6. Math.max(num1,num2,...) - returns the largest of zero or more numbers
7. Math.min(num1,num2,...) - returns the smallest of zero or more numbers
8. Math.pow(base,exponent) - returns the base to the exponent power
9. Math.sqrt(num) - returns the square root of a number
                  - Math.sqrt(9) - 3, Math.sqrt(16) - 4, Math.sqrt(25) - 5, Math.sqrt(7) - 2.6457513110645907
10. Math.trunc(num) - returns the integer part of a number
11. Math.sign(num) - returns the sign of a number
12. Math.log(num) - returns the natural logarithm of a number

13. Number.isInteger(num) - returns true if the number is an integer
or
function isInteger(num){
    return num%1===0
}

14. Number.isNaN(num) - returns true if the number is NaN



15-number to string:
--------------------
let num=123
let str=num.toString() - "123"
or
let str=String(num) - "123"
or
let str=num+"" - "123"








math functions
--------------
1. factorial:
-------------
function factorial(num){
    let result=1
    for(let i=1;i<=num;i++){
        result*=i
    }
    return result
}
time complexity: O(n) - linear time complexity

2. fibonacci:
-------------
function fibonacci(num){
    let arr=[0,1]
    for(let i=2;i<=num;i++){
        arr.push(arr[i-1]+arr[i-2])
    }
    return arr[num]
}
time complexity: O(n) - linear time complexity

3. prime number: is a number that is divisible only by itself and 1
----------------
function isPrime(num){
    if(num<2) return false
    for(let i=2;i<num ;i++){
        if(num%i===0) return false
    }
    return true
}
time complexity: O(n) - linear time complexity
optimization:
-------------
function isPrime(num){
    if(num<2) return false
    for(let i=2;i<=Math.sqrt(num);i++){  //use Math.sqrt(num) instead of num as there is no prime number greater than the square root of num
        if(num%i===0) return false
    }
    return true
}
time complexity: O(sqrt(n)) - linear time complexity

4.  the number of prime numbers that are strictly less than n.
--------------------------------------------------------------

function countPrimes(n){
    let count=0
    for(let i=2;i<n;i++){
        if(isPrime(i)){
            count++
        }
    }
    return count
}
time complexity: O(n^2) - quadratic time complexity

other solution:/sieve of eratosthenes
-------------------------------------
pseudo code:
-----------
1. create a boolean array isPrime[0..n] and initialize with true
2. for i=2,3,4,5,6,7,8,9,10,11,12,13,14,15,16
    if isPrime[i] is true
    mark multiples of 2 ,3,5 as false

function countPrimes(n){   /n=10  [2,3,5,7] => 4
      
    let arr=Array(n).fill(true)  //arr=[true,true,true,true,true,true,true,true,true,true]
    arr[0]=false 
    arr[1]=false                //arr=[false,false,true,true,true,true,true,true,true,true]
    for(let i=2;i<=Math.sqrt(n);i++){  // i=2,3
        if(arr[i]){                   //arr[2]=true, arr[3]=true
            for(let j=i*i;j<n;j+=i){   //j=4,6,8,9 
                arr[j]=false          //arr[4]=false, arr[6]=false, arr[8]=false arr[9]=false


    }
    return arr.filter(ele=>ele).length
}
time complexity: O(nloglogn) - linearithmic time complexity
--------------------------------------------------------------------------------------------------------------------------------
check the year is leap year or not:
-----------------------------------
//leap year has 366 days ,every 4 years,  the year is divisible by 4 and not divisible by 100 or divisible by 400
//leap year is divisible by 4 or or divisible by 400 and not divisible by 100
function isLeapYear(year){
   return (year%4===0 && year%100!==0) || year%400===0
}


Write a method to count the number of Palindromes in the given string. Return the total count. Use any preferred language. 
string str = "radar ; dragon ; umbreon ; spider-man"

function countPalindromes(str){
    let count=0
    let arr=str.split(';')
    for(let i=0;i<arr.length;i++){
        if(isPalindrome(arr[i])){
            count++
        }
    }
    return count
}
function isPalindrome(str){
    return str===str.split('').reverse().join('')
}





*/
