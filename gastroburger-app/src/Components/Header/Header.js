import styles from "./Header.module.css";
import logo from "../../images/free-icon-burger.png"
import Navigation from "./Navigation";

const Header = () => {
    return (<div className={styles.header}>
        <div className={styles["header-text"]}>
            <img className={styles.logo} src={logo} alt="Гастробургер"/> Гастробургер
        </div>    
        <Navigation/>
    </div>)

}

export default Header;