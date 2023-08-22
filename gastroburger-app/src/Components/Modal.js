import React, { useContext} from "react";
import styles from './Modal.module.css'
import BasketContext from "../Context/BasketContext";
import BasketItem from "./BasketItem";

const Modal = (props) => {
    const ctx = useContext(BasketContext);

    const hideModal = () => {
        props.showModal(false);
    }

    return(<div onClick={hideModal} className={`${styles.backdrop} ${props.active ? styles.active : ''}`}>
        <div className={styles.popup}>
            {ctx.totalCount.map((el)=> {
              return (<BasketItem name={el.name} cost={el.cost} count={el.count}/>)
            })}
            <div className={styles.itog}>
                <div>Итого</div>
                <div>100Р</div>
            </div>
        </div>
    </div>)
}

export default Modal;