let container = document.querySelector(".container");

const data = {
  Fish: {
    trout: {},
    salmon: {},
  },
  Tree: {
    Huge: {
      sequoia: {},
      oak: {},
    },
    Flowering: {
      "apple tree": {},
      magnolia: {},
    },
  },
};

// const entries = Object.entries(data);
// entries.map(([key, value]) => console.log(`${key} = ${value}`));

function createTree(html, obj) {
  const liList = Object.entries(obj);
  
  liList.forEach(([key, value]) => {
    //  console.log(Object.entries(value));
    const secLiList = Object.entries(value);
    let newLi = document.createElement("li");
    newLi.innerText = key;

    secLiList.forEach(([key, value]) => {
      const secUl = document.createElement("ul");
      const secLi = document.createElement("li");
      secLi.innerText = key;
      secUl.append(secLi);
      newLi.append(secUl);
      const thirdElem = Object.entries(value);

      thirdElem.forEach(([key]) => {
        const thirdUl = document.createElement("ul");
        const thirdLi = document.createElement("li");
        thirdLi.innerText = key;
        thirdUl.append(thirdLi);
        secLi.append(thirdUl);
      });
    });
    html.append(newLi);
  });
  // console.log(liList[0]);
  // console.log(Object.entries(obj));
}

createTree(container, data);
