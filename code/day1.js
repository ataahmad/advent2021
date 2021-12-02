import fs from 'fs';

// Important to note that the input file is an array of strings. We must use parseInt during comparisons.
const input = fs.readFileSync('../inputs/day1.txt').toString().split(/\n/);

const countInc = (arr) => {
    let counter = 0;
    for (let i = 1; i < arr.length; i++) {
        if (parseInt(arr[i]) > parseInt(arr[i - 1])) counter++;
    }
    return counter;
}

const groupArray = (arr) => {
    let res = [];
    for (let j = 1; j < arr.length - 1; j++) {
        res.push(parseInt(arr[j - 1]) + parseInt(arr[j]) + parseInt(arr[j + 1]));
    }
    return res;
};

// Part 1 answer. Counts the increases from index to index.
console.log("The answer to part 1 is is: " + countInc(input));

// Part 2 answer
console.log("The answer to part 2 is is: " + countInc(groupArray(input)));