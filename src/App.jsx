
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <>
    <Navbar/>
    <ItemListContainer greetings="Mensaje de bienvenida, se estan cargando los productos..."/>    
    </>
  )
}

export default App
