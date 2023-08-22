import styles from './Input.module.css'

const Input = (props) => {
    return (<input className={styles.input} type={props.type} min={props.min} max={props.max} value={props.value} onChange={props.onChange}/>)
};

export default Input;