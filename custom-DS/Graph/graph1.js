/*
graph:
-------
- A graph is a collection of nodes or vertices (V) and edges (E) between them.
- A graph is a non-linear data structure that means that there is no sequence to traverse the graph.
- tree is a type of graph.
types of graph:
---------------
1. Directed Graph: A graph in which all the edges have a direction .
                  : graph can be traversed in only one direction.
ex: facebook friends
  : A -> B -> C

2. Undirected Graph: A graph in which all the edges have no direction.
                    : graph can be traversed in both direction.
ex: A->B->C
    C->B->A

graph usage:
------------
1. google maps (where the nodes are the places and the edges are the roads)
2. social networks (where the nodes are the people and the edges are the friendships)

graph representation:
---------------------
1. Adjacency Matrix:
--------------------
- is a 2D array of size V x V where V is the number of vertices in a graph.
-each row and column represent a vertex.
- if the value of any element a[i][j] is 1, it represents that there is an edge connecting vertex i and vertex j.
- if the value of any element a[i][j] is 0, it represents that there is no edge connecting vertex i and vertex j.
- for undirected graph, the matrix is symmetric about the diagonal.
- ex:          
                 B
                / \
               A   C
    
    Adjacency Matrix:
    -----------------
    A B C
    -----
  A 0 1 0    // A is connected to B
  B 1 0 1    // B is connected to A and C
  C 0 1 0    // C is connected to B
    let graph = [
        [0, 1, 0],
        [1, 0, 1],
        [0, 1, 0]
    ]
    console.log(graph[1][2]) // 1

2. Adjacency List:
------------------
- is the array of linked list.
- each element of the array represents a vertex and it contains a list of all the vertices that are adjacent to it.
- ex:
             B
            / \
           A   C

    Adjacency List:
    ---------------
    A -> B
    B -> A -> C
    C -> B

    let graph = {
        'A': ['B'],
        'B': ['A', 'C'],
        'C': ['B']
    }
    console.log(graph['B']) // ['A', 'C']
which one is better?
---------------------
- if the graph is dense (number of edges is close to the number of vertices), then it is better to use Adjacency Matrix.
- if the graph is sparse (number of edges is very less than the number of vertices), then it is better to use Adjacency List.
- Adjacency Matrix takes more space O(V^2) while Adjacency List takes O(V + E) space.
- Adjacency Matrix is faster to lookup an edge O(1) while Adjacency List takes O(V) time.
- Adjacency List is faster to iterate over all edges O(V) while Adjacency Matrix takes O(V^2) time.

------------------------------------------------------------------------------------------------------------------------
graph implementation:
--------------------

class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};    // key: node, value: array of adjacent nodes // Adjacency List to store the graph 
    }

    addVertex(vertex) {
        if (!this.adjacentList[vertex]) {
            this.adjacentList[vertex] = [];
            this.numberOfNodes++;
        }
    }
    addEdge(vertex1, vertex2) {
       if (!this.adjacentList[vertex1] )  this.addVertex(vertex1);
       if (!this.adjacentList[vertex2] )  this.addVertex(vertex2);
         this.adjacentList[vertex1].push(vertex2);
         this.adjacentList[vertex2].push(vertex1);
    }
    showConnections() {
       Object.keys(this.adjacentList).forEach(vertex => {
              console.log(vertex + ' --> ' + this.adjacentList[vertex].join(' '));
         }
         );
    }

    hasEdge(vertex1, vertex2) {
        return this.adjacentList[vertex1].includes(vertex2) && this.adjacentList[vertex2].includes(vertex1);
    }
    removeEdge(vertex1, vertex2) {

        if (this.hasEdge(vertex1, vertex2)) {
            this.adjacentList[vertex1] = this.adjacentList[vertex1].filter(vertex => vertex !== vertex2);
            this.adjacentList[vertex2] = this.adjacentList[vertex2].filter(vertex => vertex !== vertex1);
        }
    }

    removeVertex(vertex) {  
        


}



           
    
    
  





