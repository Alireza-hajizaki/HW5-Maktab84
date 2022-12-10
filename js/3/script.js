const ulElem = document.querySelector('.ulElem')


function addInput (){
    let userInput = ""

    
while(userInput != " "){

    userInput = prompt("Enter your input: \n if you stop click space")

    if(userInput === " "){
     console.log("stop")
     break;
    }
    console.log(userInput)
    let newLi = document.createElement("li")
    newLi.innerText = userInput;
    
    ulElem.append(newLi)
}
}

addInput()