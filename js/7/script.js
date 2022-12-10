const divElem = document.querySelector('#text')
const inputElem = document.querySelector('#hider')


inputElem.addEventListener('click', ()=>{

    setTimeout(()=>{
        setTimeout(() =>{ 
            console.log(inputElem);
            inputElem.style.display = "none"
            
        } ,2000)
        console.log(divElem);
        divElem.style.display = 'none'
    } ,2000)
})