const elem = 'div';

function elemCretor(elem, callback) {
const tagElem = callback(elem);
tagElem.innerHTML = "Tag div :)";
tagElem.classList.add('red')
document.body.append(tagElem);
console.log(tagElem);
}
function callback(item) {
    let element = document.createElement(item);
    return (element);
}

elemCretor(elem,callback);