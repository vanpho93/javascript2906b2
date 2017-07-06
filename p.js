const arrNum = [1, 3, 5, 2, 3, 1, 5];

const arrSqr = arrNum.map(e => e * e);

// console.log(arrSqr);

// const sum = arrNum.reduce((a, b) => a + b);
// console.log(sum);

function myReduce(anyArray, reduceFunc) {
    let total = 0;
    for (let i = 0; i < anyArray.length; i++) {
        total = reduceFunc(total, anyArray[i]);
    }
    return total;
}

console.log(myReduce(arrNum, (a, b) => a + b));
