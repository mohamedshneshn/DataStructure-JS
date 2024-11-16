/*
1-Minimum Depth of Binary Tree

Given a binary tree, find its minimum depth.
The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
           3
         /   \
        9      20
             /   \
            15    7
output: 2

-brute force solution:
---------------------
- get the all the leaf nodes in the tree and store their depth in an array
- return the minimum depth in the array
- pseudo code:
-------------
- create an empty array to store the depth of the leaf nodes
- create a helper function that takes a node and depth as arguments
    - if the node is exist
    - if the node is a leaf node
        - push the depth to the array
    - call the helper function with the left node and depth+1
    - call the helper function with the right node and depth+1
- call the helper function with the root node and depth=1
- return the minimum depth in the array

function minDepth(root){
    let minDepth=Infinity
    function helper(node,depth){
        if(node){
            if(!node.left && !node.right){
                if(depth<minDepth){
                    minDepth=depth
                }
            }
            helper(node.left,depth+1)
            helper(node.right,depth+1)
        }
    }
    helper(root,1)
    return minDepth
}
time complexity: O(n) - linear time complexity
space complexity: O(n) - linear space complexity

the problem with this solution is that we have to traverse the whole tree to get the minimum depth
so we can use BFS (breadth first search) to get the minimum depth
- we traverse the tree level by level
- at each level we check if the node is a leaf node or not
- if the node is a leaf node we return the depth
- if the node is not a leaf node we push the left and right nodes to the queue
- we increment the depth by 1
- we repeat the process until we find the leaf node


function minDepth(root){
    if(!root) return 0
    let queue=[root]  
    let depth=1     // we start with 1 because we have the root node
    while(queue.length){  
        let size=queue.length 
        for(let i=0;i<size;i++){ 
            let node=queue.shift() 
            if(!node.left && !node.right)  return depth
            if(node.left)        queue.push(node.left)
            if(node.right)       queue.push(node.right)
            
        }
        depth++
    }
    return depth
}
time complexity: O(n) - linear time complexity
space complexity: O(n) - linear space complexity

---------------------------------------------------------------------------------------------------------------------------
2-Maximum Depth of Binary Tree
max depth: the number of nodes between the root node and the farthest leaf nodemm
Given a binary tree, find its maximum depth.
The maximum depth is the number of nodes along the longest path from the root node down to the nearest leaf node.
              3
            /   \
          9     20  
               /   \
              15    7
output: 3

- brute force solution:
----------------------
- get the all the leaf nodes in the tree and store their depth in an array
- return the maximum depth in the array
- pseudo code:
-------------
- create an empty array to store the depth of the leaf nodes
- create a helper function that takes a node and depth as arguments
    - if the node is exist
    - if the node is a leaf node
        - push the depth to the array
    - call the helper function with the left node and depth+1
    - call the helper function with the right node and depth+1
- call the helper function with the root node and depth=1
- return the maximum depth in the array

function maxDepth(root){
    let maxDepth=0
    function helper(node,depth){
        if(node){
            if(!node.left && !node.right){
                if(depth>maxDepth){
                    maxDepth=depth
                }
            }
            helper(node.left,depth+1)
            helper(node.right,depth+1)
        }
    }
    helper(root,1)
    return maxDepth
}
time complexity: O(n) - linear time complexity
space complexity: O(n) - linear space complexity

the problem with this solution is that we have to traverse the whole tree to get the maximum depth
so we can use BFS (breadth first search) to get the maximum depth
BFS: we traverse the tree level by level


function maxDepth(root){
    if(!root) return 0
    let queue=[root]
    let depth=0  // we start with 0 because we are counting the edges not the nodes
    while(queue.length){
        let size=queue.length
        for(let i=0;i<size;i++){
            let node=queue.shift()
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        depth++
    }
    return depth
}
time complexity: O(n) - linear time complexity
space complexity: O(n) - linear space complexity
other solution:
---------------

function maxDepth(root){
    if(!root) return 0
    return Math.max(maxDepth(root.left),maxDepth(root.right))+1
}
time complexity: O(n) - linear time complexity






   





 
        

           



*/