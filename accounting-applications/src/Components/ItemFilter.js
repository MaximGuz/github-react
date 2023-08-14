import React from "react";
import "../CSS/ItemFilter.css";

const ItemFilter = (props) => {

    const yearsFilter = (e) => {
        props.setFilterHandler(e.target.value);
    };

    return (<div className="dropdown-year-filter">
        <select id="selectvalue" className="select-year" value={props.year} onChange={yearsFilter}>
            <option>2020</option>
            <option>2021</option>
            <option>2022</option>
            <option>2023</option>
            <option>2024</option>
        </select>
    </div>);
}

export default ItemFilter;