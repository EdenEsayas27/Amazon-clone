import React from 'react'
import {Link} from 'react-router-dom'
import classes from './signup.module.css'
function Auth() {
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
              <label for="email">Email</label>
              <input type="email" id="email" />
            </div>
            <div>
              <label for="password">password</label>
              <input type="password" id="password" />
            </div>
            <button className={classes.login__signInButton}>
              Sign In
            </button>
          </form>
          {/* agreement */}
          <p>
            By sigining-in you agree to the AMAZON CLONE  conditions of use &
            sale.please  see our privacy notice. our cookies notice and our 
            Interst_Based Ads Notice.
          </p>
          {/* create account button */}
          <button className={classes.login__registerButton}>Create  your Amazon Account</button>
        </div>
      </section>
    </>
  );
}

export default Auth
