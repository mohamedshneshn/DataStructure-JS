/*
String methods:
---------------
string : is a sequence of characters enclosed in single or double quotes 
       : it is immutable because we cannot change the characters in the string be
      

1. str.length    returns the length of the string
   
   ex: var str = "hello";
        str.length;   // returns 5

2. str.slice(start,end) - returns a substring from start to end-1 & supports negative indexes

     ex: var str = "hello";
         str.slice(1,3);   // returns "el"
         str.slice(-3,-1);   // returns "ll"

3. str.substring(start,end) - returns a substring from start to end-1 & does not support negative indexes
    ex: var str = "hello";
        str.substring(1,3);   // returns "el"
        str.substring(3,1);   // returns "el"  // it swaps the indexes

4. str.substr(start,length) - returns a substring starting from the start index with the specified length & supports negative indexes
    ex: var str = "hello";
        str.substr(1,3);   // returns "ell"


3. str.split(separator) - returns an array of substrings separated by the separator
4. str.includes(substring) - returns true if the string contains the substring
5. str.indexOf(substring) - returns the index of the first occurrence of the substring
6. str.lastIndexOf(substring) - returns the index of the last occurrence of the substring
7. str.replace(substring,newSubstring) - returns a new string with the substring replaced by the newSubstring
8. str.toUpperCase() - returns a new string with all the characters in the string converted to uppercase
9. str.toLowerCase() - returns a new string with all the characters in the string converted to lowercase
10. str.charAt(index) - returns the character at the index
11. str.charCodeAt(index) - returns the unicode of the character at the index

12.- str.trim()   // removes whitespace from both ends of the string
    - str.trimStart()   // removes whitespace from the beginning of the string
    - str.trimEnd()   // removes whitespace from the end of the string

    ex: var str = "  hello  ";
        str.trim();   // returns "hello"
        str.trimStart();   // returns "hello  "
        str.trimEnd();   // returns "  hello"

13-str.replace(oldValue, newValue)   // replaces the old value with the new value in the string

    ex: var str = "hello";
        str.replace("h", "H");   // returns "Hello"



---------------------------------------------------------------------------------------------------------------------------


*/
