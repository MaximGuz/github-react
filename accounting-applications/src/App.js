import { useState } from "react";
import ItemList from "./Components/ItemsList";
import NewItemForm from "./Components/NewItemForm";
import { uid } from "./Components/GlobalFunction";

const App = () => {

  //TEst
 
  const initItems = [
    {
        id: uid(),
        title: "Холодильник",
        cost: 2500,
        date: new Date(2023,5,25)
    },
    {
        id: uid(),
        title: "Микроволновка",
        cost: 4000,
        date: new Date(2023,2,25)
    },
    {
        id: uid(),
        title: "Тостер",
        cost: 2500,
        date: new Date(2023,4,15)
    },
    {
        id: uid(),
        title: "Духовка",
        cost: 7500,
        date: new Date(2022,5,12)
    },
    {
        id: uid(),
        title: "Посудомойка",
        cost: 15000,
        date: new Date(2022,4,31)
    },
    {
        id: uid(),
        title: "Телефон",
        cost: 12500,
        date: new Date(2022,4,19)
    },
    {
        id: uid(),
        title: "Вентилятор",
        cost: 1500,
        date: new Date(2021,3,17)
    },
    {
        id: uid(),
        title: "Пылесос",
        cost: 15000,
        date: new Date(2021,1,31)
    },
    {
        id: uid(),
        title: "Телевизор",
        cost: 12500,
        date: new Date(2021,11,11)
    },
  ]

   const [Items, setItems] = useState(initItems);
   const [NewForm, setNewForm] = useState(false);

   const setItemsHandler = (item) => {
      setItems((prevItems) => {
        return [...prevItems, item]
      });
   }

   const setNewItemFormHandler = (formFlag) => {
      setNewForm(formFlag);
    }

  return (
    <div className="App">
      <NewItemForm setItemsHandler={setItemsHandler} setNewItemFormHandler={setNewItemFormHandler} NewForm={NewForm}/>
      <br/>
      <ItemList Items={Items}/>
    </div>
  );

}

export default App;
