import React from "react";
import styles from "../CSS/UserList.module.css"
import User from "./User";

const UserList = (props) => {
    return(
    <div className={styles["dop-block"]}>
         <div className={styles["form-center"]}>
           {props.users.map((el)=> (
                <User users={props.users} name={el.name} age={el.age} key={el.id} id={el.id} deleteElementHandler={props.deleteElementHandler}/>
           ))} 
        </div>
    </div>);
}

export default UserList;