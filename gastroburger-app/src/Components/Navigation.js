import styles from "./Navigation.module.css";
import shopping_cart from "../images/free-icon-shopping-cart.png"
import Button from "../UI/Button";

const Navigation = (props) => {
    return (
      <nav className={styles.nav}>
        <ul>
            <li>
              <div className={styles.basket}>
                <Button> <img src={shopping_cart} className={styles["shopping-cart"]}/> Корзина</Button>
              </div>
            </li>
        </ul>
      </nav>
    );
  };
  
  export default Navigation;