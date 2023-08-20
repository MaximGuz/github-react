import styles from './Menu.module.css'
import Wrapper from '../UI/Wrapper';
import { useContext } from 'react';
import MenuContext from '../Context/MenuContext';
import Input from '../UI/Input';
import Button from '../UI/Button';

const Menu = () => {
    const ctx = useContext(MenuContext);

    console.log(ctx.menuList);
    return (<Wrapper className={styles["menu-wrapper"]}>
            {ctx.menuList.map((el)=> {
                return (
                <>
                <div className={styles.a1}>
                    <div className={styles.a2}>
                        <div className={styles['item-name']}>{el.name}</div>
                        <div className={styles['item-desc']}>{el.desc}</div>
                        <div className={styles['item-cost']}>{el.cost}</div>
                    </div>
                    <div className={styles.a3}>
                        <div><span style={{fontWeight: 'bold'}}>Количество: </span><Input type='number' min='0'/></div>
                        <div  className={styles.a4} style={{marginTop: '30px'}}><Button>Добавить</Button></div>
                    </div>
                </div>
                <hr/>
                </>)
            })}
    </Wrapper>)
}

export default Menu;