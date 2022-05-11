import logo from "../../images/logo.svg";
import menu from "../../images/icon-menu.svg";
import { FaAngleDown } from "react-icons/fa";
import { navBarVariants } from "./Animations";
import { motion } from "framer-motion";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <motion.header
      className="header flex"
      initial="hidden"
      animate="visible"
      variants={navBarVariants}
    >
      <img src={logo} alt="logo" className="logo" />
      <nav className="nav">
        <ul className="nav__list flex">
          <li className="nav__list-item flex">
            <a href="#"> Features</a> <FaAngleDown />
          </li>
          <li className="nav__list-item flex">
            <a href="#"> Company</a> <FaAngleDown />
          </li>
          <li className="nav__list-item">
            <a href="#"> Careers</a>
          </li>
          <li className="nav__list-item">
            <a href="#"> About</a>
          </li>
          <li className="nav__list-item">
            <a href="#">Login</a>
          </li>
          <li className="nav__list-item">
            <a href="#">
              <button type="button" className="nav__list-btn pointer">
                Register
              </button>
            </a>
          </li>
        </ul>
      </nav>
      <div className="burger__menu">
        <img src={menu} alt="" />
      </div>
    </motion.header>
  );
};

export default NavBar;
