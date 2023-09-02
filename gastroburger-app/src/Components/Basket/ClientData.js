import useInput from '../../Hooks/useInput';
import styles from './ClientData.module.css'
import Button from '../../UI/Button';
import BasketContext from '../../Context/BasketContext';
import { useContext } from 'react';

const ClientData = (props) => {
    const ctx = useContext(BasketContext);

    const { enteredValue: enteredName,
        valueIsValid: nameIsValid,
        inputInvalid: nameInputInvalid,
        setEnteredValueHandler: setEnteredNameHandler,
        setWasInputTouchedHandler: setWasNameTouchedHandler,
     } = useInput((val)=>val.trim() !== '');

     const { enteredValue: enteredAddress,
        valueIsValid: addressIsValid,
        inputInvalid: addressInputInvalid,
        setEnteredValueHandler: setEnteredAddressHandler,
        setWasInputTouchedHandler: setWasAddressTouchedHandler,
     } = useInput((val)=>val.trim() !== '');

     const { enteredValue: enteredPhone,
        valueIsValid: phoneIsValid,
        inputInvalid: phoneInputInvalid,
        setEnteredValueHandler: setEnteredPhoneHandler,
        setWasInputTouchedHandler: setWasPhoneTouchedHandler,
     } = useInput((val)=>val.includes('+7') && val.length === 12);

     const { enteredValue: enteredEmail,
        valueIsValid: emailIsValid,
        inputInvalid: emailInputInvalid,
        setEnteredValueHandler: setEnteredEmailHandler,
        setWasInputTouchedHandler: setWasEmailTouchedHandler,
     } = useInput((val)=>val.includes('@'));

     let formIsValid = false;

     formIsValid = nameIsValid && addressIsValid && phoneIsValid && emailIsValid; 

     const sendHttp = () => {   
        const sendData = {
            FIO: enteredName,
            Address: enteredAddress,
            Phone: enteredPhone,
            Email: enteredEmail,
            Summa: ctx.totalCount,
        };
        
        props.onSumbitHandler(sendData);
        props.sucessOrderHandler(true);
     };
     

    return (<><form className={styles['client-data']} onSubmit={sendHttp}>
        <div className={styles['data-title']}>Данные получателя</div>
        <br />
        <div className={`${styles['form-control']} ${nameInputInvalid ? styles['invalid'] : ''}`}>
            <label htmlFor='FIO'>ФИО</label>
            <input id='FIO' type='text' onChange={setEnteredNameHandler} value={enteredName} onBlur={setWasNameTouchedHandler}/>
            {nameInputInvalid ? <p className={styles['error-text']}>Неккоретное ФИО</p> : ''}
        </div>
        <div className={`${styles['form-control']} ${addressInputInvalid ? styles['invalid'] : ''}`}>
            <label htmlFor='Address'>Адрес</label>
            <textarea rows={5} id='Address' type='text' onChange={setEnteredAddressHandler} value={enteredAddress} onBlur={setWasAddressTouchedHandler}/>
            {addressInputInvalid ? <p className={styles['error-text']}>Неккоретный адрес</p> : ''}
        </div>
        <div className={`${styles['form-control']} ${phoneInputInvalid ? styles['invalid'] : ''}`}>
            <label htmlFor='Phone'>Телефон</label>
            <input id='Phone' type='text' onChange={setEnteredPhoneHandler} value={enteredPhone} onBlur={setWasPhoneTouchedHandler}/>
            {phoneInputInvalid ? <p className={styles['error-text']}>Неккоретный телефон. Телефон должен начинаться с +7.</p> : ''}
        </div>
        <div className={`${styles['form-control']} ${emailInputInvalid ? styles['invalid'] : ''}`}>
            <label htmlFor='email'>E-Mail</label>
            <input id='email' type='text' onChange={setEnteredEmailHandler} value={enteredEmail} onBlur={setWasEmailTouchedHandler}/>
            {emailInputInvalid ? <p className={styles['error-text']}>Неккоретный E-Mail</p> : ''}
        </div>
    </form>
    <div className={styles['close-order']}>
        <Button disabled={!formIsValid} className={!formIsValid ? styles['invalid-button'] : ''} onClick={sendHttp}>Заказать</Button>  <Button onClick={props.hideModal}>Закрыть</Button>
    </div>
    </>);
}

export default ClientData;