import React from "react";
import '../CSS/DateComponent.css';

function DateComponent(props) {
    const dateData = new Date(props.date);
    var locale = "ru-RU";

    return (<div className="date-component">
        <div id="date-data-month">{dateData.toLocaleString(locale, { month: "long" })}</div>
        <div id="date-data-mear">{dateData.getFullYear()}</div>
        <div id="date-data-day">{dateData.getDate()}</div>
    </div>)
}

export default DateComponent;