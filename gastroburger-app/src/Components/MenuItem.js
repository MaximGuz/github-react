import React, { useEffect, useReducer, useContext } from 'react';
import styles from './MenuItem.module.css'
import Input from '../UI/Input';
import Button from '../UI/Button';
import PlusButton from '../UI/PlusButton';
import BasketContext from '../Context/BasketContext';

const reducer = (state, action) => {
    switch (action) {
        case "increment": {
            return {value: state.value + 1, lastOp: '+'};
        }
        case "decrement": {
            if (state === 0) {
                return {value: 0, lastOp: undefined};
            }
            return {value: state.value + 1, lastOp: '-'};
        }
        default: return {value: 0, lastOp: undefined};

    }
};

const MenuItem = (props) => {
    const ctx = useContext(BasketContext);
    const [calculation, dispatcher] = useReducer(reducer, {value: 0, lastOp: undefined})
    
    useEffect(()=> {
        ctx.setTotalCountHandler(calculation);
    },[calculation]);
    
    return(<>
            <div className={styles.a1}>
                <div className={styles.a2}>
                    <div className={styles['item-name']}>{props.name}</div>
                    <div className={styles['item-desc']}>{props.desc}</div>
                    <div className={styles['item-cost']}>{props.cost}</div>
                </div>
                <div className={styles.a3}>
                    <div>
                        <span style={{fontWeight: 'bold', fontSize: '1.2em'}}>Количество: </span>
                        <Input type='number' min='0' value={calculation}/>
                        <span className={styles["button-plus-minus"]}>
                            <PlusButton onClick={()=> dispatcher("increment")}>+</PlusButton>
                            <PlusButton onClick={()=> dispatcher("decrement")}>-</PlusButton>
                        </span>
                    </div>
                    <div  className={styles.a4} style={{marginTop: '30px'}}><Button className={styles['add-button']}>Добавить</Button></div>
                </div>
            </div>
            <hr/>
        </>)
}

export default MenuItem;