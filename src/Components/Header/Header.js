import classes from "./Header.module.css";
import metaLogo from "../../images/metaLogo.webp";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import menu from "../../images/menu.png";
import Modal from "../Modal/Modal";



const Header = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => setModalIsOpen(false);

    const showSideBar = () => setIsOpen(!isOpen);


  return (
    <div className={classes.Header}>
      <header>

        <div className={classes.logo}>
          <img src={metaLogo} alt="metaLogo" />
        </div>

        <div className={classes.ham} onClick={showSideBar}>
        <img src={menu} alt="menu" />
        </div>

        {modalIsOpen && ( < Modal onClick={handleClick} /> )}
        
        {modalIsOpen && ( <div className={classes.overlay}>
          </div>
           )}

        <menu className= {isOpen ? classes.sidemenu : classes.menu}>

        {isOpen && (
            <FaTimes
              className={`${classes.bar} ${classes.hideBar}`}
              onClick={showSideBar}
            />
          )}

          <nav className={classes.nav}>
            <NavLink
              to="/"
              className={(navData) =>
                navData.isActive ? `${classes.active}` : `${classes.navItems}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/place"
              className={(navData) =>
                navData.isActive ? `${classes.active}` : `${classes.navItems}`
              }
            >
              Place to stay
            </NavLink>
            <NavLink
              to="/#NFT" 
              className={(navData) =>
                navData.isActive ? `${classes.active}` : `${classes.navItems}`
              }
            >
              NFTs
            </NavLink>
            <NavLink
              to="#community"
              className={(navData) =>
                navData.isActive ? `${classes.active}` : `${classes.navItems}`
              }
            >
              Community
            </NavLink>
          </nav>
          <div className={classes.button} onClick={showSideBar}>
            <button onClick={()=> setModalIsOpen(true)}>Connect Wallet</button>
          </div>
        </menu>
      </header>
    </div>
  );
};

export default Header;
