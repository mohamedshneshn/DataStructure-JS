/*
String methods:
---------------
string : is a sequence of characters enclosed in single or double quotes 
       : it is immutable because we cannot change the characters in the string be
      

1. str.length  - returns the length of the string
2. str.slice(start,end) - returns a substring from start to end-1
3. str.split(separator) - returns an array of substrings separated by the separator
4. str.includes(substring) - returns true if the string contains the substring
5. str.indexOf(substring) - returns the index of the first occurrence of the substring
6. str.lastIndexOf(substring) - returns the index of the last occurrence of the substring
7. str.replace(substring,newSubstring) - returns a new string with the substring replaced by the newSubstring
8. str.toUpperCase() - returns a new string with all the characters in the string converted to uppercase
9. str.toLowerCase() - returns a new string with all the characters in the string converted to lowercase
10. str.charAt(index) - returns the character at the index
11. str.charCodeAt(index) - returns the unicode of the character at the index





---------------------------------------------------------------------------------------------------------------------------

String functions:
-----------------
1. reverse a string:
--------------------
pseudo code:
-----------
1. create a new string
2. loop through the string from the end and add the characters to the new string
3. return the new string
function reverse(str){
    let newStr=""
    for(let i=str.length-1;i>=0;i--){
        newStr+=str[i]
    }
    return newStr
}
time complexity: O(n) - linear time complexity as
other solution:
---------------
function reverse(str){
    return str.split("").reverse().join("")
}
time complexity: O(n) - linear time complexity

---------------------------------------------------------------------------------------------------------------------------

2. is palindrome:
-----------------------------------
function isPalindrome(str){
    return str===reverse(str)
}
function isPalindrome(str){
    return str===str.split("").reverse().join("")
}
time complexity: O(n) - linear time complexity
space complexity: O(n) - linear space complexity because we are creating a new array and a new string
this is not efficient because we are creating a new array and a new string and the time complexity is O(n)

other solution:
---------------
-use two pointers start and end and compare the characters at these pointers and move the pointers towards each other until they meet in the middle
-this 
function isPalindrome(str){
    let start=0
    let end=str.length-1
    while(start<end){
        if(str[start]!==str[end]){
            return false
        }
        start++
        end--
    }
    return true
}
time complexity: O(n) - linear time complexity
---------------------------------------------------------------------------------------------------------------------------

3-is palindrome after deleting at most one character from it.
-------------------------------------------------------------
s = "aba" => true   ,  s = "abca" => true   ,   = "abc" => false

function validPalindrome(s){
    let start=0
    let end=s.length-1
    for(let i=0;i<s.length;i++){
        if(s[start]!==s[end]){
            return isPalindrome(s.slice(start,end)) || isPalindrome(s.slice(start+1,end+1))
        }
        start++
        end--
    }
    return true
}
time complexity: O(n) - linear time complexity
space complexity: O(n) - linear space complexity because we are creating a new array and a new string

---------------------------------------------------------------------------------------------------------------------------
4-You are given a string s. You can convert s to a palindrome by adding characters in front of it.
Return the shortest palindrome you can find by performing this transformation.

pseudo code:
-----------
1. create a new string by reversing the string
2. loop through the string and check the prefix of the string from the beginning to the index and the suffix of the reversed string from the index to the end
3. return the remaining part of the reversed string and the original string
prefix is the part of the string from the beginning to the index (0--i)
suffix is the part of the string from the index to the end(i--end)



function shortestPalindrome(s){     //s = "aacecaaa" 
    if(s === null || s.length === 0) return "";
    let rev=s.split("").reverse().join("") // rev = "aaacecaa"
    for(let i=0;i<s.length;i++){
        if(s.slice(0,s.length-i)===rev.slice(i)){ //  "aacecaaa" === "aaacecaa" , "aacecaa" === "aacecaa" i=1
            return rev.slice(0,i)+s  //   "a"+ "aacecaaa" = "aaacecaaa"
        }
    }
}
other solution:
---------------
function shortestPalindrome(s){
    if(s === null || s.length === 0) return "";
    let rev=s.split("").reverse().join("") // rev = "aaacecaa"
    let newStr=s+"#"+rev // "aacecaaa#aaacecaa"
    let lps=new Array(newStr.length).fill(0) // [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    for(let i=1;i<newStr.length;i++){
        let j=lps[i-1]
        while(j>0 && newStr[i]!==newStr[j]){    
            j=lps[j-1]
        }
        if(newStr[i]===newStr[j]){
            j++
        }
        lps[i]=j
    }
    return rev.slice(0,s.length-lps[newStr.length-1])+s
}

other solution:
---------------
function shortestPalindrome(s){
    if(s === null || s.length === 0) return "";
    let rev=s.split("").reverse().join("") // rev = "aaacecaa"
    let newStr=s+"#"+rev // "aacecaaa#aaacecaa"
    
    for(let i=1;i<newStr.length;i++){
        let j=lps[i-1]






console.log(shortestPalindrome("aacecaaa")) // "aaacecaaa"

    

time complexity: O(n) - linear time complexity
space complexity: O(n) - linear space complexity because we are creating a new array and a new string










---------------------------------------------------------------------------------------------------------------------------
3. substrings:
--------------
pseudo code:
-----------
1. create an empty array
2. use nested loops to loop through the string 

function substrings(str){
    let subs=[]
    for(let i=0;i<str.length;i++){
        for(let j=i+1;j<=str.length;j++){  // j<=str.length because we want to include the last character
            subs.push(str.slice(i,j))
        }
    }
    return subs
}
time complexity: O(n^2) - quadratic time complexity
space complexity: O(n^2) - quadratic space complexity because we are creating a new array and a new string
---------------------------------------------------------------------------------------------------------------------------

4. longest word:
----------------
pseudo code:
-----------
1. assume that the first word is the longest word and loop through the words and compare the length of the current word with 
   the length of the longest word

function longestWord(str){
    let words=str.split(" ")
    let longest=""
    for(let i=0;i<words.length;i++){
        if(words[i].length>longest.length){
            longest=words[i]
        }
    }
    return longest
}
time complexity: O(n) - linear time complexity

---------------------------------------------------------------------------------------------------------------------------
5. longest palindrome substring:
--------------------------------
function longestPalindrome(str){
    let longest=""
    for(let i=0;i<str.length;i++){
        for(let j=i+1;j<=str.length;j++){
            let sub=str.slice(i,j)
            if(isPalindrome(sub) && sub.length>longest.length){
                longest=sub
            }
        }
    }
    return longest
}
---------------------------------------------------------------------------------------------------------------------------
6.Given a string s, find the length of the longest substring without repeating characters.
------------------------------------------------------------------------------------------
pseudo code:
------------
- idea: find all the substrings and check if they are unique and find the longest one   
function lengthOfLongestSubstring(s){
    let longest=0
    for(let i=0;i<s.length;i++){
        for(let j=i+1;j<=s.length;j++){
            let sub=s.slice(i,j)
            if(isUnique(sub) && sub.length>longest){
                longest=sub.length
            }
        }
    }
    return longest
}
function isUnique(str){
    let newStr=""
    for(let i=0;i<str.length;i++){
        if(newStr.includes(str[i])){
            return false
        }
        newStr+=str[i]
    }
    return true
}
time complexity: O(n^3)

other solution:
---------------
-idea: use a hash table to keep track of the characters we have seen so far and check if the current character is in the hash table
-if it is in the hash table, then we have seen it before and we break out of the loop
-if it is not in the hash table, then we add it to the hash table and increment the length
-time complexity: O(n^2)


function lengthOfLongestSubstring(s){
    let longest=0
    for(let i=0;i<s.length;i++){
        let seen={}
        let length=0
        for(let j=i;j<s.length;j++){
            if(!seen[s[j]]){
                length++
                seen[s[j]]=true
            }else{
                break
            }
        }
        if(length>longest){
            longest=length
        }
    }
    return longest
}
time complexity: O(n^2)

---------------------------------------------------------------------------------------------------------------------------
6. count vowels:
----------------
function countVowels(str){
    let count=0
    for(let i=0;i<str.length;i++){
        if("aeiou".includes(str[i])){
            count++
        }
    }
    return count
}
---------------------------------------------------------------------------------------------------------------------------
7. count consonants:
--------------------
function countConsonants(str){
    let count=0
    for(let i=0;i<str.length;i++){
        if(!"aeiou".includes(str[i])){
            count++
        }
    }
    return count
}
---------------------------------------------------------------------------------------------------------------------------
8-Given two strings s and t, determine if they are isomorphic.
Two strings s and t are isomorphic if the characters in s can be replaced to get t.
All occurrences of a character must be replaced with another character while preserving the order of characters.
No two characters may map to the same character, but a character may map to itself.

s ="badc" and t = "baba" => false
s = "egg" and t = "add" => true
s = "foo" and t = "bar" => false
s = "paper" and t = "title" => true

pseudo code:
------------
-idea: use a hash table to keep track of the characters we have seen so far and check if the current character is in the hash table
-if it is in the hash table, then we have seen it before and we break out of the loop
-if it is not in the hash table, then we add it to the hash table and increment the length
-time complexity: O(n^2)

function isIsomorphic(s,t){
    if(s.length!==t.length){
        return false
    }
    let hash1={}
    let hash2={}
    for(let i=0;i<s.length;i++){
        if(!hash1[s[i]] && !hash2[t[i]]){
            hash1[s[i]]=t[i]
            hash2[t[i]]=s[i]
        }else{
            if(hash1[s[i]]!==t[i] || hash2[t[i]]!==s[i]){
                return false

            }
        }
    }
    return true
}




---------------------------------------------------------------------------------------------------------------------------


what is kmp algorithm?
----------------------
-kmp: is used for pattern matching, it is used to find a substring in a string 

example:
--------
s="abababca"
p="bc"

first solution(inefficient):
---------------------------
-check each substring of s with the same length of p is equal or not

function findSubstring(s,p){
     let i=0
    let j=0
    while(i<s.length && j<p.length){
        if(s[i]===p[j]){   //if match increment both i and j
            i++
            j++
        }else{         //if not match, backtracking i to i-j+1 where j is the index of p
            i=i-j+1
            j=0

        }
    }
    if(j===p.length){
        return i-j
    }
    return -1
}
the pr


    // for(let i=0;i<s.length;i++){
    //     let sub=s.slice(i,i+p.length)
    //     if(sub===p){
    //         return i
    //     }
    // }
    // return -1
}
time complexity: O(n*m) - quadratic time complexity

// pseudo code:
// -----------
// 1. loop str,p  (i,j)
// 2. if 1st char of both matches , increment i and j
// 3, if not match, increment i and reset j to 0
// 4. if j===p.length-1, return i-j

// function findSubstring(s,p){
 let i=0
    let j=0
    while(i<s.length && j<p.length){
        if(s[i]===p[j]){
            i++
            j++
        }else{
            i++
            j=0
        }
    }
    if(j===p.length){
        return i-j
    }
    return -1
}




//     for(let i=0;i<s.length;i++){
//         for(let j=0;j<p.length;j++){
//             if(s[i+j]!==p[j]){
//                 break
//             }
//             if(j===p.length-1){
//                 return i
//             }
//         }
//     }
//     return -1
// }
the problem with this solution is that it backtracks when there is a mismatch ,backtracking is not efficient
why is backtracking not efficient?
----------------------------------
- because we are checking the same characters again and again

example:
--------
s="abababca"
p="bc"

first iteration:
----------------
i=0
j=0
s[i+j]!==p[j] => s[0]!==p[0] => a!==b => break

second iteration:
-----------------
i=1
j=0


// time complexity: O(n*m) - quadratic time complexity

second solution:(efficient):(kmp algorithm)
--------------------------------------------
what is kmp algorithm? 
----------------------
- kmp: is used for pattern matching, it is used to find a substring in a string
-useful when the pattern has some repeating characters
- unlike the first solution, it doesn't backtrack when there is a mismatch
- it uses a prefix table to avoid unnecessary comparisons when there is a mismatch if the p


what is prefix table?
---------------------
- prefix table: is an array that stores the length of the longest prefix that is also a suffix for each index in the pattern
how to build a prefix table?
----------------------------
- we start with the first index and we check if the character at the current index is equal to the character at the index that is one less than the current index
- if they are equal, then we increment the value at the current index by 1
- if they are not equal, then we check if the current index is 0

example:
--------
p="abababca"


pseudo code:
-----------
1. create a prefix table for the pattern
2. loop through the string and pattern
3. if the characters match, increment i and j
4. if they don't match, reset j to the value of the prefix table at j-1 and increment i 
5. if j===p.length-1, return i-j

function findSubstring(s,p){
    let lps=lps(p)

    let i=0
    let j=0
    while(i<s.length && j<p.length){
        if(s[i]===p[j]){
            i++
            j++
        }else{
            if(j===0){
                i++
            }else{
                j=lps[j-1]
            }
        }
    }
    if(j===p.length){
        return i-j
    }
    return -1
}





how to build a prefix table?
----------------------------
- use two pointers i and j
- i starts at 1 and j starts at 0
- if the characters at i and j are equal, then we increment the value at i by 1 and increment i and j by 1
- if the characters at i and j are not equal, then we check if j is 0
- if j is 0, then we increment i by 1
- if j is not 0, then we set j to the value of the prefix table at j-1

example:
--------
p="abababca"





time complexity: O(n+m) - linear time complexity
---------------------------------------------------------------------------------------------------------------------------


*/