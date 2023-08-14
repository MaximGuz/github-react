import React, { useState } from "react";
import "../CSS/NewItemForm.css"
import "../CSS/StandartElement.css"
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
            <div className="form-data center-text">
                <button className="new-item-form-simple" onClick={()=> props.setNewItemFormHandler(true)}>Добавить новый расход</button>
            </div>
        )
    } else {
            return (
                <form className="form-data">
                    <div className="form_element">
                        <p className="text-standart">Наименование</p>
                        <input type="text" value={name} className="inputStandart" onChange={setNameHandler}/>
                    </div>
                    <div className="form-element">
                        <p className="text-standart">Цена</p>
                        <input type="number" value={price} className="inputStandart" onChange={setPriceHandler}/>
                    </div>
                    <div className="form-element">
                        <p className="text-standart">Дата</p>
                        <input type="date" value={date} className="inputStandart" onChange={setDateHandler}/>
                    </div>
                    <div className="form-element">
                        <button className="button-standart" type="submit" onClick={submitHandler}>Новый товар</button>
                        
                        <button className="button-standart" onClick={cancelFormHandler}>Отмена</button>
                    </div>
                </form>
        )
    }

    
}

export default NewItemForm