import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'
import ItemDetail from './components/ItemDetail/ItemDetail'
import Cart from './components/Cart/Cart'
import { ContextProvider } from './context/context'
import OrderForm from './components/OrderForm/OrderForm'

function App() {
  return (
    <ContextProvider>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<ItemListContainer />}/>
      <Route path='/categoria/:categoria' element={<ItemListContainer />}/>
      <Route path='/detalle/:id' element={<ItemDetail/>}/>
      <Route path='/carrito' element={<Cart/>}/>
      <Route path='/ordenes' element={<OrderForm/>}/>
      <Route path='*' element={<p>404 Not found</p>} />
    </Routes>
    </BrowserRouter>
    </ContextProvider>    
  )
}

export default App
