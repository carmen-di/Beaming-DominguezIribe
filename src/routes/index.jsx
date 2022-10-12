import React from 'react'
import NavBar from '../components/NavBar';
import ItemDetailContainer from '../container/ItemDetailContainer';
import ItemListContainer from "../container/ItemListContainer";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NotFound from '../components/NotFound';
import Cart from '../container/CartContainer';

const Routing = () => {
  return (
    <BrowserRouter> 
        <NavBar/>
        <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
            <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes> 
    </BrowserRouter>
  )
}

export default Routing;