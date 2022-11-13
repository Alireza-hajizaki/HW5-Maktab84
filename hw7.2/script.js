var array1  = [2, 8 ,6 ,9];
var array2 = [3 , 4 , 8 , 1];
const concatItem = array1.concat(array2)
console.log(concatItem)

function sortItem(number){
    const sort = number.sort(function(a, b){return b - a});
    const singleNumber = Number(sort.join(''))
    console.log(singleNumber)
}

sortItem(concatItem)

