import React from "react";
import "./DiagramBar.css"

const DiagramBar = (props) => {
    let summa = 0;

    if(props.sum === 0){
        summa = 1;
    } else {
        summa = props.sum;
    }
    let barFillHeight = props.value * 100 / summa;

    return (<div className="diagram-bar">
        <div className="diagram-bar__inner">
            <div className= 'diagram-bar__fill' style={{height: barFillHeight + '%'}}></div>
        </div>
        <div className="diagram-bar__label">{props.label}</div>
    </div>)
}

export default DiagramBar; 