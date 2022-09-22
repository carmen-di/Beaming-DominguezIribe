import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './container/ItemDetailContainer';
import ItemListContainer from "./container/ItemListContainer";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NotFound from './components/NotFound';
import Cart from './container/CartContainer';
import CartContext from './context/CartContext';

function App() {
  return (
    <CartContext>
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
    </CartContext>
  );
}

export default App;