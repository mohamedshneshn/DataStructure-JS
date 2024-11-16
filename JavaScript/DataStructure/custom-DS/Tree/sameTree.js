/*
1-same tree:
------------
- given two binary trees, write a function to check if they are the same or not
- two binary trees are considered the same if they are structurally identical and the nodes have the same value

ex:
        
          1       1               1       1    
         / \     / \             /         \
        2   3   2   3           2           2 
      output: true             output: false
 

- we need to traverse the tree to get the values of the nodes
- we need to compare the values of the nodes in the same position in the two trees
- if the values are the same, return true
- if the values are not the same, return false
- pseudo code:
-------------


function isSameTree(p,q){
    let arr1=preorderTraversal(p)
    let arr2=preorderTraversal(q)
    if(arr1.length !== arr2.length) return false
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]!==arr2[i]) return false
    }
    return true
}
function preorderTraversal(root){
    let arr=[]
    if(root){
        arr.push(root.val)
        if(root.left) ? arr.push(...preorderTraversal(root.left)) : arr.push(null)
        if(root.right) ? arr.push(...preorderTraversal(root.right)) : arr.push(null)

    }
    return arr
}

time complexity: O(n) - linear time complexity
this solution is not efficient because we are using extra space to store the values of the nodes in the two trees

- we can do it without using extra space
- we need to traverse the tree to get the values of the nodes
- we need to compare the values of the nodes in the same position in the two trees
- if the values are the same, return true
- if the values are not the same, return false
- pseudo code:

function isSameTree(p,q){
    if(!p && !q) return true // if both trees are empty
    if(!p || !q) return false // if one of the trees is empty
    if(p.val !== q.val) return false // if the values of the nodes are not the same
    return isSameTree(p.left,q.left) && isSameTree(p.right,q.right) // if the values of the nodes are the same
}

time complexity: O(n) - linear time complexity
space complexity: O(n) - linear space complexity

using bfs:
----------
- we need to traverse the tree to get the values of the nodes
- we need to compare the values of the nodes in the same position in the two trees
- if the values are the same, return true
- if the values are not the same, return false
- pseudo code:

function isSameTree(p,q){
    let queue1=[p]
    let queue2=[q]
    while(queue1.length && queue2.length){
        let node1=queue1.shift()
        let node2=queue2.shift()
        if(!node1 && !node2) continue
        if(!node1 || !node2) return false
        if(node1.val !== node2.val) return false
        queue1.push(node1.left)
        queue1.push(node1.right)
        queue2.push(node2.left)
        queue2.push(node2.right)
    }
    return true
}




---------------------------------------------------------------------------------------------------------------------------

2- Convert Sorted Array to Binary Search Tree
----------------------------------------------
- Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.
- A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.
-
- ex:
- input: nums = [-10,-3,0,5,9]
- output: [0,-3,9,-10,null,5]

- we need to get the middle element in the array and make it the root node
- we need to get the left side of the array and make it the left subtree
- we need to get the right side of the array and make it the right subtree
- we need to do the same thing for the left subtree and the right subtree
- we need to do this recursively
- pseudo code:
--------------
function sortedArrayToBST(nums){
    if(!nums.length) return null
    let mid = Math.floor(nums.length/2)
    let root = new TreeNode(nums[mid])          // we create a new node with the middle element in the array
    root.left = sortedArrayToBST(nums.slice(0,mid))
    root.right = sortedArrayToBST(nums.slice(mid+1))
    return root
}
time complexity: O(n) - linear time complexity
space complexity: O(n) - linear space complexity
---------------------------------------------------------------------------------------------------------------------------

3-Given the root of a binary tree, invert the tree, and return its root.
in
- ex:
-     4
-   /   \
-  2     7
- / \   / \
-1   3 6   9
- output:
-     4
-   /   \
-  7     2
- / \   / \
-9   6 3   1

- we need to swap the left subtree with the right subtree
- we need to do this recursively for all the nodes in the tree  until we reach the leaf nodes
- pseudo code:
--------------
function invertTree(root){
    if(!root) return null
    let temp = root.left
    root.left = root.right
    root.right = temp
    if(root.left){ 
        invertTree(root.left)
    }
    if(root.right){
        invertTree(root.right)
    }
    return root
}
time complexity: O(n) - linear time complexity
space complexity: O(n) - linear space complexity

other solution:
---------------
function invertTree(root){
    if(!root) return null
    let queue=[root]
    while(queue.length){
        let node=queue.shift()
        let temp=node.left
        node.left=node.right
        node.right=temp
        if(node.left) queue.push(node.left)
        if(node.right) queue.push(node.right)
    }
    return root
}

---------------------------------------------------------------------------------------------------------------------------

4-Symmetric Tree
----------------
- Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
- ex:
-     1 
-   /   \
-  2     2
- / \   / \
-3   4 4   3
- output: true

- we need to check if the left subtree is the mirror of the right subtree
- we need to do this recursively for all the nodes in the tree  until we reach the leaf nodes
- pseudo code:
--------------
function isSymmetric(root){
    if(!root) return true
    return helper(root.left,root.right)
}
function helper(left,right){
    if(!left && !right) return true
    if(!left || !right) return false
    if(left.val !== right.val) return false
    return helper(left.left,right.right) && helper(left.right,right.left)
}

---------------------------------------------------------------------------------------------------------------------------



*/