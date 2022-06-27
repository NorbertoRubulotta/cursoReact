import './App.css';
import ItemCount from './components/ItemCount';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  const handleAdd = (count) => {
    alert(`Agregaste ${count} productos`);
  };
  
  return (
    <div className="app">
      <NavBar/>
      <ItemListContainer greeting ='Hola que tal, estoy aprendiendo React'/>
  <ItemCount handleAdd={handleAdd} />
    </div>
  );
}

export default App;
