import { useState } from "react";

const SomeInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [userTouchName, setUserTouchName] = useState(false);
  const [userTouchAge, setUserTouchAge] = useState(false);


  const nameIsValid = enteredName.trim() !== '' || userTouchName === false ? true : false;
  const ageIsValid = (enteredAge > 0 && enteredAge < 150) || userTouchAge === false ? true : false;
  const formIsValid = nameIsValid && ageIsValid;
  const inputNameClass = nameIsValid ? "form-control" : "form-control invalid";
  const inputAgeClass = ageIsValid ? "form-control" : "form-control invalid";

  // console.log('ageIsValid:' + ageIsValid);
  // console.log('formIsValid:' + formIsValid);


  const enteredNameHandler = (e) => {
    setEnteredName(e.target.value);
  }

  const enteredAgeHandler = (e) => {
    setEnteredAge(e.target.value);
  }

  const touchNameHandler = (e) => {
    setUserTouchName(true);
  }

  const touchAgeHandler = () => {
    setUserTouchAge(true);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setUserTouchName(true);
    setUserTouchAge(true);
  }

  

  return (
    <form onSubmit={submitHandler}>
      <div className={inputNameClass}>
        <label htmlFor="name">Введите Имя</label>
        <input 
          onChange={enteredNameHandler}
          type="text" 
          id="name"
          value={enteredName} 
          onBlur={touchNameHandler}/>
      </div>
      <div className={inputAgeClass}>
        <label htmlFor="age">Введите возраст</label>
        <input 
          onChange={enteredAgeHandler} 
          type="text" 
          id="age"
          value={enteredAge}
          onBlur={touchAgeHandler}/>
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid} className={!formIsValid ? 'invalid-button' : ''}>Отправить</button>
      </div>
      {formIsValid ? '' : <p className="error-text">Данные формы некорректны</p>}
    </form>
  );
};

export default SomeInput;
