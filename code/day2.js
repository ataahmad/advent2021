import fs from 'fs';

const data = fs.readFileSync("../inputs/day2.txt").toString().split(/\n/);
const testData = fs.readFileSync("../inputs/day2Test.txt").toString().split(/\n/);

// Part 1. Iterate through the data and use regex to determine horizontal and vertical coordinates at each iteration.
const mapData = arr => {
    let hor = 0;
    let ver = 0;
    const numReg = /.*(\d+)/;
    for (let i = 0; i < arr.length; i++) {
        let currInd = arr[i];
        let currNum = parseInt(currInd.match(numReg)[1]);
        if (currInd.match(/forward/)) hor += currNum;
        if (currInd.match(/up/)) ver -= currNum;
        if (currInd.match(/down/)) ver += currNum;
    }
    return hor * ver;
}

const mapDataAim = arr => {
    let hor = 0;
    let ver = 0;
    let aim = 0;
    const numReg = /.*(\d+)/;
    for (let i = 0; i < arr.length; i++) {
        let currInd = arr[i];
        let currNum = parseInt(currInd.match(numReg)[1]);
        if (currInd.match(/forward/)) {
            hor += currNum;
            ver += (currNum * aim);
        }
        if (currInd.match(/up/)) {
            aim -= currNum;
        }
        if (currInd.match(/down/)) {
            aim += currNum;
        }
    }
    return hor * ver;
}

console.log("The answer to the test Data is: " + mapDataAim(testData));
console.log("The answer to part 1 is: " + mapData(data));
console.log("The answer to part 2 is: " + mapDataAim(data));