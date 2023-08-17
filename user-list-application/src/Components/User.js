import React from "react";
import styles from "../CSS/Uers.module.css"

const User = (props) => {
    return (
            <p className={styles["user-form"]}>
                {props.name} - {props.age} лет
            </p>
    );
}

export default User;