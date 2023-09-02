import React, { useContext, useState } from "react";
import styles from './Modal.module.css'
import BasketContext from "../../Context/BasketContext";
import BasketItem from "../Basket/BasketItem";
import Button from "../../UI/Button";
import ClientData from "../Basket/ClientData";

const Modal = (props) => {
    const ctx = useContext(BasketContext);
    const [sucessOrder, setSucessOrder] = useState(false);

    const sucessOrderHandler = (state) => {
        setSucessOrder(state);
    };

    const hideModal = () => {
        props.showModal(false);
        setTimeout(()=>setSucessOrder(false), 500);
    };

    const onSumbitHandler = async(userData) => {
        let newItemCount = [{}];

        for (let i=0; i < ctx.itemCount.length; i++) {
            newItemCount.push({
                count: ctx.itemCount[i].count,
                cost: ctx.itemCount[i].cost,
                name: ctx.itemCount[i].name,
                sumPosition: Number(ctx.itemCount[i].count) *  Number(ctx.itemCount[i].cost),
            });
        };

        const response = await fetch("https://lessons-94bf5-default-rtdb.firebaseio.com/Orders.json", {
            method: "POST",
            body: JSON.stringify({
                user: userData,
                orderedMeals: newItemCount,
              }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        
        if (!response.ok) {
            console.log("Ошибка");
        }
    };

    const fullBasket = (<div className={styles.popup} onClick={(e)=>{
                e.preventDefault();
                e.stopPropagation();
                }}>
            {ctx.itemCount.map((el)=> {
            return (<BasketItem name={el.name} cost={el.cost} count={el.count} key={el.id} id={el.id} setOneItem={ctx.setOneItem}/>)
            })}
            <div className={styles.itog}>
                <div className={styles['itog-label']}>Итого</div>
                <div className={styles['itog-summa']}>{ctx.totalCount}</div>
            </div>
            <ClientData hideModal={hideModal} sucessOrderHandler={sucessOrderHandler} onSumbitHandler={onSumbitHandler}/>
        </div>);

    const emptyBasket = (<div className={styles.popup} onClick={(e)=>{
        e.preventDefault();
        e.stopPropagation();
        }}><div className={styles['empty-basket']}>В корзине пока пусто</div><div className={styles['close-empty-basket']}><Button onClick={hideModal}>Закрыть</Button></div></div>)

    const sucessBasket = (<div className={styles.popup} onClick={(e)=>{
        e.preventDefault();
        e.stopPropagation();
        }}><div className={styles['empty-basket']}>Заказ успешно оформлен. Оператор свяжется с вами в ближайшее время</div><div className={styles['close-empty-basket']}><Button onClick={hideModal}>Закрыть</Button></div></div>)

    return(<div onClick={hideModal} className={`${styles.backdrop} ${props.active ? styles.active : ''}`}>
        {ctx.itemCount.length === 0 && emptyBasket}
        {ctx.itemCount.length > 0 && sucessOrder && sucessBasket}
        {ctx.itemCount.length > 0 && !sucessOrder && fullBasket}
    </div>)
}

export default Modal;