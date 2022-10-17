let topSpace = +prompt("Enter space from Top");
let rightElem = +prompt("Enter space from Right");
let html = prompt("Enter Massege");
let classElem = prompt("Enter class Name");
// console.log(top)


function showNotification(top,right,mesg,clss){
    let boxElem = document.querySelector('.boxElem');
    let message = document.querySelector('.massege');
    boxElem.className = clss;
    message.innerHTML = mesg;
    boxElem.style.top =`${top}px`;
    boxElem.style.right = `${right}px`
    boxElem.style.display = 'block'
    
    // console.log(boxElem)
    // console.log(message)
}


showNotification(topSpace,rightElem,html,classElem)