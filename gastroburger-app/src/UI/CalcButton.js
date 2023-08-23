import styles from "./PlusButton.module.css"

const PlusButton = (props) => {
    return (<button className={styles['button-plus-minus']} onClick={props.onClick}>{props.children}</button>);
}

export default PlusButton;