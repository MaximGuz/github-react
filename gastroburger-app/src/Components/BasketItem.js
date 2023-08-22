import styles from './BasketItem.module.css'
import Input from '../UI/Input';

const BasketItem = (props) => {
    return (<>
    <div className={styles.structure}>
        <div className={styles.info}>
            <div className={styles.name}>{props.name}</div>
            <span className={styles.cost}>{props.cost * props.count}₽</span>
            <Input className={styles.count} value={props.count}></Input >
        </div>
         <div>
            +
        </div>
    </div>
    <hr/>
    </>
    )

}

export default BasketItem;