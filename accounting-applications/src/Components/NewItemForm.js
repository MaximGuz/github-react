import React, { useState } from "react";
import formStyles from "../CSS/NewItemForm.module.css"
import standartElement from "../CSS/StandartElement.module.css"
import { uid } from "./GlobalFunction";

const NewItemForm = (props) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [date, setDate] = useState('');

    const setNameHandler = (e) => {
        setName(e.target.value);
    }
    const setPriceHandler = (e) => {
        setPrice(e.target.value);
    }
    const setDateHandler = (e) => {
        setDate(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        const itemData = {
            id: uid(),
            title: name,
            cost: price,
            date: new Date(date)
        }
        props.setItemsHandler(itemData);

        setName("");
        setPrice("");
        setDate("");

        props.setNewItemFormHandler(false);
     }
     const cancelFormHandler = () => {
        props.setNewItemFormHandler(false);
     }

    if (props.NewForm === false) {
        return (
            <div className={`${formStyles["form-data"]} ${standartElement["center-text"]}`}>
                <button className={standartElement["button-standart"]} onClick={()=> props.setNewItemFormHandler(true)}>Добавить новый расход</button>
            </div>
        )
    } else {
            return (
                <form className={formStyles["form-data"]}>
                    <div className={formStyles["form-element"]}>
                        <p className={standartElement["text-standart"]}>Наименование</p>
                        <input type="text" value={name} className={standartElement["input-standart"]}  onChange={setNameHandler}/>
                    </div>
                    <div className={formStyles["form-element"]}>
                        <p className={standartElement["text-standart"]}>Цена</p>
                        <input type="number" value={price} className={standartElement["input-standart"]}  onChange={setPriceHandler}/>
                    </div>
                    <div className={formStyles["form-element"]}>
                        <p className={standartElement["text-standart"]}>Дата</p>
                        <input type="date" value={date} className={standartElement["input-standart"]} onChange={setDateHandler}/>
                    </div>
                    <div className={formStyles["form-element"]}>
                        <button className={standartElement["button-standart"]} type="submit" onClick={submitHandler}>Новый товар</button>
                        
                        <button className={standartElement["button-standart"]} onClick={cancelFormHandler}>Отмена</button>
                    </div>
                </form>
        )
    }

    
}

export default NewItemForm