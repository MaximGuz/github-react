import React, { useContext } from "react";
import styles from './Modal.module.css'
import BasketContext from "../../Context/BasketContext";
import BasketItem from "../Basket/BasketItem";
import Button from "../../UI/Button";

const Modal = (props) => {
    const ctx = useContext(BasketContext);

    const hideModal = () => {
        props.showModal(false);
    }

    const fullBasket = (<div className={styles.popup} onClick={(e)=>{
                e.preventDefault();
                e.stopPropagation();
                }}>
            {ctx.itemCount.map((el)=> {
            return (<BasketItem name={el.name} cost={el.cost} count={el.count} key={el.id} id={el.id} setOneItem={ctx.setOneItem}/>)
            })}
            <div className={styles.itog}>
                <div className={styles['itog-label']}>Итого</div>
                <div className={styles['itog-summa']}>{ctx.totalSum}</div>
                <div className={styles['itog-summa']}>{ctx.totalCount}</div>
            </div>
            <div className={styles['close-order']}><Button>Заказать</Button>  <Button onClick={hideModal}>Закрыть</Button></div>
        </div>);

    const emptyBasket = (<div className={styles.popup} onClick={(e)=>{
        e.preventDefault();
        e.stopPropagation();
        }}><div className={styles['empty-basket']}>В корзине пока пусто</div><div className={styles['close-empty-basket']}><Button onClick={hideModal}>Закрыть</Button></div></div>)

    return(<div onClick={hideModal} className={`${styles.backdrop} ${props.active ? styles.active : ''}`}>
        {ctx.itemCount.length === 0 ? emptyBasket : fullBasket}
    </div>)
}

export default Modal;