import { useRef } from "react";
import Button from "../UI/Button";
import styles from "./NewItem.module.css"

const NewItem = () => {

    const nameRef = useRef(null);
    const costRef = useRef(null);
    const dateRef = useRef(null);
    const descRef = useRef(null);

    const postLesson = async(post) => {
        const response = await fetch("https://lessons-94bf5-default-rtdb.firebaseio.com/lessons.json",{
            method: "POST",
            body: JSON.stringify(post),
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) {
            console.log("Ошибка");
        } else {
            nameRef.current.value = '';
            costRef.current.value = '';
            dateRef.current.value = '';
            descRef.current.value = '';
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const post = {
            name: nameRef.current.value,
            cost: costRef.current.value,
            date: dateRef.current.value,
            desc: descRef.current.value,
        };
        postLesson(post);
    }


    return (<form>
        <div className={styles.control}>
            <label htmlFor="name">Наименование</label>
            <input ref={nameRef} id="name" type="text"/>
        </div>
        <div className={styles.control}>
            <label htmlFor="cost">Стоимость</label>
            <input ref={costRef} id="cost" type="text"/>       
        </div>
        <div className={styles.control}>
            <label htmlFor="date">Дата покупки</label>
            <input ref={dateRef} id="date" type="date"/>   
        </div>
        <div className={styles.control}>
            <label htmlFor="desc">Описание</label>
            <textarea ref={descRef} rows={5} id="desc" type="text"/>   
        </div>
        <Button type="submit" onClick={submitHandler}>Отправить</Button>
    </form>);
}

export default NewItem;