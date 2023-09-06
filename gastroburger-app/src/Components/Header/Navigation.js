import styles from "./Navigation.module.css";
import shopping_cart from "../../images/free-icon-shopping-cart.png"
import Button from "../../UI/Button";
import { useContext, useState } from "react";
import BasketContext from "../../Context/BasketContext";
import Modal from "../Modal/Modal";
import { createPortal } from 'react-dom';

const Navigation = (props) => {

    const ctx = useContext(BasketContext);

    const [active,setActive] = useState(false);

    const showModal = (state) => {
        setActive(state);
    }

    return (
      <nav className={styles.nav}>
        {createPortal(<Modal active={active} showModal={showModal}/>, document.getElementById('modal'))}
        <ul>
            <li>
              <div className={styles.basket}>
                <Button onClick={()=>setActive(true)}><img alt='Корзина' src={shopping_cart} className={styles["shopping-cart"]}/> Корзина <div className={styles['count-item']}>{ctx.itemsList.length}</div></Button>
              </div>
            </li>
        </ul>
      </nav>
    );
  };
  
  export default Navigation;