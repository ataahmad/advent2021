import fs from 'fs';

const data = fs.readFileSync("../inputs/day3.txt").toString().split(/\n/);
const testData = fs.readFileSync("../inputs/day3Test.txt").toString().split(/\n/);


const array = new Array(5).fill(0);

const convertArrToBin = arr => {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {
            res += 2 ** (arr.length - i);
        }
    }
    return res;
}

const convertRestoBin = (arr, arg) => {
    for (let i = 0; i < arr.length; i++) {
        switch (arg) {
            case "gamma":
                if (arr[i] > 1) arr[i] = 1;
                else arr[i] = 0;
            case "epsilon":
                if (arr[i] > 1) arr[i] = 0;
                else arr[i] = 1;
        }
    }
    return arr;
}

const findPower = data => {
    const bitLength = data[0].length;
    const res = new Array(bitLength).fill(0);
    console.log(data);
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

    console.log(convertRestoBin(res, "gamma"));
}

console.log(findPower(testData));