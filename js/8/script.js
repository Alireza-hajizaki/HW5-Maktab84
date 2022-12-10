const btnElem = document.querySelector('.btn')
const ulElem = document.querySelector('.ulElem')
let isTrue = true

btnElem.addEventListener('click' , ()=>{
    
    // if(ulElem.style.display === 'block'){
    //     ulElem.style.display = 'none'
    // }else{
    //     ulElem.style.display = 'block'
    // }

    if (isTrue == true) {
        ulElem.style.display = 'none'
        isTrue = false;
        } else {
        ulElem.style.display = 'block';
        isTrue = true;
        }

})