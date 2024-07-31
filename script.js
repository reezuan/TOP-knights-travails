// STEP 1
// 
// Build an array of 64 arrays (i.e. adjacency lists). Each of the 64
// arrays will be a pair of values (e.g. [x, y]) with the first value
// referring to the row number (starting from 1), and the second value
// referring to the column number (starting from 1).

function buildChessBoardArray() {
    let arr = [];

    for (let row = 1; row <= 8; row++) {
        for (let column = 1; column <= 8; column++) {
            arr.push([row, column]);
        }
    }

    return arr;
}

let chessBoardVertices = buildChessBoardArray();

// STEP 2
//
// Build an array of 64 adjacency lists.

let adjacencyLists = [];

chessBoardVertices.forEach(vertex => {
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

console.log(adjacencyLists);