import React, { useEffect, useState } from 'react'

const MenuContext = React.createContext({
    menuList: {},
    setMenuListHandler: () => {}, 
});

export const MenuContextProvider = (props) => {
  const [menuList, setMenuList] = useState([]);
    // const [menuList, setMenuList] = useState([
    //     {
    //       id: 0,
    //       name: "Чизбургер",
    //       desc: "В составе классического Чизбургер маринованный огурец, фирменные соусы с насыщенными вкусами и сыр, которые подчеркнут вкус натурального бифштекса на ароматных булочках.",
    //       cost: 100,
    //     },
    //     {
    //       id: 1,
    //       name: "Гамбургер",
    //       desc: "Рубленный бифштекс из говядины с хрустящим маринованным огурцом, горчицей, кетчупом и луком в подрумяненной карамелизованной булочке.",
    //       cost: 70,
    //     },
    //     {
    //       id: 2,
    //       name: "ГастроХит",
    //       desc: "В составе свежий салат, фирменный соус с насыщенным вкусом и плавленный сыр, которые подчеркнут вкус котлеты из говядины на ароматных булочках.",
    //       cost: 175,
    //     }
    // ])
    const fetchMenuList = async() => {
        let newMenuList = [];
        try {
          const response = await fetch("https://lessons-94bf5-default-rtdb.firebaseio.com/MenuList.json");
          const data = await response.json();
          
          for (const item in data) {
              newMenuList.push({id: item, name: data[item].name, desc: data[item].desc, cost: data[item].cost})
          }

          setMenuList(newMenuList);
        } catch(e) {
          console.log(e.message);
        }
    };

    useEffect(() => {
        fetchMenuList();
      }, []
    );

    const setMenuListHandler = (item) => {
        setMenuList({...menuList, item});
    };
    
    return (<MenuContext.Provider value={{menuList: menuList, setMenuListHandler: setMenuListHandler}}>
        {props.children}
    </MenuContext.Provider>);
};

export default MenuContext;