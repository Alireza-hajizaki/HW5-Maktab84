let inpCount = +(prompt("How many input??"));
let counter = 0;
let numberArray = []

while (counter < inpCount) {
    numberArray.push(+(prompt(`Enter Number ${counter}:`)))
    counter +=1;
}

function checkArray (numArr) {
    let resCount = 0
    let index = 0
    const length = numArr.length;
    while(index < length){
        if (numArr.at(index) === numArr.at(-index - 1)) {
            resCount +=1;
            console.log(resCount)
            index +=1;
        } else {
            alert("Wrong!");
            break;
        }
        
    }
    if(resCount == numArr.length){
        return true;
    }else {
        return false;
    }
}

const checkedArray = checkArray(numberArray);

if(checkedArray) {
    alert("it's true");
}
