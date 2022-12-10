let arr = [5, 3, 8, 1 , 2];

function filterRangeInPlace(arr,min,max) {
    arr.forEach((value,index,array) => {
        if(value >= max || value <= min) 
            array.splice(index,1);
    })
    console.log(arr)
}

filterRangeInPlace(arr, 1, 5);