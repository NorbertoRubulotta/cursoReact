import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import Cart from './containers/Cart';
import ShopProvider from './context/ShopContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {



  return (
    <ShopProvider>
      <BrowserRouter>
        <div className="">
          <NavBar />
          <ToastContainer
            position="top-right"
            autoClose={2500}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Routes>
            <Route path="/" element={<ItemListContainer />}></Route>
            <Route path='/category/:category' element={<ItemListContainer />}></Route>
            <Route path='/detail/:productId' element={<ItemDetailContainer />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='*' element={<NotFound />}> </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </ShopProvider>
  );
}

export default App;