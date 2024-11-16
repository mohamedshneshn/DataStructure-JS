/*
DFS: Depth First Search
-----------------------
- DFS is a method for traversing a tree or graph.

1. Preorder Traversal (root-left-right)
---------------------------------------
- preorder means the root node is visited first, then the left subtree and finally the right subtree.
- ex:
                
                  15
                /    \
              6        18 
            /   \     /  \
          3     7   17   20
     

output: [15,6,3,7,18,17,20]

pseudo code:
-----------
- create an empty array to store the values of the nodes in the tree .
- check if the root node is exist
    - push the value of the root node to the array
    - push the value of the left node to the array()
    - push the value of the right node to the array
- return the array



function preorderTraversal(root){
    let arr=[]
    if(root){
        arr.push(root.val)
        arr.push(...preorderTraversal(root.left)) // we use spread operator to push the values of the array to the array
        arr.push(...preorderTraversal(root.right))
    }
    return arr
}
time complexity: O(n) - linear time complexity
space complexity: O(n) - linear space complexity

---------------------------------------------------------------------------------------------------------------------------

2.Inorder Traversal (left-root-right)
inorder traversal: visit all the left nodes first until we reach the leaf node then read the val
                 : then read the root node
                 : then read all the right nodes
                 : we read the values from bottom to up


              15
            /    \
          6        18 
        /   \     /  \
       3     7   17   20

output: [3,6,7,15,17,18,20]

pseudo code:
-----------
- create an empty array to store the values of the nodes in the tree .
- create a helper function that takes a node as an argument to traverse the tree
    - if the node is exist
    - call the helper function with the left node to get the all the values of the left nodes
    - push the value of the node to the array
    - call the helper function with the right node to get the all the values of the right nodes
- call the helper function with the root node
- return the array


function inorderTraversal(root){
    let arr=[]
    function helper(node){
        if(node){
        helper(node.left)
        arr.push(node.val)
        helper(node.right)
        }
    }
    helper(root)
    return arr
}

time complexity: O(n) - linear time complexity
space complexity: O(n) - linear space complexity

using stack:
-----------
- create an empty array to store the values of the nodes in the tree .
- create a stack to store the nodes in the tree
- create a variable to store the current node and assign it to the root node
- while the stack is not empty or the current node is not null
    - if the current node is not null
        - push the current node to the stack
        - assign the current node to the left node
    - else
        - pop the node from the stack  // return the last element in the array
        - push the value of the node to the array
        - assign the current node to the right node
- return the array

function inorderTraversal(root){
    let arr=[]
    let stack=[]
    let current=root
    while(stack.length || current){
        if(current){
            stack.push(current)
            current=current.left
        }else{
            current=stack.pop()
            arr.push(current.val)
            current=current.right
        }
    }
    return arr
}


---------------------------------------------------------------------------------------------------------------------------

3.Postorder Traversal (left-right-root)
postorder traversal: visit all the left nodes first until we reach the leaf node then read the val
                : then read all the right nodes
                : then read the root node
                : we read the values from bottom to up

       15
     /    \
    6        18
  /   \     /  \
 3     7   17   20

output: [3,7,6,17,20,18,15]

function postorderTraversal(root){
    let arr=[]
    function helper(node){
        if(node){
        helper(node.left)
        helper(node.right)
        arr.push(node.val)
        }
    }
    helper(root)
    return arr
}
time complexity: O(n) - linear time complexity
space complexity: O(n) - linear space complexity
---------------------------------------------------------------------------------------------------------------------------

4- Level Order Traversal (BFS)
------------------------------
-BFS (Breadth First Search) is an algorithm for traversing or searching tree or graph data structures.
- we visit all the nodes in the same level first then we go to the next level
- we use queue to store the nodes in the tree

        15
      /    \
    6        18
  /   \     /  \
  3     7   17   20

output: [15,6,18,3,7,17,20] 

pseudo code:
-----------
- create an empty array to store the values of the nodes in the tree .
- create a queue to store the nodes in the tree
- create a variable to store the current node and assign it to the root node
- push the current node to the queue
- while the queue is not empty
    - assign the current node to the first node in the queue
    - remove the first node from the queue
    - push the value of the node to the array
    - if the current node has a left node
        - push the left node to the queue
    - if the current node has a right node
        - push the right node to the queue
- return the array

function levelOrderTraversal(root){
    let arr=[]
    let queue=[root]
    
    while(queue.length){
        let current=queue.shift()
        arr.push(current.val)
        if(current.left){
            queue.push(current.left)
        }
        if(current.right){
            queue.push(current.right)
        }
    }


    return arr
}


when we use BFS and DFS?
------------------------
- we use dfs when 
    - we want to visit all the nodes in the tree
    - we want to find a path from the root node to a leaf node
    - we want to find a path from the root node to a specific node
- we use bfs when
    - we want to find the shortest path from the root node to a leaf node
    - we want to find the shortest path from the root node to a specific node
    - we want to find the shortest path from a node to another node
    - we want to find the shortest path from a node to a leaf node
    



*/