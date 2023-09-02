import { useState } from "react";

const useInput = (validation) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [wasInputTouched, setWasInputTouched] = useState(false);

    const valueIsValid = validation(enteredValue);
    const inputInvalid = !valueIsValid && wasInputTouched;

    const setEnteredValueHandler = (e) => {
        setEnteredValue(e.target.value);
    };

    const setWasInputTouchedHandler = () => {
        setWasInputTouched(true);
    };

    return {
        enteredValue,
        valueIsValid,
        inputInvalid,
        setEnteredValueHandler,
        setWasInputTouchedHandler,
    };
}

export default useInput;