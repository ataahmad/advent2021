import fs from 'fs';

const data = fs.readFileSync("../inputs/day3.txt").toString().split(/\n/);
const testData = fs.readFileSync("../inputs/day3Test.txt").toString().split(/\n/);

// Helper function. Input is an array of 0's and 1's, and a string discerning between gamma or epsilon.
// Output is a binary number determined out of forward or reverse order of the 0's and 1's depending on the string. 
const convertToBin = (arr, arg) => {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 1 && arg == "gamma" || arr[i] == 0 && arg == "epsilon") {
            res += 2 ** (arr.length - 1 - i);
        }
    }
    return res;
}


const findPower = data => {
    const bitLength = data[0].length;
    const res = new Array(bitLength).fill(0);
    // console.log(data);
    for (let i = 0; i < data.length; i++) {
        let currBinary = data[i];
        for (let j = 0; j < bitLength; j++) {
            if (currBinary[j] == "1") {
                res[j]++;
            } else {
                res[j]--;
            }
        }
    }

    for (let k = 0; k < bitLength; k++) {
        if (res[k] > 0) res[k] = 1;
        else res[k] = 0;
    }
    
    return convertToBin(res, "gamma") * convertToBin(res, "epsilon");
}

console.log("The answer to part 1 is: " + findPower(data));