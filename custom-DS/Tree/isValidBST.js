/*
1-is a valid binary search tree (BST).
------------------------------------

the tree is a binary search tree if
-each node has at most two children
-all the values of the left nodes are less than the value of the root node
-all the values of the right nodes are greater than the value of the root node

ex:    
     2
    / \
   1   3
output: true

ex:
     5
    / \
    1   4
       / \
      3   6

output: false (because the root node is 5 and the right node is 4 which is less than the root node)

ex:
                   5 (-Infinity,Infinity)
                  / \
 (-Infinity,5)   1   6 (5,Infinity)
                    / \
                   4   7 

output: false (because the root node is 5 and the right node is 6 which is greater than the root node but the left node is 4 which is less than the root node)

-first solution:
---------------
- we can use inorder traversal to get the values of the nodes in the tree
- the values of the nodes in the inorder traversal should be sorted in ascending order
- then we check if the values are sorted or not
- if the values are sorted then the tree is a binary search tree
- if the values are not sorted then the tree is not a binary search tree

function isValidBST(root){
    let arr=inorderTraversal(root)
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]>=arr[i+1]) return false
    }
    return true
}
function inorderTraversal(root){
    let arr=[]
    if(root){
        arr.push(...inorderTraversal(root.left))
        arr.push(root.val)
        arr.push(...inorderTraversal(root.right))
    }
    return arr
}
time complexity: O(n) - linear time complexity
space complexity: O(n) - linear space complexity

-second solution:
----------------
- we can use helper function to check if the values of the left nodes are less than the value of the root node
- we can use helper function to check if the values of the right nodes are greater than the value of the root node

function isValidBST(root){
    return helper(root,-Infinity,Infinity)
}
function helper(root,min,max){
    if(!root) return true
    if(root.val<=min || root.val>=max) return false
    return helper(root.left,min,root.val) && helper(root.right,root.val,max)
}
time complexity: O(n) - linear time complexity
space complexity: O(n) - linear space complexity





*/