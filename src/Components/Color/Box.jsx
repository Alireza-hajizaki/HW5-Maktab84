import React from "react";

export default function Box (props) {
    return(
        <>
            <div className="row">
                <div className="boxColor" style={{backgroundColor:`rgb${props.bgc}`}}></div>
                <span>RGB Code : `rgb${props.title}`</span>
            </div>
        </>
    )
}