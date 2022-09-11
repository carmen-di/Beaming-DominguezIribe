import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './container/ItemDetailContainer';
// import ItemListContainer from "./container/ItemListContainer";

function App() {
  return (
    <>
    <NavBar/>
    {/* <ItemListContainer greeting={"Descubrí el mundo Beaming"}/> */}
    <ItemDetailContainer/>
    </>
  );
}

export default App;