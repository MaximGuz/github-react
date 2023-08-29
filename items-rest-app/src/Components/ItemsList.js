import Item from './Item';

const ItemsList = (props) => {
    return (<>{props.items.map((el)=> {
        return <Item el={el} key={el.id}/>
    })}</>);
}

export default ItemsList;