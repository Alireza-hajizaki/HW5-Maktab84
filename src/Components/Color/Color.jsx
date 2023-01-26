import React , {useState} from "react";
import "./Color.css";
import Box from "./Box";

function Color () {
    const[colors,setColors] = useState([
        {id:1 , bgc:"(11,96,245)" , title:"(11,96,245)" },
    ])

    const changeColor = () => {
        let redValue, greenValue, blueValue
        redValue = Math.floor(Math.random() * 255)
        greenValue = Math.floor(Math.random() * 255)
        blueValue = Math.floor(Math.random() * 255)
        let newColor = ('(' + redValue + ',' + greenValue + ',' + blueValue + ')')

        setColors((pervState) => {
            let randomColor= {id:2 , bgc:newColor , title:newColor}
            return [...pervState , randomColor]
        })
    }

    return(
        <div className="main">
          <button className="addBtn" onClick={changeColor}>Add Color</button>
          <div className="container">
              {colors.map(color => (
                  <Box {...color}/>
              ))}
          </div>
        </div>
    )
}
export default Color;