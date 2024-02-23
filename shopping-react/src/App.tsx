import { useState } from 'react'
import { useQuery } from 'react-query'
// components 
import { FaCartShopping } from "react-icons/fa6";
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

    const handleAddToCart = () => null;

    const handledRemoveFromCart = () => null;

    if(isLoading) return <Loader/>;
    if(error) return <div>error</div>;



  return (
    <div className="App">s</div>
  )
}

export default App
