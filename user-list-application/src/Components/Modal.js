import React from "react";
import styles from "../CSS/Modal.module.css"

const Modal = (props) => {

    const CloseModal = () => {
        props.setModalFlgHandler(false);
    }

    return(
        <div className={styles.popup} style={{display: props.modalFlg ? "block" : "none"}} onClick={CloseModal}>
            <div className={styles["popup-block"]}>
                <header className={styles["modal-header"]}>
                    Некорректный ввод
                </header>
                <ul className={styles["modal-error-text"]}>
                    {props.modalError}
                </ul>
                <footer className={styles.actions}>
                    <button onClick={CloseModal} className={styles["button-on-modal"]}>Закрыть</button>
                </footer>
            </div>
        </div>
    );
}

export default Modal;