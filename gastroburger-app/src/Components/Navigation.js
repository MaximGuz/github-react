import styles from "./Navigation.module.css";
import shopping_cart from "../images/free-icon-shopping-cart.png"
import Button from "../UI/Button";
import { useContext } from "react";
import BasketContext from "../Context/BasketContext";

const Navigation = (props) => {

    const ctx = useContext(BasketContext);

    return (
      <nav className={styles.nav}>
        <ul>
            <li>
              <div className={styles.basket}>
                <Button><img alt='Корзина' src={shopping_cart} className={styles["shopping-cart"]}/> Корзина <div className={styles['count-item']}>{ctx.totalCount}</div></Button>
              </div>
            </li>
        </ul>
      </nav>
    );
  };
  
  export default Navigation;