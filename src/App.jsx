import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';
/* import { BrowserRouter, Routes, Route } from 'react-router-dom'; */

function App() {

  
  return (
    <>
    
  <NavBar/>
  <ItemDetailContainer/> 

  </>
  
  );
}

export default App;
 /* <Routes>
        <Route path="/" element={<ItemListContainer/>}></Route>
      </Routes> */
       /* <ItemListContainer greeting ='Hola que tal, estoy aprendiendo React'/>  */
         /*   <browserRouter>
    </browserRouter> */