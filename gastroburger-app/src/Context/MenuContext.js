import React, { useState } from 'react'
import styles from './MenuContext.module.css'

const MenuContext = React.createContext({
    menuList: {},
    setMenuListHandler: () => {}, 
});

export const MenuContextProvider = (props) => {
    const [menuList, setMenuList] = useState([
        {
          name: "Чизбургер",
          desc: "В составе классического Чизбургер маринованный огурец, фирменные соусы с насыщенными вкусами и сыр, которые подчеркнут вкус натурального бифштекса на ароматных булочках.",
          cost: "100 ₽",
        },
        {
          name: "Гамбургер",
          desc: "Рубленный бифштекс из говядины с хрустящим маринованным огурцом, горчицей, кетчупом и луком в подрумяненной карамелизованной булочке.",
          cost: "70 ₽",
        },
        {
          name: "ГастроХит",
          desc: "В составе свежий салат, фирменный соус с насыщенным вкусом и плавленный сыр, которые подчеркнут вкус котлеты из говядины на ароматных булочках.",
          cost: "175 ₽",
        }
    ])

    const setMenuListHandler = (item) => {
        setMenuList({...menuList, item});
    };
    
    return (<MenuContext.Provider value={{menuList: menuList, setMenuListHandler: setMenuListHandler}}>
        {props.children}
    </MenuContext.Provider>);
};

export default MenuContext;