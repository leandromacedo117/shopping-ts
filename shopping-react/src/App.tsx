import { useState } from 'react'
import { useQuery } from 'react-query'
// components 
import Item from './Item/Item'
import { FaShoppingCart } from "react-icons/fa";
import Loader from './components/Loader/Loader'
// styles 
import { Wrapper } from './App.styles'
import './App.css'
// types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: string;
}

const getProducts = async (): Promise<CartItemType> => 
    await (await fetch('https://fakestoreapi.com/products')).json();

const App = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products' ,
     getProducts
    );
    console.log(data);

    const getTotalItens = () => null;

    const handleAddToCart = (clickeditem: CartItemType) => null;

    const handledRemoveFromCart = () => null;

    if(isLoading) return <Loader/>;
    if(error) return <div>error</div>;



  return (
    <Wrapper>
      <div className='itens'>
        {data?.map(item =>(
          <div className='item' key={item.id}>
            <Item item={item} handleAddToCart={handleAddToCart}/>
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

export default App
