/*
1-Find Center of Star Graph
---------------------------
There is an undirected star graph consisting of n nodes labeled from 1 to n.
A star graph is a graph where there is one center node and exactly n - 1 edges that connect the center node with every other node.
You are given a 2D integer array edges where each edges[i] = [ui, vi] indicates that there is an edge between the nodes ui and vi.
 Return the center of the given star graph.

Example 1:
-----------
Input: edges = [[1,2],[2,3],[4,2]]
Output: 2
Explanation: As shown in the figure above, node 2 is connected to every other node, so 2 is the center.


function findCenter(edges) {

     for(let i = 0 ; i < edges[0].length ; i++) {
        for(let j = 0 ; j < edges[1].length ; j++) {
            if(edges[0][i] === edges[1][j]) return edges[0][i]  
        }
    }
}








*/