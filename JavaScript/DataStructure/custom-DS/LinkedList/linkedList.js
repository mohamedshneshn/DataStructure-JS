/*
linked list:
------------
- series of nodes where each node is connected to the next node
- each node has two parts: data and pointer to the next node
- the first node is called head and the last node is called tail
- the tail node points to null

- linked list is a dynamic data structure (we can add or remove elements from it)
- unlike arrays, linked lists don't have indexes
- unlike arrays, linked lists don't have a fixed size
- unlike arrays, linked lists don't have contiguous memory (the elements are not stored next to each other in memory)
- unlike arrays, linked lists don't have random access (we can't access an element directly)

- linked lists are good for insertion and deletion (O(1) time complexity)
- linked lists are bad for searching (O(n) time complexity)

- linked lists are used in stacks and queues
- linked lists are used in graphs and hash tables

- singly linked list: each node has a pointer to the next node
- doubly linked list: each node has a pointer to the next node and a pointer to the previous node
- circular linked list: the tail node points to the head node
- circular doubly linked list: the tail node points to the head node and each node has a pointer to the previous node

- linked list operations:
-------------------------
1. get the length of the linked list
------------------------------------
function getLength(head){
    let length=0
    let current=head
    while(current!==null){
        length++
        current=current.next
    }
    return length
}
time complexity: O(n) - linear time complexity
---------------------------------------------------------------------------------------------------------------------------
2- sort a linked list:
----------------------
pseudo code:
------------
-loop through the linked list
    -loop through the linked list again
        -compare the current node with the next node
        -swap them if the current node is greater than the next node
    -move to the next node

- return the sorted linked list
function sortLinkedList(head){
    let current=head
    while(current){
        let next=current.next
        while(next){
            if(current.data>next.data){   //
                [current.data,next.data]=[next.data,current.data]
            }
            next=next.next
        }
        current=current.next
    }
    return head
}

time complexity: O(n^2) - quadratic time complexity

other solution:
---------------
function sortLinkedList(head){
    let current=head
    let arr=[]
    while(current){
        arr.push(current.data)
        current=current.next
    }
    arr.sort((a,b)=>a-b)
    current=head
    let i=0
    while(current){
        current.data=arr[i]
        i++
        current=current.next
    }
    return head
}
time complexity: O(n) - linear time complexity

other solution (merge sort):
---------------------------
function sortLinkedList(head){
    if(head===null || head.next===null){
        return head
    }
    let middle=getMiddle(head)
    let nextOfMiddle=middle.next
    middle.next=null
    let left=sortLinkedList(head)
    let right=sortLinkedList(nextOfMiddle)
    let sortedList=merge(left,right)
    return sortedList
}
function getMiddle(head){
    if(head===null){
        return head
    }
    let slow=head
    let fast=head
    while(fast.next!==null && fast.next.next!==null){
        slow=slow.next
        fast=fast.next.next
    }
    return slow
}
function merge(left,right){
    let result=null
    if(left===null){
        return right
    }
    if(right===null){
        return left
    }
    if(left.data<=right.data){
        result=left
        result.next=merge(left.next,right)
    }else{
        result=right
        result.next=merge(left,right.next)
    }
    return result
}
time complexity: O(nlogn) - linearithmic time complexity

other solution (quick sort):
---------------------------
function sortLinkedList(head){
    if(head===null || head.next===null){
        return head
    }
    let pivot=head
    let current=head.next
    let left=null
    let right=null
    while(current!==null){
        let next=current.next
        if(current.data<pivot.data){
            current.next=left
            left=current
        }else{
            current.next=right
            right=current
        }
        current=next
    }
    left=sortLinkedList(left)
    right=sortLinkedList(right)
    pivot.next=right
    if(left===null){
        return pivot
    }
    let tail=left
    while(tail.next!==null){
        tail=tail.next
    }
    tail.next=pivot
    return left
}
time complexity: O(nlogn) - linearithmic time complexity


---------------------------------------------------------------------------------------------------------------------------


*/