
function clear(elem) {
    const olElem = document.querySelector("#elem")
    while (olElem.hasChildNodes()) {
        olElem.removeChild(olElem.firstElementChild);
      }
}

clear()