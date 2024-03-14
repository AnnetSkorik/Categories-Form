import React from "react";
import styles from "./Header.module.css";
import logoImg from "./HeaderImg/logo.svg";
import iconHeart from "./HeaderImg/heart.svg";
import iconBag from "./HeaderImg/icons.png";
import BtnDarkMode from '../Header/btnDarkMode/BtnDarkMode'
// import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles}>

      <div className="discount">
            <button1>1 day discount!</button1>
          </div>
          <div className="logo">
            {/* <img src={logoImg} alt="Logo" /> */}
          </div>
          {/* <BtnDarkMode /> */}
      <nav className="header__nav">
        <ul>
          {/* <div className="logo">
            <img src={logoImg} alt="Logo" />
          </div> */}
           {/* <BtnDarkMode /> */}
          <li>
            <a href="#!">Main Page</a>
          </li>
          <li>
            <a href="#!">Categories</a>
          </li>
          <li>
            <a href="#!">All products</a>
          </li>
          <li>
            <a href="#!"></a>All sales
          </li>
          <div className="header_icon">
            <img src={iconHeart} alt="heart" />
            <img src={iconBag} alt="bag" />
          </div>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
