import styles from './Input.module.css'
import React, { useImperativeHandle, useRef } from 'react';

const Input = React.forwardRef((props, ref) => {
    const inRef = useRef();
    const clearInput = () => {
        inRef.current.value = '0';
    }

    useImperativeHandle(ref, () => {
        return {
            clearInput: clearInput,
        }
    });
    return (<input ref={inRef} defaultValue={props.defaultValue} className={styles.input} type={props.type} min={props.min} max={props.max} value={props.value} onChange={props.onChange}/>)
});

export default Input;