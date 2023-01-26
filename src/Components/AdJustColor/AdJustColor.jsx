import React ,{useState , useEffect} from "react";
import "./AdJustColor.css"

function AdJustColor () {
    let redValue, greenValue, blueValue;
    const[redColer,setRedColor] = useState(redValue=50)
    const[greenColer,setGreenColor] = useState(greenValue=50)
    const[blueColer,setBlueColor] = useState(blueValue=50)

    const redAddChangeHandler = () => {
           if(redValue <= 250){
        setRedColor(pervCount => {
           return pervCount + 10
        })}
    }
    const redDecChangeHandler = () => {
        if(redValue<255 && redValue > 0){
            setRedColor(pervCount => {
                return pervCount - 10
            })}
    }
    const greenAddChangeHandler = () => {
        if(greenValue<255 && greenValue > 0){
            setGreenColor(pervCount => {
                return pervCount + 10
            })}
    }
    const greenDecChangeHandler = () => {
        if(greenValue<255 && greenValue > 0){
            setGreenColor(pervCount => {
                return pervCount - 10
            })}
    }
    const blueAddChangeHandler = () => {
        if(blueValue<255 && blueValue > 0){
            setBlueColor(pervCount => {
                return pervCount + 10
            })}
    }
    const blueDecChangeHandler = () => {
        if(blueValue<255 && blueValue > 0){
            setBlueColor(pervCount => {
                return pervCount - 10
            })}
    }

    useEffect(() => {
        console.log(`rgb(${redColer},${greenColer},${blueColer})`)
    },[redColer,blueColer,greenColer])

    return(
        <>
            <div className="ad-Main">
                <div className="ad-container">
                    <h3>Red :</h3>
                    <button onClick={redDecChangeHandler} className="ad-btn">Dicrease Red</button>
                    <button onClick={redAddChangeHandler} className="ad-btn">Increase Red</button>
                </div>
                <div className="ad-container">
                    <h3>Green :</h3>
                    <button onClick={greenDecChangeHandler} className="ad-btn">Decrese Green</button>
                    <button onClick={greenAddChangeHandler} className="ad-btn">Incresse Green</button>
                </div>
               <div className="ad-container">
                   <h3>Blue :</h3>
                   <button onClick={blueDecChangeHandler} className="ad-btn">Dicrease Blue</button>
                   <button onClick={blueAddChangeHandler} className="ad-btn">Increase Blue</button>
               </div>
                <div className="ad-box" style={{backgroundColor:`rgb(${redColer},${greenColer},${blueColer})`}}></div>
            </div>
        </>
    )
}
export default AdJustColor;