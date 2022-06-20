import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <div className="app">
      <NavBar/>
      <ItemListContainer greeting ='Hola que tal, estoy aprendiendo React'/>
  
    </div>
  );
}

export default App;
