import React from "react";
import "../CSS/ItemShell.css"

const ItemShell = (props) => {
   const classes = "item-shell "+ props.className;
    return (<div className={classes}>
        {props.children}
    </div>)
}

export default ItemShell