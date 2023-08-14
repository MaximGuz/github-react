import React, { useState } from "react";
import Item from "./Item";
import ItemShell from "./ItemShell";
import ItemFilter from "./ItemFilter";
import Diagram from "./Diagram/Diagram";
import "../CSS/ItemList.css"

function ItemList(props){

    const [filter, setFilter] = useState('2022')
    
    const setFilterHandler = (el) => {
        setFilter(el);
    }

    const filteredItems = props.Items.filter((el) => {
        return el.date.getFullYear().toString() === filter;     
    });
    
    return (<ItemShell>
        <ItemFilter setFilterHandler={setFilterHandler} year={filter}/>
        <Diagram filteredItems={filteredItems}/>
        {filteredItems.length > 0 ? filteredItems.map((el) => (
               <Item title={el.title} cost={el.cost} date={el.date} key={el.id}/>
            )
        ) : <div className="no-items-msg">Нет операций за указанный период</div>}
    </ItemShell>)
}

export default ItemList;

