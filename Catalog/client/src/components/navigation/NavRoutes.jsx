import React, {useState} from 'react'
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'
import OrderConfirmation from '../pages/OrderConfirmation';
import Footer from '../elements/footer/Footer';

const NavRoutes = () => {  

  const [isOpen, setIsOpen] = useState(false)
  const [products, setProducts] = useState([])
  const pathname = useLocation().pathname
  const navigate = useNavigate();

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
    
    <Navbar toggle={toggle} pathname={pathname} navigate={navigate}/>
    <Sidebar isOpen={isOpen} toggle={toggle} pathname={pathname}/>
    <Routes>
      <Route path="/catalog" exact element={<Catalog products={products} setProducts={setProducts}/>} />
      <Route path="/" exact element={<Home navigate={navigate}/>} />
      <Route path="/cart" exact element={<Cart products={products}/>}/>
      <Route path="/product/:id" exact element={<Product products={products}/>} />
      <Route path="/order/success" exact element={<OrderConfirmation navigate={navigate}/>} />
    </Routes>
    {pathname === '/catalog' || pathname === '/' ? <Footer/> : null}
    </>
  )
}

export default NavRoutes
