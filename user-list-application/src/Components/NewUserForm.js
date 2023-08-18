import React, {useEffect, useRef, useState} from "react";
import styles from "../CSS/NewUserForm.module.css"

const NewUserForm = (props) => {
    const name = useRef(null);
    const age = useRef(null);
    const [id,setId] = useState(0);
    const [nameError, setNameError] = useState(false);
    const [ageError, setAgeError] = useState(false);

    const changeName = () => {
        setNameError(false);
    }

    const changeAge = () => {
        setAgeError(false);
    }

    const NewUser = () => {
        let nameInput = name.current.value;
        let ageInput = age.current.value;
        let ValidateError = "";

        if(nameInput.trim().length === 0) {
            ValidateError = <>{ValidateError} <li>Поле 'Имя' не может быть пустым</li></>;
            setNameError(true);
        }
        if(ageInput.trim().length === 0) {
            ValidateError = <>{ValidateError} <li>Поле 'Возраст' не может быть пустым</li></>;
            setAgeError(true);
        }
        if(ageInput < 0) {
            ValidateError = <>{ValidateError} <li>Некорректный возраст</li></>;
            setAgeError(true);
        }

        if(ValidateError === "") {
            props.newUser({
                name: nameInput,
                age: ageInput,
                id: id,
            });

            name.current.value = "";
            age.current.value = "";

            setId((prev) => prev + 1);
        } else {
            props.setModalErrorHandler(ValidateError);
            props.setModalFlgHandler(true);
            console.log(ValidateError);
        }
    }

    return (
        <div className={styles["dop-block"]}>
            <div className={styles["form-center"]}>
                <p className={`${styles["label-text"]} ${nameError ? styles["label-error"] : "" }`}>Имя</p>
                <input ref={name} type="text" className={`${styles["input-element"]} ${nameError ? styles["input-error"] : "" }`} onChange={changeName}></input>
                <p className={`${styles["label-text"]} ${ageError ? styles["label-error"] : "" }`}>Возраст</p>
                <input ref={age} max='100' type="number" className={`${styles["input-element"]} ${ageError ? styles["input-error"] : "" }`} onChange={changeAge}></input>
                <br></br>
                <button className={styles["add-button"]} onClick={NewUser}>Добавить Пользователя</button>
                </div>
        </div>
    );
}

export default NewUserForm;