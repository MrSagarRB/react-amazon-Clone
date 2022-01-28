import React from "react";
import "./css/header.css";
import Search from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Header() {
  return (
    <>
      <div className="header">
        <img
          src="https://www.mabaya.com/wp-content/uploads/2019/10/amazon_PNG25.png"
          className="header_logo"
        />

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
            <ShoppingCartIcon />
            <span>2</span>
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

          {/* <li><img src="https://gthinkstudio.files.wordpress.com/2016/10/add-stircellarsv-07-12.jpg" /> </li> */}
        </ul>
      </div>
    </>
  );
}

export default Header;
