let arr = [5, 3, 8, 2, 10, 25, 11, 9, 1];


function filterRangeInPlace(numArray,min,max) {
   const resultVals = [];
    numArray.forEach(value => {
        if (value <= max && value >= min)
            resultVals.push(value);
        }
    )
    return resultVals;
}

const filtered = filterRangeInPlace(arr, 1, 5);
console.log(filtered);
console.log(arr);