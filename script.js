import { knightMoves } from "./knightMoves.js";
import { ChessBoard } from "./ChessBoard.js";

// for (let i = 0; i < 64; i++) {
//     console.log(`${JSON.stringify(ChessBoard.vertices[i])} => ${JSON.stringify(ChessBoard.adjacencyLists[i])}`);
// }

console.log(knightMoves([1,1],[6,3]));