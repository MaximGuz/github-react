import React, { useContext, useState } from 'react';
import styles from './MenuItem.module.css'
import Input from '../../UI/Input';
import Button from '../../UI/Button';
import BasketContext from '../../Context/BasketContext';

const MenuItem = (props) => {
    const [count, setCount] = useState(0);
    const ctx = useContext(BasketContext);

    const addToBasket = () => {
        ctx.setItemCountHandler({name: props.name, desc: props.desc, cost: props.cost, id: props.id, count: count});
    }

    return(<>
            <div className={styles.a1}>
                <div className={styles.a2}>
                    <div className={styles['item-name']}>{props.name}</div>
                    <div className={styles['item-desc']}>{props.desc}</div>
                    <div className={styles['item-cost']}>{props.cost} ₽</div>
                </div>
                <div>
                    <div>
                        <span style={{fontWeight: 'bold', fontSize: '20px'}}>Количество: </span>
                        <Input type='number' min='0' value={count} onChange={(e)=>setCount(e.target.value)}/>
                    </div>
                    <div  className={styles.a3} style={{marginTop: '30px'}}><Button className={styles['add-button']} onClick={addToBasket}>Добавить</Button></div>
                </div>
            </div>
            <hr/>
        </>)
}

export default MenuItem;