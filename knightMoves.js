import { Move } from "./Move.js";

function knightMoves(start, end) {
    const board = {};
    const queue = [];
    
    let origin = new Move(start[0], start[1], 0);
    queue.push(origin);
    board[JSON.stringify(start)] = origin;

    while (!(queue[0].row === end[0] && queue[0].column === end[1])) {
        const currentSquare = queue.shift();
        currentSquare.adjacencyList.forEach(vertex => {
            let move = new Move(vertex[0], vertex[1], currentSquare.moveCount + 1);
            move.setPredecessor(currentSquare);

            queue.push(move);
            board[JSON.stringify(vertex)] = move;
        });
    }

    let path = [];
    let destination = queue[0];
    path.unshift([destination.row, destination.column]);

    while (destination.getPredecessor() !== null) {
        destination = destination.getPredecessor();
        path.unshift([destination.row, destination.column]);
    }

    console.log(`You made it in ${board[JSON.stringify(end)].moveCount} moves! Here's your path:`);
    path.forEach(vertex => {
        console.log(JSON.stringify(vertex));
    })
}

export { knightMoves }