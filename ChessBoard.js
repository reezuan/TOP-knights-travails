class ChessBoard {
    static vertices = this.#buildChessBoardArray();
    static adjacencyLists = this.#buildAdjacencyLists();
    
    static #buildChessBoardArray() {
        let arr = [];
    
        for (let row = 1; row <= 8; row++) {
            for (let column = 1; column <= 8; column++) {
                arr.push([row, column]);
            }
        }
    
        return arr;
    }

    static #buildAdjacencyLists() {
        let adjacencyLists = [];

        this.vertices.forEach(vertex => {
            let [row, column] = vertex;
            let arr = [];

            for (let rowDisplacement = 1; rowDisplacement <= 2; rowDisplacement++) {
                for (let columnDisplacement = 1; columnDisplacement <= 2; columnDisplacement++) {
                    let currentRow;
            
                    if (rowDisplacement === columnDisplacement) {
                        // Row cannot be displaced by the same amount as the
                        // column, due to how the knight moves on a chess board.
                        continue;
                    }

                    currentRow = row + rowDisplacement;
                    if (currentRow <= 8) {
                        if (column + columnDisplacement <= 8) {
                            arr.push([currentRow, column + columnDisplacement]);
                        }

                        if (column - columnDisplacement >= 1) {
                            arr.push([currentRow, column - columnDisplacement]);
                        }
                    }

                    currentRow = row - rowDisplacement;
                    if (currentRow >= 1) {
                        if (column + columnDisplacement <= 8) {
                            arr.push([currentRow, column + columnDisplacement]);
                        }

                        if (column - columnDisplacement >= 1) {
                            arr.push([currentRow, column - columnDisplacement]);
                        }
                    }
                }
            }

            adjacencyLists.push(arr);
        });

        return adjacencyLists;
    }

    static getVertexIndex(vertex) {
        let index = 0;
        let [row, column] = vertex;

        if (row < 1 || row > 8 || column < 1 || column > 8) {
            return;
        }
    
        for (let i = 0; i < this.vertices.length; i++) {
            if (row === this.vertices[i][0] && column === this.vertices[i][1]) {
                break;
            } else {
                index += 1;
            }
        }

        return index;
    }
}

export { ChessBoard }