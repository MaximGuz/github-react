import { useState } from 'react';
import Button from './UI/Button';
import ItemsList from './Components/ItemsList';
import Wrapper from './UI/Wrapper';
import NewItem from './Components/NewItem';
import styles from './App.module.css'

const App = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const fetchItemsFunction = async() => {
        setIsError(false);
        setIsLoading(true);
        try {
            const response = await fetch('https://lessons-94bf5-default-rtdb.firebaseio.com/lessons.json');
            const data = await response.json();

            let newData = [];

            for (const key in data) {
              newData.push({
                id: key,
                name: data[key].name,
                cost: data[key].cost,
                date: data[key].date,
                desc: data[key].desc,
              });
            }
            setItems(newData);
        } catch (error) {
            setItems([]);
            setIsError(true);
        }
        setIsLoading(false);
    }

    let content;

    if (isLoading) {
        content = <p className={styles.info}>Загрузка данных...</p>
    }
    if (isError) {
        content = <p className={styles.info}>Произошла ошибка...</p>
    }
    if(!isLoading && !isError && items.length > 0) {
        content = <ItemsList items={items}/>
    }
    if(!isLoading && !isError && items.length === 0) {
      content = <p className={styles.info}>Выполните поиск данных</p>
    }


    return (<>
        <Wrapper>
          <NewItem />
        </Wrapper>
        <Wrapper>
          <Button onClick={fetchItemsFunction}>Загрузить</Button>
          {content}
        </Wrapper>
    </>);
}

export default App;
