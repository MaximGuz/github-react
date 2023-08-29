import styles from './Wrapper.module.css'

const Wrapper = (props) => {
    return (<div className={`${styles.wrap} ' ' ${props.className}`}>{props.children}</div>)
}

export default Wrapper;