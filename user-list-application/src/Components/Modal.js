import React from "react";
import styles from "../CSS/Modal.module.css"

const Modal = (props) => {

    const CloseModal = () => {
        props.setModalFlgHandler(false);
    }

    return(
        <div className={styles.popup} style={{display: props.modalFlg ? "block" : "none"}} onClick={CloseModal}>
            <div className={styles["popup-block"]}>
                <div className={styles["modal-header"]}>
                    Некорректный ввод
                </div>
                <div className={styles["modal-error-text"]}>FFFFF
                </div>
                <div>
                    <button onClick={CloseModal} className={styles["button-on-modal"]}>Закрыть</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;