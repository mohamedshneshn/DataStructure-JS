/*
Tree: A tree is a data structure that consists of nodes in a parent/child relationship 
        - each node can point to a number of nodes
        - each node can only point to one node
        - the top node is called the root node
        - the nodes at the bottom are called leaf nodes
        - the nodes in the middle are called intermediate nodes
        - the nodes that are connected to the same parent node are called siblings
        - the nodes that are connected to the same child node are called cousins
        - the nodes that are connected to the same parent node are called siblings
        : A tree is a non-linear data structure that means that there is no sequential access to the elements 
          - unlike arrays , linked lists , stacks and queues which are linear data structures that means that there is sequential access to the elements
         
        : root node: the top node in a tree (the only node that doesn't have a parent node)
        : child node: a node directly connected to another node when moving away from the root node
        : parent node: the converse notion of a child node
        : sibling nodes: a group of nodes with the same parent node
        : leaf node: a node with no children
        : edge: the connection between one node and another
        : height of a tree: the number of edges from the root node to the furthest leaf node
        : height of a node: the number of edges from the node to the furthest leaf node
        : depth of a node: the number of edges from the root node to the node (the number of edges on the path from the root node to the node)
        : A tree can be represented by a linked list or an array

Binary Tree: A binary tree is a tree in which each node has at most two children
              
Binary Search Tree: A binary search tree is a binary tree 
                  :in which the left child is less than the parent node and the right child is greater than the parent node
            
        

Binary Search Tree Operations:
------------------------------
1. insert(value): inserts a node with the given value in the bst
2. search(value): searches for a node with the given value in the bst
3. delete(value): deletes a node with the given value from the bst
4. traverse(): traverses the bst
            : inorder traversal: left subtree -> root node -> right subtree (depth first search)(DFS)
            : preorder traversal: root node -> left subtree -> right subtree (depth first search)(DFS)
            : postorder traversal: left subtree -> right subtree -> root node (depth first search)(DFS)
            : level order traversal: level by level from left to right (breadth first search)(BFS)
5. getMin(): returns the minimum value in the bst
6. getMax(): returns the maximum value in the bst
7. getHeight(): returns the height of the bst
8. getDepth(value): returns the depth of the node with the given value
9. getLevel(value): returns the level of the node with the given value
10. getLeafCount(): returns the number of leaf nodes in the bst
11. getNodesCount(): returns the number of nodes in the bst


implementation of a bst:
------------------------
class Node{                       // node class for a bst w
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null     //root is the top node in a tree
    }
    isEmpty(){
        return this.root===null
    }

    insert(value){
        let newNode=new Node(value)
        if(this.isEmpty()){
            this.root=newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(root,newNode){                    //helper function for insert method 
        if(newNode.value<root.value){           //if the value of the new node is less than the value of the root node
            if(root.left===null){               //if the left child of the root node is null
                root.left=newNode               //the left child of the root node is the new node
            }else{
                this.insertNode(root.left,newNode)  //else call the insertNode function again with the left child of the root node as the root node
            }
        }else{
            if(root.right===null){           //if the right child of the root node is null
                root.right=newNode          //the right child of the root node is the new node
            }else{
                this.insertNode(root.right,newNode) //else call the insertNode function again with the right child of the root node as the root node
            }
        }
    }
    search(value){
        if(this.isEmpty()){
            return false
        }
        if(this.root.value===value){
            return true
        }
        let current=this.root
        while(current){
            if(value<current.value){
                current=current.left
            }else if(value>current.value){
                current=current.right
            }else{
                return true
            }
        }
        return false
    }
    -----------------------------------------------
    3- pseudo code for preorder traversal:
    -----------------------------------
    preOrder : read the value of the root node first then read the value of all left nodes then read the value of all right nodes
    - if the root is null, return
    - print the value of the root node
    - traverse the left subtree
    - traverse the right subtree

     preOrder(root){                       //root-left-right
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root){                        //left-root-right
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
    postOrder(root){                      //left-right-root
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

   4- pseudo code for level order traversal:
    --------------------------------------
    - create a queue and add the root node to the queue [1]
    - while the queue is not empty
        - remove the node from the queue and print its value
        - if the removed node has a left child, add it to the queue
        - if the removed node has a right child, add it to the queue

    levelOrder(){
        if(this.isEmpty()){
            return
        }
        let queue=[]
        queue.push(this.root)
        while(queue.length){
            let current=queue.shift()
            console.log(current.value)
            if(current.left){
                queue.push(current.left)
            }
            if(current.right){
                queue.push(current.right)
            }
        }
    }
-------------------------------------------------------------
    5- pseudo code for getMin:
    -------------------------
    - min value is the left most node in the bst
    - if the bst is empty, return null
    - else
        - set current to the root node
        - while current has a left child
            - set current to its left child
        - return current value

    getMin(){
        if(this.isEmpty()){
            return
        }
        let current=this.root
        while(current.left){
            current=current.left
        }
        return current.value
    }
-------------------------------------------------------------
    6- pseudo code for getMax:
    -------------------------
    - max value is the right most node in the bst
    - if the bst is empty, return null
    - else
        - set current to the root node
        - while current has a right child
            - set current to its right child
        - return current value

    getMax(){
        if(this.isEmpty()){
            return
        }
        let current=this.root
        while(current.right){
            current=current.right
        }
        return current.value
    }
-------------------------------------------------------------
    7- pseudo code for delete a node:
    --------------------------------
    

    delete(value){
        if(this.isEmpty()){
            return
        }
        this.root=this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if(root===null){
            return null
        }
        if(value<root.value){                //if the value is less than the value of the root node
            root.left=this.deleteNode(root.left,value)  //call the deleteNode function again with the left child of the root node as the root node
        }else if(value>root.value){          //if the value is greater than the value of the root node
            root.right=this.deleteNode(root.right,value) //call the deleteNode function again with the right child of the root node as the root node
        }else{                               //if the value is equal to the value of the root node
            if(root.left===null && root.right===null){  //if the root node has no children
                root=null
            }else if(root.left===null){                //if the root node has only one child
                root=root.right
            }else if(root.right===null){               //if the root node has only one child
                root=root.left
            }else{                                     //if the root node has two children
                let temp=this.getMinNode(root.right)   //get the minimum node in the right subtree
                root.value=temp.value                  //set the value of the root node to the value of the minimum node in the right subtree
                root.right=this.deleteNode(root.right,temp.value) //delete the minimum node in the right subtree
            }
        }
        return root
    }

    -------------------------------------------------------------




 
















let bst=new BinarySearchTree()
console.log(bst.isEmpty()) // true








Binary Search Tree Operations:
------------------------------





1. insert a node:
-----------------
pseudo code:
------------
- create a new node
- starting at the root
    - check if there is a root, if not, the root now becomes that new node
    - if there is a root, check if the value of the new node is greater than or less than the value of the root
    - if it is greater

function insert(root,value){
    let newNode=new Node(value)
    if(!root){
        root=newNode
    }else{
        let current=root
        while(true){
            if(value<current.value){
                if(!current.left){
                    current.left=newNode
                    return root
                }
                current=current.left
            }else{
                if(!current.right){
                    current.right=newNode
                    return root
                }
                current=current.right
            }
        }
    }
    return root
}








*/