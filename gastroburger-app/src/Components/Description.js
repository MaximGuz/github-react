import styles from './Description.module.css'

const Description = () => {
    return(<div className={styles.description}>
        <span style={{color: "white", fontSize: "1.5rem"}}>Приветствуем вас в самой восхитительной бургерной Москвы - "Гастробургер"! <br/></span>
        <br/>
        Получите удовольствие от непревзойденного опыта гурмана, где каждое блюдо <br/>
        станет взрывом вкуса и кулинарной фантазии.<br/>
        <br/>
        Наша философия заключается в том, чтобы создавать бургеры, которые не только<br/> 
        уталят голод, но и усладят ваши вкусовые рецепторы.
    </div>)
}

export default Description;