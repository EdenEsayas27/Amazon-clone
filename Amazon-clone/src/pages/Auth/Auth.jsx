import React, { useState , useContext } from 'react'
import {Link} from 'react-router-dom'
import classes from './signup.module.css'
import { auth } from '../../Components/utility/firebase';
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth"
import { DataContext } from '../../Components/DataProvider/DataProvider';
import { Type } from '../../Components/utility/action.type';


function Auth() {
  const [email, setEmail] = useState("");
  const[password,setPassword] = useState("");
  const[error,setError]=useState("");
  const[{user},dispatch]=useContext(DataContext);
  console.log(user);

   const authHandler = async(e) =>{
    e.preventDefault();
    // console.log(e.target.name);
    if(e.target.name=="signIn"){
      //firebase authentication
      signInWithEmailAndPassword(auth,email,password).then((userInfo)=>{
        console.log(userInfo);
        dispatch(
          {
            type:Type.SET_USER,
            user:userInfo.user
          }
        )
      }).catch((err)=>{
        console.log(err);
      })

    }
  else{
     createUserWithEmailAndPassword(auth,email,password).then((userInfo)=>{
      console.log(userInfo);
     }).catch((err)=>{
      console.log(err);
     })
  }


   }
  // console.log(password,email);
  return (
    <>
      <section className={classes.login}>
        {/* logo */}
        <Link>
          <img
            src="https://logos-world.net/wp-content/uploads/2020/06/Amazon-Logo-500x281.png"
            alt="amazon logo"
          />
        </Link>
        {/* form */}
        <div className={classes.login__container}>
          <h1>Sign In</h1>
          <form action="">
            <div>
              <label htmlFor="email">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
              />
            </div>
            <div>
              <label htmlFor="password">password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
              />
            </div>
            <button type="submit" name="signIn"onClick={authHandler} className={classes.login__signInButton}>Sign In</button>
          </form>
          {/* agreement */}
          <p>
            By sigining-in you agree to the AMAZON CLONE conditions of use &
            sale.please see our privacy notice. our cookies notice and our
            Interst_Based Ads Notice.
          </p>
          {/* create account button */}
          <button type="submit" name="signUp" onClick={authHandler}  className={classes.login__registerButton}>
            Create your Amazon Account
          </button>
        </div>
      </section>
    </>
  );
}

export default Auth
