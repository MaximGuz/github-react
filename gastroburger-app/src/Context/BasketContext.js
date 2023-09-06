import React, { useEffect, useState } from 'react'

const BasketContext = React.createContext({
    itemsList: [{}],
    totalSum: 0,
    setItemCount: () => {}, 
    setOneItem: () => {},
    resetBasket: () => {},
});



export const BasketContextProvider = (props) => {
    const [itemsList, setItemsList] = useState([]);
    const [totalSum, setTotalSum] = useState(0);

    useEffect(()=>{
        let sum = 0;
        let idx = undefined;
        for (let i = 0; i < itemsList.length; i++) {
            sum += (itemsList[i].cost*itemsList[i].count);
            if(itemsList[i].count === 0) {
                idx = itemsList[i].id;
            }
        }
        setTotalSum((prev)=>sum);

        if (idx !== undefined){
            let newItems = itemsList.filter((n) => {           
                return n.id !== idx;
              })
            setItemsList(newItems);
        }    
    },[itemsList]);
    
    const setItemCountHandler = (item) => {
        setItemsList((prev) => {
                for (let i = 0; i < prev.length; i++) {
                    if(prev[i].id === item.id) {
                        prev[i].count = Number(prev[i].count) + Number(item.count);
                        return [...prev]
                    }
                };
                return [...prev, item]
        });
    };

    const setOneItem = (id, oper) => {
        setItemsList((prev) => {
                for (let i = 0; i < prev.length; i++) {
                    if(prev[i].id === id) {
                        if(oper === "+") {
                            prev[i].count = Number(prev[i].count) + 1;
                        }
                        if(oper === "-") {
                            prev[i].count = Number(prev[i].count) - 1;
                        }
                    }
                };
            return [...prev]
        });
    };

    const resetBasket = () => {
        setItemsList([]);
    };

    
    return (<BasketContext.Provider value={{
        itemsList, 
        totalSum, 
        setItemCountHandler, 
        setOneItem,
        resetBasket}}>
        {props.children}
    </BasketContext.Provider>);
};

export default BasketContext;