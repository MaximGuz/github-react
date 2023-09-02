import useInput from "../Hooks/useInput";

const SomeForm = (props) => {

  const {inputValue: inputName, 
    inputInvalid: nameInvalid, 
    touchInputHandler: touchNameHandler, 
    setInputHandler: setInputName, 
    resetInput: resetName,
    enteredIsValid: nameIsValid,
    inputClass: nameClass} = useInput((val) => val.trim() !== '');

  const {inputValue: inputSurname, 
    inputInvalid: surnameInvalid, 
    touchInputHandler: touchSurnameHandler, 
    setInputHandler: setInputSurname, 
    resetInput: resetSurame,
    enteredIsValid: surnameIsValid,
    inputClass: surnameClass} = useInput((val) => val.trim() !== '');

  const {inputValue: inputEmail, 
    inputInvalid: emailInvalid, 
    touchInputHandler: touchEmailHandler, 
    setInputHandler: setInputEmail, 
    resetInput: resetEmail,
    enteredIsValid: emailIsValid,
    inputClass: emailClass} = useInput((val) => val.includes("@"));

    let formIsValid = false;

    formIsValid = nameIsValid && surnameIsValid && emailIsValid;

  const submitHandler = (e) => {
    e.preventDefault();
    resetFunc();

  }

  const resetFunc = () => {
    resetName();
    resetSurame();
    resetEmail();
  }


  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={nameClass}>
          <label htmlFor="name">Введите Имя</label>
          <input 
            onChange={setInputName}
            type="text" 
            id="name" 
            value={inputName}
            onBlur={touchNameHandler}/>
          {nameInvalid ? <p className="error-text">Некорректное имя</p> : ''}
        </div>
        <div className={surnameClass}>
          <label htmlFor="surname">Введите Фамилию</label>
          <input 
            onChange={setInputSurname}
            type="text" 
            id="surname" 
            value={inputSurname}
            onBlur={touchSurnameHandler}/>
          {surnameInvalid ? <p className="error-text">Некорректная фамилия</p> : ''}
        </div>
      </div>
      <div className={emailClass}>
        <label htmlFor="email">Введите E-Mail</label>
        <input 
            onChange={setInputEmail}
            type="text" 
            id="email" 
            value={inputEmail}
            onBlur={touchEmailHandler}/>
        {emailInvalid ? <p className="error-text">Некорректный eMail</p> : ''}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid} className={!formIsValid ? 'invalid-button' : ''}>Отправить</button>
      </div>
    </form>
  );
};

export default SomeForm;
