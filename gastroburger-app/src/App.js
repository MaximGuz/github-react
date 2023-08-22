import styles from './App.module.css';
import Header from './Components/Header';
import Description from './Components/Description';
import burger_atmosphere from './images/burger-atmosphere.jpg'
import Menu from './Components/Menu';

function App() {
  return (
    <>
      <Header/>
      <div className={styles["background-photo-div"]}>
        <img alt="Бургер из мраморной говядины" src={burger_atmosphere} className={styles["background-photo"]}/>
      </div>
      <Description />
      <Menu />
    </>
  );
}

export default App;
