/*
1-Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.
Example 1: Input: s = "abab" Output: true Explanation: It is the substring "ab" twice.
Example 2: Input: s = "aba" Output: false
Example 3: Input: s = "abcabcabcabc" Output: true Explanation: It is the substring "abc" four times or the substring "abcabc" twice.


pseudo code:
-----------
- loop through the string
-get sub from 0 to i+1
-get the count of sub in the string
-check if sub.repeat(count) is equal to the string
    -if yes return true
-return false


function repeatedSubstringPattern(s){
    if(s.length < 2) return false

    for(let i = 0 ; i < s.length ; i++){
        let sub = s.slice(0,i+1)
        let count = s.length / sub.length
        if(sub.repeat(count) === s) return true
    }
    return false
}



time complexity: O(n) - linear time complexity

other solution:
---------------
function repeatedSubstringPattern(s){
    let len=s.length
    for(let i=1;i<=Math.floor(len/2);i++){
        if(len%i===0){
            let sub=s.slice(0,i)
            let count=len/i
            let str=""
            for(let j=0;j<count;j++){
                str+=sub
            }
            if(str===s) return true
        }
    }
    return false
}
time complexity: O(n^2) - quadratic time complexity

other solution:
---------------
function repeatedSubstringPattern(s){
    return (s+s).slice(1,-1).includes(s)
}
time complexity: O(n) - linear time complexity

---------------------------------------------------------------------------------------------------------------------------
3-Shuffle String
s="codeleet" indices=[4,5,6,7,0,2,1,3] => "leetcode"

function restoreString(s,indices){
    let arr=Array(s.length)
    for(let i=0;i<s.length;i++){
        arr[indices[i]]=s[i]
    }
    return arr.join("")
}
time complexity: O(n) - linear time complexity
---------------------------------------------------------------------------------------------------------------------------

4- DI String Match  (D=decrease, I=increase)  
s="IDID" => [0,4,1,3,2]
s="III" => [0,1,2,3]
s="DDI" => [3,2,0,1]

function diStringMatch(s){
    let output=[]
    let countI=0
    let countD=s.length
    for(let i=0;i<s.length;i++){
        if(s[i]==="I"){
            output.push(countI)
            countI++
        }else{
            output.push(countD)
            countD--
        }
    }
    s[s.length-1]==="I" ? output.push(countI) : output.push(countD)
    return output
}
time complexity: O(n) - linear time complexity
---------------------------------------------------------------------------------------------------------------------------




*/