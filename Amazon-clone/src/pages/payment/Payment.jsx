import React, { useContext, useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import classes from './payment.module.css'
import { DataContext } from '../../Components/DataProvider/DataProvider'
import ProductCard from '../../Components/Product/ProductCard'
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import CurrencyFormater from '../../Components/CurrencyFormater/CurrencyFormater'
function Payment() {
   const[{user,basket}]=useContext(DataContext);
    const totalItem = basket?.reduce((amount, item) => {
      return item.amount + amount;
    }, 0);
      const total = basket.reduce((amount, item) => {
        return item.price * item.amount + amount;
      }, 0);
    const[cardError,setCardError] = useState(null)
    const stripe = useStripe();
    const elements = useElements();
   const handelChange= (e)=>{
      console.log(e);
      e?.error?.message? setCardError(e?.error?.message):setCardError("")
    }
  return (
    <Layout>
      {/* header */}
      <div className={classes.payment__header}>checkout ({totalItem}) items</div>
      {/* payment method */}
      <section className={classes.payment}>
        {/* address */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
        </div>
        <div>{user?.email}</div>
        <div>123 React Lane</div>
        <div>ETH,AA</div>
        <hr />
        {/* product */}
        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {
              basket?.map((item)=><ProductCard product={item} flex={true}/>)
            }
          </div>
        </div>
        <hr />
        {/* card from */}
        <div className={classes.flex}> 
          <h3>payment methods</h3>
          <div className={classes.payment__card__container}>
            <div className={classes.payment__details}>
              <form action="">
                  {/* error */}
                   {cardError && <small style={{color:"red"}}>{cardError}</small>}
                   {/* card element */}
                    <CardElement onChange={handelChange}/>
                    {/* price */}
                    <div className={classes.payment__price}>
                      <div>
                        <span style={{display:"flex", gap:"10px"}} >
                          Total Order | <CurrencyFormater amount={total} />
                        </span>
                      </div>
                      <button>Pay Now</button>
                    </div>
                  </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Payment
