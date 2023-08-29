import Wrapper from '../UI/Wrapper';
import styles from './Item.module.css';
import ItemDate from './ItemDate';

const Item = (props) => {

    return(
    <Wrapper className={styles.wraps}>
        <div className={styles.item}>
            <div>
                <ItemDate date={props.el.date}/>
            </div>
            <div>
                <div className={styles.name}>{props.el.name}</div>
                <br/>
                <div className={styles.cost}>{props.el.cost} ₽</div>
            </div>
        </div>
        <br/>
        <div className={styles['desc-label']}>Описание:</div>
        <div className={styles.desc}>{props.el.desc}</div>
    </Wrapper>
    );
}

export default Item;