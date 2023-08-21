import React, { useState } from 'react'

const BasketContext = React.createContext({
    totalCount: {},
    setTotalCountHandler: () => {}, 
});

export const BasketContextProvider = (props) => {
    const [totalCount, setTotalCount] = useState(0);

    const setTotalCountHandler = (item) => {
        setTotalCount((prev) => {
            if(item.lastOp === '+'){
                return prev + 1;
            }else if(item.lastOp === '-'){
                return prev - 1;
            } else {
                return prev;
            }           
        });
    };
    
    return (<BasketContext.Provider value={{totalCount: totalCount, setTotalCountHandler: setTotalCountHandler}}>
        {props.children}
    </BasketContext.Provider>);
};

export default BasketContext;