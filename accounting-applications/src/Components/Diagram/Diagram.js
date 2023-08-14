import React from "react";
import DiagramBar from "./DiagramBar";
import "./Diagram.css"

const Diagram = (props) => {
    const DiagramMonths = [
        { id: 1, label: 'Янв', value: 0 },
        { id: 2, label: 'Фев', value: 0 },
        { id: 3, label: 'Март', value: 0 },
        { id: 4, label: 'Апр', value: 0 },
        { id: 5, label: 'Май', value: 0 },
        { id: 6, label: 'Июнь', value: 0 },
        { id: 7, label: 'Июль', value: 0 },
        { id: 8, label: 'Авг', value: 0 },
        { id: 9, label: 'Сен', value: 0 },
        { id: 10, label: 'Окт', value: 0 },
        { id: 11, label: 'Нояб', value: 0 },
        { id: 12, label: 'Дек', value: 0 },
    ]

    for (const item of props.filteredItems) {
        const itemMonth = item.date.getMonth();
        DiagramMonths[itemMonth].value += Number(item.cost);
    }

    const ItemsValue = props.filteredItems.map((el) => {
        return el.cost;
    })

    let sumOfItemsValue = 0;

    for (const item of ItemsValue) {
        sumOfItemsValue += Number(item);
    }


    return (<div className="diagram">
        {DiagramMonths.map((el)=>
            <DiagramBar 
                label = {el.label}
                value = {el.value}
                sum = {sumOfItemsValue}
                key = {el.id}
            />
        )}
    </div>)
    
}

export default Diagram;