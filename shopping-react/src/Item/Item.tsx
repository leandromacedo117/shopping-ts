import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
// types 
import { CartItemType } from "../App";
// styles 
import { Wrapper } from './Item.styles';
import './Item.module.css'

type Props = {
    item: CartItemType;
    handleAddToCart:(clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({ item, handleAddToCart}) => (
    <Wrapper>
        <span><img src={item.image} alt={item.title} /></span>
        <div className='item-list'>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>{item.price+'R$'}</h3>
        </div>
        <span>
            <Button variant='primary'
            onClick={() => handleAddToCart(item)  } 
            > Add Item </Button>
        </span>
    </Wrapper>
);

export default Item;