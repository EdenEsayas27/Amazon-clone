import React, { useContext } from "react";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import classes from "./header.module.css"
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
function Header() {
  const[{basket},dispatch]=useContext(DataContext)
  return (
    <>
    <section className={classes.fixed__header}>
      <section>
        <section>
          <div className={classes.header__container}>
            <div className={classes.logo__container}>
              <Link to="/">
                <img
                  src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                  alt="amazon logo"
                />
              </Link>
              <div className={classes.delivery}>
                <span>
                  <SlLocationPin />
                </span>
                <div>
                  <p>Delivered to </p>
                  <span>Ethiopia</span>
                </div>
              </div>
            </div>
            <div className={classes.search}>
              <select name="" id="">
                <option value="">All</option>
              </select>
              <input type="text" />
              <BsSearch size={25} />
            </div>
            <div className={classes.order__container}>
              <Link to="" className={classes.language}>
                <img
                  src="https://pngimg.com/uploads/flags/flags_PNG14592.png"
                  alt="flag"
                />
                <select name="" id="">
                  <option value="">EN</option>
                </select>
              </Link>
              <Link to="/auth">
                <p>Sign In</p>
                <span>Account & Lists</span>
              </Link>
              <Link to="/orders">
                <p>returns</p>
                <span>&orders</span>
              </Link>
              <Link to="/cart" className={classes.cart}>
                <BiCart size={35} />
                <span>{basket.length}</span>
              </Link>
            </div>
          </div>
        </section>
      </section>
      <LowerHeader />
      </section>
    </>
  );
}

export default Header;
