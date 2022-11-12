import React from "react";
import "./navbar.css";

const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop">
          Food Ordering Portal
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fas fa-shopping-cart"></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;