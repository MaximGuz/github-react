import styles from './ItemDate.module.css'

const ItemDate = (props) => {
    const dateData = new Date(props.date);
    var locale = "ru-RU";

    return (<div className={styles['date-component']}>
            <div id={styles["date-data-month"]}>{dateData.toLocaleString(locale, { month: "long" })}</div>
            <div id={styles["date-data-mear"]}>{dateData.getFullYear()}</div>
            <div id={styles["date-data-day"]}>{dateData.getDate()}</div>
        </div>)
};


export default ItemDate;