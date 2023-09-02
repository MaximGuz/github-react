import { useState } from "react";
import '../index.css';

const useInput = (validation) => {
    const [inputValue, setInputValue] = useState('');
    const [inputTouch, setInputTouch] = useState(false);

    const enteredIsValid = validation(inputValue);

    const inputInvalid = !enteredIsValid && inputTouch;

    const inputClass = inputInvalid ? "form-control invalid" : "form-control";

    const setInputHandler = (e) => {
        setInputValue(e.target.value);
    }

    const touchInputHandler = (e) => {
        setInputTouch(true);
        console.log("kj");
    }

    const resetInput = () => {
        setInputValue('');
        setInputTouch(false);
    }

    return{touchInputHandler, inputInvalid, setInputHandler, inputValue, inputClass, resetInput, enteredIsValid, inputTouch };  
};

export default useInput;