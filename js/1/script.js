const selectShape = document.getElementById('selectOption');
const radiusBox = document.getElementById('radius');
const widthBox = document.getElementById('width');
const heightBox = document.getElementById('height');
const areaBox = document.getElementById('area');
const perimeterBox = document.getElementById('perimeter');
const calcButton = document.getElementById('calcButton')


class Shape {

    set shapeName(value) {
        this._shapeName = value;
    }
    get shapeName() {
        return this._shapeName;
    }

    Area() {
        return 0;
    }
    Perimeter() {
        return 0;
    }
}

//--------------------------------------------------------------

class Polygon extends Shape {
    set width(value) {
        this._width = value;
    }
    get width() {
        return this._width;
    }
    set height(value) {
        this._height = value;
    }
    get height() {
        return this._height;
    }
    Area() {
        if (this._height === "" || this._height === undefined || this._height === null) {
            return this._width;
        } else {
            return (this._width * this._height);
        }
    }
    Perimeter() {
        if (this._height === "" || this._height === undefined || this._height === null) {
            return this._width;
        } else {
            return ((this._width + this._height) * 2)
        }
    }
}

//--------------------------------------------------------------

class NonPolygon extends Shape {
    set radius(value) {
        this._radius = value;
    }
    get radius() {
        return this._radius;
    }
    Area() {
        return (((this._radius ** 2) * Math.PI).toFixed(2));
    }
    Perimeter() {
        return ((this._radius * Math.PI * 2).toFixed(2));
    }
}
//-------------------------------------------------------------

class RectAngle extends Polygon {
    constructor() {
        super();
    }
}
//-------------------------------------------------------------

class Square extends Polygon {
    constructor() {
        super();
    }
}
//-------------------------------------------------------------


class Circle extends NonPolygon {
    constructor() {
        super();
    }
}

class Cylindrical extends Circle {
    constructor() {
        super();
    }
    set height(value) {
        this._height = value;
    }
    get height() {
        return this._height;
    }
    Area() {
        if (this._height === "" || this._height === undefined || this._height === null) {
            return this._radius;
        } else {
            return ((super.Area() * (this._height + this._radius)).toFixed(2));
        }
    }
    Perimeter() {
        if (this._height === "" || this._height === undefined || this._height === null) {
            return this._radius;
        } else {
            return ((4 * this._radius) + (2 * this._height));
        }
    }
}


const calcCircle = () => {
    let circle = new Circle();
    widthBox.setAttribute('disabled', 'true');
    heightBox.setAttribute('disabled', 'true');
    radiusBox.removeAttribute('disabled');
    radiusBox.addEventListener('input', () => {
        circle.radius = +radiusBox.value
        areaBox.innerHTML = circle.Area();
        perimeterBox.innerHTML = circle.Perimeter();
    })

}

const calcSquare = () => {
    let square = new Square()
    widthBox.removeAttribute('disabled');
    heightBox.removeAttribute('disabled');
    radiusBox.setAttribute('disabled', 'true')
    widthBox.addEventListener('input', () => {
        square.width = +widthBox.value;
        areaBox.innerHTML = square.Area();
        perimeterBox.innerHTML = square.Perimeter();
    })
    heightBox.addEventListener('input', () => {
        square.height = +heightBox.value;
        areaBox.innerHTML = square.Area();
        perimeterBox.innerHTML = square.Perimeter();
    })
}

const calcCylindrical = () => {
    let cylindrical = new Cylindrical();
    widthBox.setAttribute('disabled', 'true');
    heightBox.removeAttribute('disabled', 'true');
    radiusBox.removeAttribute('disabled');
    radiusBox.addEventListener('input', () => {
        cylindrical.radius = +radiusBox.value;
        areaBox.innerHTML = cylindrical.Area();
        perimeterBox.innerHTML = cylindrical.Perimeter();
    })
    heightBox.addEventListener('input', () => {
        cylindrical.height = +heightBox.value;
        areaBox.innerHTML = cylindrical.Area();
        perimeterBox.innerHTML = cylindrical.Perimeter();
    })

}

const calcRectangle = () => {
    let rectangle = new RectAngle()
    widthBox.removeAttribute('disabled');
    heightBox.removeAttribute('disabled');
    radiusBox.setAttribute('disabled', 'true')
    widthBox.addEventListener('input', () => {
        rectangle.width = +widthBox.value;
        areaBox.innerHTML = rectangle.Area();
        perimeterBox.innerHTML = rectangle.Perimeter();
    })
    heightBox.addEventListener('input', () => {
        rectangle.height = +heightBox.value;
        areaBox.innerHTML = rectangle.Area();
        perimeterBox.innerHTML = rectangle.Perimeter();
    })
}

selectShape.addEventListener('change', () => {
    let value = selectShape.value;
    radiusBox.value = "";
    widthBox.value = "";
    heightBox.value = "";
    areaBox.innerText = "0.00"
    perimeterBox.innerText = "0.00"
    switch (value) {
        case 'circle':
            calcCircle();
            break;;
        case 'cylindrical':
            calcCylindrical();
            break
        case 'rectangle':
            calcRectangle();
            break
        case 'square':
            calcSquare();
            break;
        default:
            alert("This is a Mistake!!!")
            break;
    }
})