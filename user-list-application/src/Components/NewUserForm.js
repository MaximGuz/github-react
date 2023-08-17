import React, {useRef, useState} from "react";
import styles from "../CSS/NewUserForm.module.css"

const NewUserForm = (props) => {
    const name = useRef(null);
    const age = useRef(null);
    const [id,setId] = useState(0);

    const NewUser = () => {
        /*let isValidName = name.current.value = "" ? true : false;
        let isValidAge = age.current.value < 0 ? true : false;

        if (isValidName || isValidAge){
            let errorText = <> {isValidName && "Некорректное имя"} {isValidAge && "Некорректный возраст"}</>

        }*/

        props.newUser({
            name: name.current.value,
            age: age.current.value,
            id: id,
        });

        setId((prev) => prev + 1);
    }

    return (
        <div className={styles["dop-block"]}>
            <div className={styles["form-center"]}>
                <p className={styles["label-text"]}>Имя</p>
                <input ref={name} type="text" className={styles["input-element"]}></input>
                <p className={styles["label-text"]}>Возраст</p>
                <input  ref={age} type="number" className={styles["input-element"]}></input>
                <br></br>
                <br></br>
                <button className={styles["add-button"]} onClick={NewUser}>Добавить Пользователя</button>
                </div>
        </div>
    );
}

export default NewUserForm;