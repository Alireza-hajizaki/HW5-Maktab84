const mainNav = document.querySelector('.navbar')
console.log(mainNav)

document.addEventListener('scroll' , () => {
    if(document.documentElement.scrollTop > 0){
        // console.log('true');
        mainNav.classList.add('bg-white')
    }
    else if(document.documentElement.scrollTop === 0){
       mainNav.classList.remove('bg-white')
    }
})