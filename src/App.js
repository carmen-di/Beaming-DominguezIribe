import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from "./container/ItemListContainer";
import Item from './components/Item'

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"Descubrí el mundo Beaming"}/>
    <Item/>
    <div className="App">
    </div>
    </>
  );
}

export default App;