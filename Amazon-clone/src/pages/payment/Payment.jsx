import React, { useContext, useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import classes from './payment.module.css'
import { DataContext } from '../../Components/DataProvider/DataProvider'
import ProductCard from '../../Components/Product/ProductCard'
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import CurrencyFormater from '../../Components/CurrencyFormater/CurrencyFormater'
import { axiosInstance } from '../../Api/axios'
import { ClipLoader } from "react-spinners";
import { db } from '../../Components/utility/firebase'
import { useNavigate } from 'react-router-dom'
function Payment() {
  const [{ user, basket }] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);
  const [cardError, setCardError] = useState(null);
  const [processing, setProcessing]= useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const navigate =useNavigate();
  const handelChange = (e) => {
    //console.log(e);
    e?.error?.message ? setCardError(e?.error?.message) : setCardError("");
  };
  const handlePayment = async(e) => {
    e.preventDefault();
    try{
      setProcessing(true);
      //1 backend ||function --> contact to get the client secret
      const response = await axiosInstance({
        method: "POST",
        url: `/payment/create?total=${total * 100}`,
      });
      console.log(response.data);
      const clientSecret = response.data?.clientSecret;
      //2 client side (react side confirmiation)
      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
      //console.log(paymentIntent);//confirmation.paymentIntent
      //3 after  the confirmation -->order firestore database save,clear basket
      await db.collection("users").doc(user.uid).collection("orders").doc(paymentIntent.id)
      .set({
        basket:basket,
        amount:paymentIntent.amount,
        created:paymentIntent.created

      });
      setProcessing(false);
      navigate("/orders",{state:{msg:"you have placed new order"}})
    }catch(error){
         console.log(error);
         setProcessing(false);
    }
  };

  return (
    <Layout>
      {/* header */}
      <div className={classes.payment__header}>
        checkout ({totalItem}) items
      </div>
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
            {basket?.map((item,i) => (
              <ProductCard key={i} product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />
        {/* card from */}
        <div className={classes.flex}>
          <h3>payment methods</h3>
          <div className={classes.payment__card__container}>
            <div className={classes.payment__details}>
              <form onSubmit={handlePayment}>
                {/* error */}
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                {/* card element */}
                <CardElement onChange={handelChange} />
                {/* price */}
                <div className={classes.payment__price}>
                  <div>
                    <span style={{ display: "flex", gap: "10px" }}>
                      Total Order | <CurrencyFormater amount={total} />
                    </span>
                  </div>
                  <button type='submit'>{processing?(
                    <div className={classes.loading}>
                    <ClipLoader color="gray" size={12}/> 
                    <p>please wait...</p>  </div>):"Pay Now"}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Payment
