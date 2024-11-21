/*
1-Binary Tree Paths - Given the root of a binary tree, return all root-to-leaf paths in any order.
ex: 
      1
    /   \
   2     3
    \
     5

output: ["1->2->5","1->3"]

- we need to traverse the tree and store the path from the root to the leaf nodes in an array
- we need to do this recursively for all the nodes in the tree  until we reach the leaf nodes
- pseudo code:
--------------
- create an empty array to store the paths
- create a helper function that takes a node and path as arguments
    - if the node is exist
        - if the node is a leaf node
            - push the path to the array
        - call the helper function with the left node and path+node.val+"->"
        - call the helper function with the right node and path+node.val+"->"
- call the helper function with the root node and path=""
- return the array

function binaryTreePaths(root){
    let paths=[]
    function helper(node,path){
        if(node){
            if(!node.left && !node.right){
                paths.push(path+node.val)
            }
            helper(node.left,path+node.val+"->")
            helper(node.right,path+node.val+"->")
        }
    }
    helper(root,"")
    return paths
}
time complexity: O(n) - linear time complexity
space complexity: O(n) - linear space complexity

other solution:
---------------
function binaryTreePaths(root){
    if(!root) return []
    let paths=[]
    let path=root.val.toString()
    function helper(node,path){
        if(!node.left && !node.right){
            paths.push(path)
        }
        if(node.left){
            helper(node.left,path+"->"+node.left.val)
        }
        if(node.right){
            helper(node.right,path+"->"+node.right.val)
        }
    }
    helper(root,path)



    return paths
}
time complexity: O(n) - linear time complexity
space complexity: O(n) - linear space complexity
---------------------------------------------------------------------------------------------------------------------------
2-Leaf-Similar Trees
- Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.
- Two binary trees are considered leaf-similar if their leaf value sequence is the same.
- Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.
ex:
         3               3
        /   \           /   \
       5     1         5     1
      / \   / \       / \   / \
     6   2 9   8     6   7 4   2
        / \                   / \
       7   4                 9   8

output: true - the leaf value sequence of both trees are [6,7,4,9,8]

- we need to traverse the tree and store the leaf nodes in an array
- we need to do this recursively for all the nodes in the tree  until we reach the leaf nodes
- pseudo code:
--------------
- create an empty array to store the leaf nodes
- create a helper function that takes a node as an argument
    - if the node is exist
        - if the node is a leaf node
            - push the node value to the array
        - call the helper function with the left node
        - call the helper function with the right node
- call the helper function with the root node

- function leafSimilar(root1,root2){
    let leafNodes1=[]
    let leafNodes2=[]
    function helper(node,leafNodes){
        if(node){
            if(!node.left && !node.right){
                leafNodes.push(node.val)
            }
            helper(node.left,leafNodes)
            helper(node.right,leafNodes)
        }
    }
    helper(root1,leafNodes1)
    helper(root2,leafNodes2)
    if(leafNodes1.length !== leafNodes2.length) return false
    for(let i=0;i<leafNodes1.length;i++){
        if(leafNodes1[i] !== leafNodes2[i]) return false
    }
    return true
}
---------------------------------------------------------------------------------------------------------------------------

3-Balanced Binary Tree
- Given a binary tree, determine if it is height-balanced.
- For this problem, a height-balanced binary tree is defined as:
    - a binary tree in which the left and right subtrees of every node differ in height by no more than 1.
ex:                              ex: 
            3                           1
           / \                         / \
          9  20                       2   2
             /  \                    / \
            15   7                  3   3

output: true                     output: false

- we need to traverse the tree and check if the difference between the height of the left subtree and the right subtree is greater than 1
- we need to do this recursively for all the nodes in the tree  until we reach the leaf nodes
- pseudo code:
--------------
- create a helper function that takes a node as an argument
    - if the node is exist
        - if the node is a leaf node    
            - return 0
        - get the height of the left subtree
        - get the height of the right subtree
        - if the difference between the height of the left subtree and the right subtree is greater than 1
            - return -1
        - return the maximum height between the left subtree and the right subtree
- call the helper function with the root node
- if the helper function return -1
    - return false
- return true

function isBalanced(root){
    

*/