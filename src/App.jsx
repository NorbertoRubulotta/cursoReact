import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
/* import { BrowserRouter, Routes, Route } from 'react-router-dom'; */

function App() {

  
  return (
    <browserRouter>
  
      <NavBar/>
     
      <ItemListContainer greeting ='Hola que tal, estoy aprendiendo React'/>
      
  
    </browserRouter>
  );
}

export default App;
 /* <Routes>
        <Route path="/" element={<ItemListContainer/>}></Route>
      </Routes> */