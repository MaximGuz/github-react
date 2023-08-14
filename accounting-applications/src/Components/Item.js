import React from "react";
import DateComponent from "./DateComponent";
import "../CSS/Item.css"

function Item(props){
    return (<div className="item"> 
        <DateComponent date={props.date}/>
        <div>  
            <div className="item-cost">{props.cost} Руб</div>
            <div className="item-title">{props.title}</div>
        </div>  
    </div>)
}

export default Item