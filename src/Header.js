import React from "react";
import "./css/header.css";
import Search from "@material-ui/icons/Search";
function Header() {
  return (
    <div className="header">
      <img src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
      className="header_logo" />

      <div className="header_search">

          <input type="text" />
          <Search />
      </div>

      <div className="header_nav">



      </div>
    </div>
  );
}

export default Header;
