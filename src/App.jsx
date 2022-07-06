import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import NotFound from './components/NotFound';
import { TailSpin } from 'react-loader-spinner';

function App() {

  
  return (
    <BrowserRouter>
      <div className="">
        <NavBar/>
        <Routes>
        <Route path="/" element={<ItemListContainer/>}></Route>
        <Route path='/category/:category' element= {<ItemListContainer/>}></Route>
        <Route path='/detail/:productId' element= {<ItemDetailContainer/>}></Route>
        <Route path='*' element= {<NotFound/>}> </Route>
        </Routes>
      </div>
    </BrowserRouter>
  
  );
}

export default App;