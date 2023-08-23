import React, { useEffect, useState } from 'react'

const BasketContext = React.createContext({
    itemCount: [{}],
    setItemCount: () => {}, 
    setOneItem: () => {},
});



export const BasketContextProvider = (props) => {
    const [itemCount, setItemCount] = useState([]);
    const [totalCount, setTotalCount] = useState(0);

    useEffect(()=>{
        let sum = 0;
        let idx = undefined;
        for (let i = 0; i < itemCount.length; i++) {
            sum += (itemCount[i].cost*itemCount[i].count);
            if(itemCount[i].count === 0) {
                idx = itemCount[i].id;
            }
        }
        setTotalCount((prev)=>sum);

        if (idx !== undefined){
            let newItems = itemCount.filter((n) => {           
                return n.id !== idx;
              })
            setItemCount(newItems);
        }    
    },[itemCount]);
    
    const setItemCountHandler = (item) => {
        setItemCount((prev) => {
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
        setItemCount((prev) => {
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

    
    return (<BasketContext.Provider value={{itemCount: itemCount, setItemCountHandler: setItemCountHandler, totalCount: totalCount, setOneItem: setOneItem}}>
        {props.children}
    </BasketContext.Provider>);
};

export default BasketContext;