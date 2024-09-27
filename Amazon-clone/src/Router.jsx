import React from 'react'
import{BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Landing from './pages/Landing/Landing'
import Auth from './pages/Auth/Auth'
import Payment from './pages/payment/Payment'
import Order from './pages/order/Order'
import Cart from './pages/cart/Cart'
import Results from './pages/Results/Results'
import ProductDetail from './pages/productDetail/ProductDetail'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
const stripePromise = loadStripe(
  "pk_test_51Q2iEqKtL52B7yJxpjVhmgnYJOj3fcUMU8LToXBxn1J8Jdk68f59BJRqtDCdCwGOShhYqATZxufMwA8u4qtTvNSP00yeQGSM3P"
);


function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payments"
          element={
            <ProtectedRoute
              msg={"you must log in to pay"}
              redirect={"/payments"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute
              msg={"you must log in to access your  orders"}
              redirect={"/orders"}
            >
              <Order />
            </ProtectedRoute>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default Routing
