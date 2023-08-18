import React from "react";
import styles from "../CSS/Uers.module.css"

const User = (props) => {

    const trueRussianDecline = (c) => {
        let d1 = "лет";
        let d2 = "год";
        let d3 = "года";
        switch (c%100){
            case 11: case 12: case 13: case 14:return d1;
            default:
                switch (c%10){
                    case 0:case 5:case 6:case 7:case 8:case 9:return d1;
                    case 1: return d2;
                    case 2:case 3:case 4: return d3;
                }
        }
        return "";
    }    

    const deleteElement = () => {
        props.deleteElementHandler(props.id);
    }

    return (
            <p className={styles["user-form"]} onClick={deleteElement}>
                {props.name} - {props.age} {trueRussianDecline(props.age)}
            </p>
    );
}

export default User;