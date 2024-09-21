import React, { useContext } from "react";
import Layout from "../../Components/Layout/Layout";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import { Link } from 'react-router-dom';
import CurrencyFormater from'../../Components/CurrencyFormater/CurrencyFormater'
import classes from'./cart.module.css'

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount,item)=>{
   return item.price + amount
  },0)

  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.cart__container}>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr />
          {basket?.length === 0 ? (
            <p>Oops! No items in your cart.</p>
          ) : (
            basket.map((item, i) => (
              <ProductCard
                key={i}
                product={item}
                renderDesc={true}
                flex={true}
                renderAdd={false}
              />
            ))
          )}
        </div>
        {basket?.length !==0 && (
          <div className={classes.subtotal}>
            <div>
              <p>subtotal ({basket?.length} items)</p>
              <CurrencyFormater amount={total} />

            </div>
            <span>
              <input type="checkbox"/>
              <small>this order contains agift </small>
            </span>
            <Link to ="/Payments"> continue to checkout </Link>
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Cart;
