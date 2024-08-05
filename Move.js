import { ChessBoard } from "./ChessBoard.js";

class Move {
    constructor(row, column, moveCount) {
        this.row = row;
        this.column = column;
        this.moveCount = moveCount;
        this.adjacencyList = this.#setAdjacencyList();
        this.predecessor = null;
    }

    getAdjacencyList() {
        return this.adjacencyList;
    }

    #setAdjacencyList() {
        let vertexIndex = ChessBoard.getVertexIndex([this.row, this.column]);
        let adjacencyList = ChessBoard.adjacencyLists[vertexIndex];
        
        return adjacencyList;
    }
    
    getPredecessor() {
        return this.predecessor;
    }

    setPredecessor(vertex) {
        this.predecessor = vertex;
    }
}

export { Move }