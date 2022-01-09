import fs from 'fs';

/**
 * Functions needed:
 * function boardWinCheck() --> Check if the board has won.
 * 
 */

// const data = fs.readFileSync("../inputs/day3.txt").toString().split(/\n/);
const testBoards = fs.readFileSync("../inputs/day4Test.txt").toString().split(/\n{2,}\s*/);
const testCallNums = testBoards.shift().split(/,/);


console.log(testCallNums);
console.log(testBoards[1].split(/[\n\s]+/));






// findWin() function need to return an array [number of turns, final results]
function findWin(boardStr, callNums) {
    const unMarked = new Set();
    let boardArr = boardStr.split(/[\n\s]+/);
    for (let i = 0; i < boardArr.length; i++) {
        unMarked.add(boardArr[i]);
    }


    console.log(JSON.parse(null));
}



function findFinalScore(boards, callNums) {
    let results = {};
    for (let i = 0; i < boards; i++) {
        let currBoard = boards[i];
        findWin(currBoard, callNums);
    }
}

findFinalScore(testBoards, testCallNums);