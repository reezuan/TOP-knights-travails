import { ChessBoard } from "./ChessBoard.js";

function knightMoves(startingCoordinates, destinationCoordinates, traversedPath = []) {
    // console.log(traversedPath);
    // console.log(startingCoordinates);

    // 1) Initialise an array to store all the squares in the path to the destination.
    let path = [];
    path.push(startingCoordinates);
    // console.log("path:")
    // console.log(path);
    // console.log("\n");

    // 2) Find the index of the startingCoordinates in the vertices.
    let vertexIndex = ChessBoard.getVertexIndex(startingCoordinates);
    // console.log(`vertexIndex: ${vertexIndex}`);
    // console.log("\n");
    
    // 3) Using that index, find its adjacency list.
    let adjacencyList = ChessBoard.adjacencyLists[vertexIndex];
    console.log(`adjacencyList:`);
    console.log(adjacencyList);
    // console.log("----------\n");
    // console.log("\n");

    // 4) Check if destinationCoordinates are in any of the vertices in adjacencyList.
    for (let vertex of adjacencyList) {
        // console.log(vertex);
        let [row, column] = vertex;

        if (destinationCoordinates[0] === row && destinationCoordinates[1] === column) {
            path.push(vertex);
            // console.log("path now is:");
            // console.log(path);
            return path;
        }
    }

    // 5) If destinationCoordinates are not in any of the vertices in
    //    adjacencyList, recursively call the function to find the best path.
    let bestPath = [];

    moveKnight: for (let vertex of adjacencyList) {
        // Check if the current vertex exists in the path already traversed by the knight.
        // If it does, skip the vertex.
        for (let square of traversedPath) {
            if (vertex[0] === square[0] && vertex[1] === square[1]) {
                continue moveKnight;
            }
        }

        let previousPath = traversedPath;
        previousPath.push(startingCoordinates);
        console.log("previousPath:");
        console.log(previousPath);

        let tempPath = knightMoves(vertex, destinationCoordinates, previousPath);
        console.log("tempPath is:");
        console.log(tempPath);

        if (tempPath.length < bestPath.length || bestPath.length === 0) {
            // console.log("resetting bestPath");
            bestPath = [];
            bestPath.push(startingCoordinates);
            bestPath.push(tempPath);
        }
    }
    
    return bestPath;
}

export { knightMoves }