/*
array functions
---------------
1- get the maximum number in the array

pseudo code:
-----------
- use the reduce method to find the maximum number in the array
- set the initial value of the accumulator to = arr[0]
- compare each element with the accumulator
- if the element is greater than the accumulator, set the accumulator to the element
- return the accumulator




function getMax(arr) {
    return Math.max(...arr);
}

- time complexity: O(n) - linear time complexity because we have to iterate over the array to find the maximum number
- space complexity: O(n) - linear space complexity because we use the spread operator to pass the array elements as arguments to the Math.max() function

better solution:
----------------
function getMax(arr) {
    return arr.reduce((max,num) => num > max ? num : max, arr[0]);
}

- time complexity: O(n) - linear time complexity because we have to iterate over the array to find the maximum number
- space complexity: O(1) - constant space complexity because we don't use any extra space

------------------------------------------------------------------------------------------------------------------------------------------------
2- get the minimum number in the array

function getMin(arr) {
    return arr.reduce((min,num) => num < min ? num : min, arr[0]);
}

console.log(getMin([1,2,3]));  // 1

- time complexity: O(n) - linear time complexity because we have to iterate over the array to find the minimum number
- space complexity: O(1) - constant space complexity because we don't use any extra space
------------------------------------------------------------------------------------------------------------------------------------------------
3- get the sum of all numbers in the array

function getSum(arr) {
   arr.reduce((sum,num) => sum + num, 0);
}

console.log(getSum([1,2,3]));  // 6

- time complexity: O(n) - linear time complexity because we have to iterate over the array to find the sum
- space complexity: O(1) - constant space complexity because we don't use any extra space

------------------------------------------------------------------------------------------------------------------------------------------------

4- get the odd numbers in the array

function getOddNumbers(arr) {

   return arr.filter( num => num % 2 !== 0);
}

console.log(getOddNumbers([1,2,3]));  // [1,3]

- time complexity: O(n) - linear time complexity because we have to iterate over the array to find the odd numbers
- space complexity: O(n) - linear space complexity because .filter() method returns a new array

------------------------------------------------------------------------------------------------------------------------------------------------
5- get the even numbers in the array

function getEvenNumbers(arr) {
    return arr.filter((num => num % 2 === 0);
}

console.log(getEvenNumbers([1,2,3]));  // [2]

- time complexity: O(n) - linear time complexity because we have to iterate over the array to find the even numbers
- space complexity: O(n) - linear space complexity because .filter() method returns a new array

------------------------------------------------------------------------------------------------------------------------------------------------
6- get the unique numbers in the array

function getUniqueNumbers(arr) {
    return arr.filter((num, index) => arr.indexOf(num) === index);
}


console.log(getUniqueNumbers([1,2,1]));  // [1,2]

- time complexity: O(n^2) - quadratic time complexity because we have to iterate over the array and use the indexOf() method inside the filter() method
- space complexity: O(n) - linear space complexity because .filter() method returns a new array

better solution:
----------------
function getUniqueNumbers(arr) {
  
    return [...new Set(arr)];
}

console.log(getUniqueNumbers([1,2,1]));  // [1,2]

- time complexity: O(n) - linear time complexity because we have to iterate over the array to create a set
- space complexity: O(n) - linear space complexity because we use a set to store the unique numbers

------------------------------------------------------------------------------------------------------------------------------------------------
7- get the two maximum numbers in the array

function getTwoMaxNumbers(arr) {
    let max1 = arr[0];
    let max2 = arr[1];
    if (max1 < max2) {
        [max1, max2] = [max2, max1];
    }
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > max1) {
            max2 = max1;
            max1 = arr[i];
        } else if (arr[i] > max2) {
            max2 = arr[i];
        }
    }
    return [max1, max2];
}
    
------------------------------------------------------------------------------------------------------------------------------------------------
8-bubble sort  :
---------------
idea: compare each element with the next element
      swap them if the first element is greater than the second element
      repeat this process until the array is sorted

function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
               [arr[j],arr[j+1]]=[arr[j+1],arr[j]
            }
        }
    }
    return arr
}

 time complexity: O(n^2) - quadratic time complexity

---------------------------------------------------------------------------------------------------------------------------

9- quick sort:
------------------
idea: -divide the array into two parts by
        -choosing a pivot element 
        -put all the elements that are less than the pivot element in the left part
        -put all the elements that are greater than the pivot element in the right part
        -make recursive calls on the left part and the right part until the array is sorted
        -return the concatenation of the left part, the pivot element, and the right part


function quickSort(arr){
    if(arr.length <= 1) return arr 
    let pivot=arr[0] 
    let left=[]
    let right=[]
    for(let i=1;i<arr.length;i++){
        arr[i]<pivot ? left.push(arr[i]) : right.push(arr[i])
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

time complexity: O(nlogn) - linearithmic time
---------------------------------------------------------------------------------------------------------------------------

4- merge sort:
------------------
idea: idea of merge sort is to divide the array into two parts until each part contains only one element
        then merge the two parts by comparing the elements of the two parts and put them in the right place
        repeat this process until the array is sorted

function mergeSort(arr){
    if(arr.length<=1) return arr
    let mid=Math.floor(arr.length/2)
    let left=arr.slice(0,mid)
    let right=arr.slice(mid)
    return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right){
    let result=[]
    while(left.length && right.length){
        left[0]<right[0] ? result.push(left.shift()) : result.push(right.shift())
    }
    return [...result,...left,...right]
}
console.log(mergeSort([2,1,3]))

time complexity: O(nlogn) - linearithmic time

---------------------------------------------------------------------------------------------------------------------------

5- binary search:
------------------
idea: divide the array into two parts
        compare the middle element with the target element
        if the middle element is equal to the target element return the index of the middle element
        if the middle element is greater than the target element search in the left part
        if the middle element is less than the target element search in the right part
        repeat this process until the target element is found or the array is empty 

function binarySearch(arr,target){
    let mid=Math.floor(arr.length/2)
    if(arr[mid]===target) return mid
    if(arr.length===1) return -1
    return arr[mid]>target ? binarySearch(arr.slice(0,mid),target) : binarySearch(arr.slice(mid),target)
}
---------------------------------------------------------------------------------------------------------------------------
6--Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn)
 such that the sum of min(ai, bi) for all i is maximized.
 Return the maximized sum.
 example: nums=[1,4,3,2]
            output: 4
            explanation: 1 and 2 are in the first pair and their min is 1
                         3 and 4 are in the second pair and their min is 3
                         the sum of the min of each pair is 1+3=4

idea : sort the array and add the min of each pair to the sum 

function arrayPairSum(nums){
    let sum=0
    nums.sort((a,b)=>a-b)
    for(let i=0;i<nums.length;i+=2){
        sum+=nums[i]
    }
    return sum
}
---------------------------------------------------------------------------------------------------------------------------
7-permutations:
------------------
-permutation
7-Given an integer array nums and an integer k, return the number of good subarrays of nums.
A good array is an array where the number of different integers in that array is exactly k.
For example, [1,2,3,1,2] has 3 different integers: 1, 2, and 3.
A subarray is a contiguous part of an array.

example: nums=[1,2,1,2,3], k=2
            output: 7
            explanation: [1,2,1], [2,1,2], [1,2,1,2], [2,1,2,3], [1,2], [2,1], [1,2]

idea: 1-create helper function to count the number of different integers in the array
        2-loop over the array and create subarrays
        3-check if the number of different integers in the subarray is equal to k
        4-if yes increment the counter

function subarraysWithKDistinct(nums,k){
    let count=0
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<=nums.length;j++){
            let sub=nums.slice(i,j)
            if(helper(sub)===k) count++
        }
    }
    return count
}

function helper(arr){
    let set=new Set(arr)
    return set.size
}
or function helper(arr){
    let count=0
    let newArr=[]
    for(let i=0;i<arr.length;i++){
        if(!newArr.includes(arr[i])){
            newArr.push(arr[i])
            count++
        }
    }
    return count
}
time complexity: O(n^3) - cubic time

other solution:
--------------
idea: by using sliding window technique we can reduce the time complexity to O(n^2) - quadratic time
             1- we have two pointers (left and right)
             2- we move the right pointer until the number of different integers in the subarray is equal to k
             3- we move the left pointer until the number of different integers in the subarray is less than k
             4- we repeat this process until the right pointer reaches the end of the array  

     
function subarraysWithKDistinct(nums,k){  //[1,2,1,2,3] , k=2  output: 7 [1,2],[1,2,1],[1,2,1,2],[2,1],[2,1,2],[1,2],[2,3]
    let count=0
    let left=0
    let right=0
    let hash={}
    while(right<nums.length){       //right=0,1,2,3,4
        hash[nums[right]] ? hash[nums[right]]++ : hash[nums[right]]=1  //{0:1}
        while(Object.keys(hash).length>k){
            hash[nums[left]]--
            if(hash[nums[left]]===0){
                delete hash[nums[left]]
            }
            left++
        }
        if(Object.keys(hash).length===k){
            count++
            let temp=left
            while(Object.keys(hash).length===k){
                count++
                hash[nums[temp]]--
                if(hash[nums[temp]]===0){
                    delete hash[nums[temp]]
                }
                temp++
            }
        }
        right++
    }
    return count
}

// function subarraysWithKDistinct(nums,k){
//     let count=0
//     for(let i=0;i<nums.length;i++){
//         let left=i
//         let right=i
//         let set=new Set()
//         while(right<nums.length){
//             set.add(nums[right])
//             if(set.size===k){
//                 count++
//             }
//             if(set.size>k){
//                 break
//             }
//             right++
//         }
//         while(left<right){
//             set.delete(nums[left])
//             if(set.size===k){
//                 count++
//             }
//             if(set.size<k){
//                 break
//             }
//             left++
//         }
//     }
//     return count
// }



---------------------------------------------------------------------------------------------------------------------------

*/
