import React, { useState } from 'react'

const MenuContext = React.createContext({
    menuList: {},
    setMenuListHandler: () => {}, 
});

export const MenuContextProvider = (props) => {
    const [menuList, setMenuList] = useState([
        {
          id: 0,
          name: "Чизбургер",
          desc: "В составе классического Чизбургер маринованный огурец, фирменные соусы с насыщенными вкусами и сыр, которые подчеркнут вкус натурального бифштекса на ароматных булочках.",
          cost: 100,
        },
        {
          id: 1,
          name: "Гамбургер",
          desc: "Рубленный бифштекс из говядины с хрустящим маринованным огурцом, горчицей, кетчупом и луком в подрумяненной карамелизованной булочке.",
          cost: 70,
        },
        {
          id: 2,
          name: "ГастроХит",
          desc: "В составе свежий салат, фирменный соус с насыщенным вкусом и плавленный сыр, которые подчеркнут вкус котлеты из говядины на ароматных булочках.",
          cost: 175,
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