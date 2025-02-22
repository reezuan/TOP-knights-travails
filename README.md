# Knights Travails

## The problem
Given enough turns, a knight on a standard 8x8 chess board can move from any square to any other square.

The challenge is to build a function `knightMoves` that shows the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way.

So for example, `knightMoves([0,0],[3,3]) == [[0,0],[2,1],[3,3]]`.

## HOW I SOLVED THIS PROBLEM
Using graphs

I imagine the chess board as a directed graph, with each square being a vertex in that graph.

Because, given a particular square on a chess board, a knight on that square can only move to a specific set of boxes from there.

With that in mind, here's how I approached solving this problem step-by-step 👇

### STEP 1
Build an array of 64 arrays (i.e. adjacency lists). Each of the 64 arrays will be a pair of values (e.g. [x, y]) with the first value referring to the row number (starting from 1), and the second value referring to the column number (starting from 1).

### STEP 2
Build an array of 64 adjacency lists.

### STEP 3
Write a function to get the index of a chess board coordinate in the chessBoardVertices array.

### STEP 4
