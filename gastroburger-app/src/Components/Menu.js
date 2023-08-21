import styles from './Menu.module.css'
import Wrapper from '../UI/Wrapper';
import { useContext } from 'react';
import MenuContext from '../Context/MenuContext';
import MenuItem from './MenuItem';


const Menu = () => {
    const ctx = useContext(MenuContext);

    return (<Wrapper className={styles['menu-wrapper']}>
            {ctx.menuList.map((el)=> {
                return (
                    <MenuItem name={el.name} desc={el.desc} cost={el.cost}/>
                )
            })}
    </Wrapper>)
}

export default Menu;