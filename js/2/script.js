let ulElem = document.querySelector(".ul-LInk")
let addBtn = document.querySelector(".btn")

addBtn.addEventListener('click' , Separator);


function Separator (){
    const link = prompt('Enter your The intended link:');
    // console.log(link.includes("://"))
    if(link.includes("://") && link != "http://internal.com"){
        let newLi = document.createElement("li");
        newLi.innerText = link
        newLi.style.color = "#F57C00"
        
        ulElem.append(newLi)
    }else{
        let newLi = document.createElement("li");
        newLi.innerText = link
        ulElem.append(newLi)
    }
}
