import './App.css'
import NavBar from './components/NavBar';
import ItemListContainer from "./container/ItemListContainer";

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"Descubrí el mundo Beaming"}/>
    <div className="App">
    </div>
    </>
  );
}

export default App;
