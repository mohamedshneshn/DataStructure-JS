/*


String functions:
-----------------
1. reverse a string:
--------------------

function reverse(str){
    let newStr=""
    for(let i=0;i<str.length;i++){
        newStr=str[i]+newStr
}
return newStr
}
time complexity: O(n) - linear time complexity as we are looping through the string
space complexity: O(1) - constant space complexity because we are not creating a new array or a new string
other solution:
---------------
function reverse(str){
    return str.split("").reverse().join("")
}
time complexity: O(n) - linear time complexity
space complexity: O(n) - linear space complexity because we are creating a new array and a new string

---------------------------------------------------------------------------------------------------------------------------

uniqueSting:
------------

 "aabb" => "ab"
function uniqueString(str){
    let newStr=""
    for(let i=0;i<str.length;i++){
        if(!newStr.includes(str[i])){
            newStr+=str[i]
        }
    }
    return newStr
}
time complexity: O(n^2) - quadratic time complexity
space complexity: O(n) - linear space complexity because we are creating a new string

other solution:
---------------
function uniqueString(str){
    let newStr= new Set(str)
    return [...newStr].join("")
}
time complexity: O(n) - linear time complexity
space complexity: O(n) - linear space complexity because we are creating a new set and a new array
---------------------------------------------------------------------------------------------------------------------------

isPalindrome:
-----------------
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

space complexity: O(1) - constant space complexity because we are not creating a new array or a new string


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
---------------------------
a-function isPalindrome(str){
    return str===reverse(str)
}
time complexity: O(n) - linear time complexity
space complexity: O(n) - linear space complexity because we are creating a new string

b-function isPalindrome(str){
    return str===str.split("").reverse().join("")
}
time complexity: O(n) - linear time complexity
space complexity: O(n) - linear space complexity because we are creating a new array and a new string
this is not efficient because we are creating a new array and a new string and the time complexity is O(n)

other solution:
---------------
-use two pointers start and end and compare the characters at these pointers and move the pointers towards each other until they meet in the middle
-this 
c-function isPalindrome(str){
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
time complexity: O(n/2)=O(n) - linear time complexity as the input size increases the time complexity increases by the same factor 
               : it is not log(n) because we are not dividing the input size by a constant number in each iteration 
space complexity: O(1) - constant space complexity because we are not creating a new array or a new string
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

4- Shortest Palindrome ,You are given a string s. You can convert s to a palindrome by adding characters in front of it.
Return the shortest palindrome you can find by performing this transformation.
example:
--------
Input: s = "aacecaaa"
Output: "aaacecaaa"
Input: s = "abcd"
Output: "dcbabcd"


pseudo code:
-----------
1. create rev string 
2. longest palindrome  = rev + s
3. to get the shortest palindrome
    - loop through the string
    - check the longest prefix of str === longest suffix of rev
    - then ignore the longest suffix of rev and add the remaining characters of str to the beginning of rev



function shortestPalindrome(s){     //s = "aacecaaa" 
    if(s === null || s.length === 0) return "";
    let rev=s.split("").reverse().join("") // rev = "aaacecaa"
    for(let i=0;i<s.length;i++){
        if(s.slice(0,s.length-i)===rev.slice(i)){ //  "aacecaaa" === "aaacecaa" , "aacecaa" === "aacecaa" i=1
            return rev.slice(0,i)+s  //   "a"+ "aacecaaa" = "aaacecaaa"
        }
    }
}
time complexity: O(n^2) - quadratic time complexity 
               : as we are looping through the string and comparing the prefix of the string with the suffix of the rev string
space complexity: O(n) - linear space complexity because we are creating a new string

other solution(efficient):
--------------------------
by using KMP algorithm

pseudo code:
-----------
1. create rev string
2. str = s+"#"+rev
3. lps = getLPS(str)
4. return rev.slice(0,s.length-lps[str.length-1])+s    

function shortestPalindrome(s){     //s = "abcd
   
    let rev=s.split("").reverse().join("") // rev = "dcba"
    let str=s+"#"+rev // str = "abcd#dcba"
     // we add s+"#" to the rev string to avoid overlapping of prefix and suffix
     // # is used to avoid overlapping of prefix and suffix ex: "aacecaaa" and "aaacecaa" 
       if we don't use # then the prefix and suffix will overlap and we will get the wrong result
       the overlapping happens when the prefix of the string is equal to the suffix of the rev string 
         ex: "aacecaaa" and "aaacecaa" 
            "aacecaaa" === "aaacecaa" , "aacecaa" === "aacecaa" i=1 
    let lps=getLPS(str) // where is the last element of the lps array is the length of the longest prefix which is also a suffix
    return rev.slice(0,s.length-lps[str.length-1])+s  // "dcba".slice(0,4-3)+"abcd" = "d"+"abcd" = "dabcd"

}

//return array of longest prefix which is also a suffix for each index
// ex : "aba" => [0,0,1] , "abab" => [0,0,1,2]
at index 0: "a" => [0]
at index 1: "ab" =>  prefix = ["a"] , suffix = ["b"] => [0]
at index 2: "aba" => prefix = ["a","ab"] , suffix = ["a","ba"] => [1]
function getLPS(str){                      
    let lps=new Array(str.length).fill(0)   
    let i=1
    let j=0
    while(i<str.length){
        if(str[i]===str[j]){
            lps[i]=j+1
            i++
            j++
        }else{
            if(j===0){
                lps[i]=0
                i++
            }else{
                j=lps[j-1]
            }
        }
    }
    return lps
}
time complexity: O(n) - linear time complexity
space complexity: O(n) - linear space complexity because we are creating a new array

---------------------------------------------------------------------------------------------------------------------------

5- Longest Palindrome,Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

example:
--------
Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

a- brute force solution:
-----------------------
- generate all the substrings of the string and check if it is a palindrome or not and return the longest palindrome
- time complexity: O(n^3) - cubic time complexity
- space complexity: O(n) - linear space complexity because we are creating a new string

function longestPalindrome(s){ // s = "abccccdd"
    let longest=""
    for(let i=0;i<s.length;i++){
        for(let j=i;j<s.length;j++){
            let subStr=s.slice(i,j+1) // "a" , "ab" , "abc" , "abcc" , "abccc" , "abcccc" , "abccccd" , "abccccdd" , "b" , "bc" , "bcc" , "bccc" , "bcccc" , "bccccd" , "bccccdd" , "c" , "cc" , "ccc" , "cccc" , "ccccc" , "cccccd" , "ccccdd" , "c" , "cc" , "ccc" , "cccc" , "ccccc" , "ccccd" , "ccccdd" , "c" , "cc" , "ccc" , "cccc" , "ccccc" , "cccd" , "ccdd" , "c" , "cc" , "ccc" , "cccc" , "ccccc" , "ccd" , "cdd" , "c" , "cc" , "ccc" , "cccc" , "ccccc" , "cd" , "dd" , "d"
            if(isPalindrome(subStr) && subStr.length>longest.length){ // "a" , "b" , "c" , "c" , "c" , "c" , "c" , "c" , "d" , "c" , "c" , "c" , "c" , "c" , "c" , "d" , "c" , "c" , "c" , "c" , "c" , "d" , "c" , "c" , "c" , "c" , "d" , "c" , "c" , "c" , "d" , "c"
                longest=subStr // "abccccba"
            }
        }
    }
    return longest.length
}

b- efficient solution:
---------------------
- we can use a map to store the frequency of each character
- then we loop through the map and check if the frequency of the character is even then we add it to the count
- if the frequency of the character is odd then we add it to the count and subtract 1 from it
- if the count is less than the length of the string then we add 1 to the count
- time complexity: O(n) - linear time complexity
- space complexity: O(n) - linear space complexity because we are creating a new map



pseudo code:
-----------
1. create a map to store the frequency of each character
2. loop through the map
3. if the frequency of the character is even then add it to the count
4. if the frequency of the character is odd then add it to the count and subtract 1 from it
5. if the count is less than the length of the string then add 1 to the count

function longestPalindrome(s){ // s = "abccccdd"
    let map={}
    let count=0
   s.split("").forEach(char=>map[char]=map[char]+1||1) // {a:1,b:1,c:4,d:2}
    Object.values(map).forEach(value=>{ value%2===0 ? count+=value : count+=value-1 }) // 4%2===0 ? 0+4 : 0+4-1 = 3
    return count<s.length ? count+1 : count // 6<8 ? 6+1 : 6 = 7
}
time complexity: O(n) - linear time complexity
space complexity: O(n) - linear space complexity because we are creating a new object

---------------------------------------------------------------------------------------------------------------------------

6-Lexicographically Smallest Palindrome
You are given a string s consisting of lowercase English letters, and you are allowed to perform operations on it. In one operation, you can replace a character in s with another lowercase English letter.
Your task is to make s a palindrome with the minimum number of operations possible. If there are multiple palindromes that can be made using the minimum number of operations, make the lexicographically smallest one.
A string a is lexicographically smaller than a string b (of the same length) if in the first position where a and b differ, string a has a letter that appears earlier in the alphabet than the corresponding letter in b.
Return the resulting palindrome string.

example:
--------
Input: s =  "egcfe"  output: "efcfe"


a- brute force solution:
-----------------------

function lexicographicallySmallestPalindrome(s){ // s = "egcfe"
    let newStr=[]
    let start=0
    let end=s.length-1
    while(start<end){ 
        if(s[start] === s[end] || (s[start] !== s[end] && s[start] < s[end])){
            newStr[start]=s[start]
            newStr[end]=s[start]
        }else{
            newStr[start]=s[end]
            newStr[end]=s[end]
        }
        start++
        end--
    }
    return newStr.join("")
}
- time complexity: O(n) - linear time complexity
- space complexity: O(n) - linear space complexity because we are creating a new array

---------------------------------------------------------------------------------------------------------------------------

what is the difference between a substring and a subsequence?
------------------------------------------------------------
- a substring is a contiguous sequence of characters within a string
example: "abc" is a substring of "abcde"
- a subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements
example: "ace" is a subsequence of "abcde"

---------------------------------------------------------------------------------------------------------------------------
 7-Longest Palindromic Subsequence
    Given a string s, find the longest palindromic subsequence's length in s.
    A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

    example:
    --------
    Input: s = "bbbab"
    Output: 4
    Explanation: One possible longest palindromic subsequence is "bbbb".

    a- brute force solution:
    -----------------------
    - generate all the subsquences of the string and check if it is a palindrome or not and return the longest palindrome
    - time complexity: O(2^n) - exponential time complexity
    - space complexity: O(n) - linear space complexity because we are creating a new string

    b- efficient solution:
    ---------------------
    - we can use dynamic programming to solve this problem
    - we can create a 2D array to store the length of the longest palindromic subsequence
    - we can loop through the string from the end to the beginning
    - we can loop through the string from the current index to the end
    - if the current character is equal to the character at the current index then we can add 2 to the value of the current index
    - if the current character is not equal to the character at the current index then we can get the maximum value between the value of the next index and the value of the current index
    - we can return the value of the first index
    - time complexity: O(n^2) - quadratic time complexity

    pseudo code:
    -----------
    1. create a 2D array to store the length of the longest palindromic subsequence
    2. loop through the string from the end to the beginning
    3. loop through the string from the current index to the end
    4. if the current character is equal to the character at the current index then we can add 2 to the value of the current index
    5. if the current character is not equal to the character at the current index then we can get the maximum value between the value of the next index and the value of the current index
    6. return the value of the first index

    function longestPalindromicSubsequence(s){ // s = "bbbab"
        let dp=Array(s.length
        for(let i=s.length-1;i>=0;i--){ // i=4
            dp[i]
            for(let j=i;j<s.length;j++){ // j=4
                if(s[i] === s[j]){
                    dp[i][j]=2+dp[i+1][j-1]
                }else{
                    dp[i][j]=Math.max(dp[i+1][j],dp[i][j-1])
                }
            }
        }
        return dp[0][s.length-1] // dp[0][4] = 4
    }
    time complexity: O(n^2) - quadratic time complexity
    space complexity: O(n^2) - quadratic space complexity because we are creating a new 2D array

    ---------------------------------------------------------------------------------------------------------------------------
    8-Longest Common Subsequence
    Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.
    A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.
    For example, "ace" is a subsequence of "abcde".

    subastring: co

    example:
    --------
    Input: text1 = "abcde", text2 = "ace"  output: 3
    Explanation: The longest common subsequence is "ace" and its length is 3.

    a- brute force solution:
    -----------------------
    - generate all the subsquences of the first string and check if it is a subsequence of the second string or not and return the longest subsequence
    - time complexity: O(2^n) - exponential time complexity
    - space complexity: O(n) - linear space complexity because we are creating a new string

    b- efficient solution:
    ---------------------
    - we can use dynamic programming to solve this problem
    - we can create a 2D array to store the length of the longest common subsequence
    - we can loop through the first string from the end to the beginning
    - we can loop through the second string from the end to the beginning
    - if the current character of the first string is equal to the current character of the second string then we can add 1 to the value of the current index

    - if the current character of the first string is not equal to the current character of the second string then we can get the maximum value between the value of the next index of the first string and the value of the current index of the second string
    - we can return the value of the first index
    - time complexity: O(n^2) - quadratic time complexity

    function longestCommonSubsequence(text1,text2){ // text1 = "abcde", text2 = "ace"

        let dp=Array(text1.length+1).fill(0).map(()=>Array(text2.length+1).fill(0)) 
        //why we need to add extra row and column?


        for(let i=text1.length-1;i>=0;i--){ // i=4
            for(let j=text2.length-1;j>=0;j--){ // j=2
                if(text1[i] === text2[j]){
                    dp[i][j]=1+dp[i+1][j+1]
                }else{
                    dp[i][j]=Math.max(dp[i+1][j],dp[i][j+1])
                }
            }
        }
        return dp[0][0] // dp[0][0] = 3
    }
    time complexity: O(n^2) - quadratic time complexity
    space complexity: O(n^2) - quadratic space complexity because we are creating a new 2D array

    how to return the longest common subsequence string?
    ---------------------------------------------------
    - we can use the same approach as above but we need to add extra code to return the longest common subsequence string
    - we can create a new string to store the longest common subsequence string
    - use 2 pointers to loop through the 2D array
    - if curr of 1st s1 === curr of 2nd s2 
        - result+=curr of 1st s1
        - i++
        - j++
    - else if right > down
        - j++
    - else
        - i++
    - return result


    function longestCommonSubsequenceStr(text1,text2){ // text1 = "abac", text2 = "cab"
        let dp=Array(text1.length+1).fill(0).map(()=>Array(text2.length+1).fill(0))
        let result=""
        for(let i=text1.length-1;i>=0;i--){ // i=3
            for(let j=text2.length-1;j>=0;j--){ // j=2
                if(text1[i] === text2[j]){
                    dp[i][j]=1+dp[i+1][j+1]
                }else{
                    dp[i][j]=Math.max(dp[i+1][j],dp[i][j+1])
                }
            }

        }
        let i=0
        let j=0
        while(i<text1.length && j<text2.length){
            if(text1[i] === text2[j]){
                result+=text1[i]
                i++
                j++
            }else if(dp[i][j+1] > dp[i+1][j]){
                j++
            }else{
                i++
            }
        }


        return result // result = "ab"
    ---------------------------------------------------------------------------------------------------------------------------
            
9-Shortest Common Supersequence
  Given two strings str1 and str2, return the shortest string that has both str1 and str2 as subsequences. If there are multiple valid strings, return any of them.
  A string s is a subsequence of string t if deleting some number of characters from t (possibly 0) results in the string s.
    For example, "ace" is a subsequence of "abcde" 

    example:
    --------
    Input: str1 = "abac", str2 = "cab"  output: "cabac"

    function shortestCommonSupersequence(str1,str2){ // str1 = "abac", str2 = "cab"

        let lcss= lcsStr(str1,str2) // "ab"
        let result=""
        let i=0
        let j=0
        let k=0
        while(k<lcss.length){
            while(str1[i] !== lcss[k]){   
                result+=str1[i]           
                i++
            }
            while(str2[j] !== lcss[k]){
                result+=str2[j]      // result = "c"   
                j++
            }
            result+=lcss[k]       // result = "ca"  // result = "cab"
            i++
            j++
            k++
        }

        
        
        return result+str1.slice(i)+str2.slice(j) // result = "cab" + "ac"   // result = "cabac"
    }
    supersequence of two str = str1+str2 as subsequences
    lscs

    ---------------------------------------------------------------------------------------------------------------------------

    10-131. Palindrome Partitioning
    Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.
    A palindrome string is a string that reads the same backward as forward.

    example:
    --------
    Input: s = "aab"  output: [["a","a","b"],["aa","b"]]
    Input: s = "a"  output: [["a"]]
    Input: s = "efe"  output: [["e","f","e"],["efe"]]

    function partition(s){ // s = "aab"
        let result=[]
        for(let i=0;i<s.length;i++){
            let left=s.slice(0,i+1) // left = "a"
            if(isPalindrome(left)){
                let right=s.slice(i+1) // right = "ab"
                let rightResult=partition(right) // rightResult = [["a","b"]]
                if(rightResult.length === 0){
                    result.push([left])
                }else{
                    for(let j=0;j<rightResult.length;j++){
                        result.push([left,...rightResult[j]]) // result = [["a","a","b"]]
    }

    function isPalindrome(str){
        let left=0
        let right=str.length-1
        while(left<right){
            if(str[left] !== str[right]){
                return false
            }
            left++
            right--
        }
        return true
    }


    

    








*/
