import React from 'react'
import{BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Landing from './pages/Landing/Landing'
import SignIn from './pages/Auth/SignIn'
import Payment from './pages/payment/Payment'
import Order from './pages/order/Order'
import Cart from './pages/cart/Cart'


function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<SignIn />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing
