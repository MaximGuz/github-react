import React, { useState } from 'react'

const BasketContext = React.createContext({
    totalCount: [{}],
    setTotalCount: () => {}, 
});

export const BasketContextProvider = (props) => {
    const [totalCount, setTotalCount] = useState([]);
    console.log(totalCount);


    const setTotalCountHandler = (item) => {
        setTotalCount((prev) => {
                for (let i = 0; i < prev.length; i++) {
                    if(prev[i].id === item.id) {
                        prev[i].count = Number(prev[i].count) + Number(item.count);
                        return [...prev]
                    }
                }
                return [...prev, item]
        });
    };
    
    return (<BasketContext.Provider value={{totalCount: totalCount, setTotalCountHandler: setTotalCountHandler}}>
        {props.children}
    </BasketContext.Provider>);
};

export default BasketContext;