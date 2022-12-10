// const liElem = document.querySelectorAll('.liElem')
const removeElem = document.querySelectorAll('.remove')
console.log(removeElem);


removeElem.forEach((item) => {
    item.addEventListener('click' , ()=>{
        console.log(item.parentElement);
        item.parentElement.remove()
       })
})
