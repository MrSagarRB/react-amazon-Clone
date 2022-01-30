import React from "react";
import "./css/header.css";
import Search from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";

function Header({cart}) {
  return (
    <>
      <div className="header">
        <Link to="/"> 
        <img
          src="https://www.mabaya.com/wp-content/uploads/2019/10/amazon_PNG25.png"
          className="header_logo"
        />
        </Link>

        <div className="header_search">
          <input type="text" />
          <Search className="header_searchIcon" />
        </div>

        <div className="header_nav">
          <div className="header_option">
            <span className="header_optionOne"> Hello Sagar </span>
            <span className="header_optionTwo"> Sign In </span>
          </div>

          <div className="header_option">
            <span className="header_optionOne"> Return </span>
            <span className="header_optionTwo"> Order </span>
          </div>

          <div className="header_option">
            <span className="header_optionOne"> Your </span>
            <span className="header_optionTwo"> Prime </span>
          </div>
         
          <div className="header_optionBasket">
          <Link to="/cart"> 
            <ShoppingCartIcon />
            <span>{cart?.total_items} </span>
            </Link>
          </div>
         
        </div>
      </div>
      <div className="header_bottom">
        <ul>
          <li>All</li>
          <li>Mobile</li>
          <li>Category</li>
          <li>Computer</li>
          <li>Cloth</li>
          <li> Shoes</li>
          <li> Electronics</li>

          {/* <li><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/MAI/Sweepstakes/Nov/MEDH_SWM_1500x200.jpg" /> </li> */}
        </ul>
      </div>
    </>
  );
}

export default Header;
