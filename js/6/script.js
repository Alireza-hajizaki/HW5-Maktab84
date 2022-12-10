let $ = document;
const body = $.querySelector('body')

function showNotification(top , right , html , clas){
    const divElem = $.createElement('div');
    divElem.style.width = '80px'
    divElem.style.height = '50px'
    divElem.style.color = "white"
    divElem.style.textAlign = "center"
    divElem.style.backgroundColor = 'blue'
    divElem.style.position = 'absolute'
    divElem.style.top = top
    divElem.style.right = right
    divElem.innerText = html
    divElem.className = clas
    
    body.append(divElem)
    setTimeout(() => {
        divElem.style.display = 'none'
    }, 1500);
 }

 showNotification("10px" , "10px" , "Hellow" , "welcome")

//  console.log('true');