import styles from './Menu.module.css'
import Wrapper from '../../UI/Wrapper';
import { useEffect, useState} from 'react';
import MenuItem from './MenuItem';


const Menu = () => {
    const [menuList, setMenuList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const fetchMenuList = async() => {
        setIsLoading((prev) => !prev);
          let newMenuList = [];
          try {
            //Искуственно делаем задержку при загрузке данных
            await new Promise(r => setTimeout(r, 2000));
            const response = await fetch("https://lessons-94bf5-default-rtdb.firebaseio.com/MenuList.json");
            const data = await response.json();
            
            for (const item in data) {
                newMenuList.push({id: item, name: data[item].name, desc: data[item].desc, cost: data[item].cost})
            }
  
            setMenuList(newMenuList);
          } catch(e) {
            setIsError(true);
            console.log(e.message);
          }
          setIsLoading((prev) => !prev);
      };
  
      useEffect(() => {
          fetchMenuList();
        }, []
      );
  

    const menuListHtml = (<Wrapper className={styles['menu-wrapper']}>
    {menuList.map((el)=> {
        return (
            <MenuItem name={el.name} desc={el.desc} cost={el.cost} key={el.id} id={el.id}/>
        )
    })}
    </Wrapper>);

    const isloadingHtml = (<Wrapper className={styles['menu-wrapper']}>Загрузка данных...</Wrapper>);
    const isErrorHtml = (<Wrapper className={styles['menu-wrapper']}>Ошибка при загрузке данных...</Wrapper>);


    return (<>
        {isError && isErrorHtml}
        {isLoading && !isError && isloadingHtml}
        {!isError && !isLoading && menuListHtml}
    </>)
}

export default Menu;