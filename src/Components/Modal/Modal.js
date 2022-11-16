import React from 'react'
import classes from "./Modal.module.css"
import close from "../../images/close.svg";
import metamasklogo from "../../images/metamasklogo.svg";
import walletconnect from "../../images/walletconnect.svg";
import leftarrow from "../../images/leftarrow.svg";

const Modal = ({onClick}) => {
  return (
    <div className={classes.modal}>
        <div className={classes.wallet}>
                <h3>Connect Wallet</h3>
                <img src={close} onClick={onClick}alt="close"/>
        </div>
                <hr></hr>
        <div className={classes.prefer}>
            <p>Choose your preferred wallet:</p>
            <div className={classes.connect}>
                <img src={metamasklogo} alt= ""/>
                <img src={leftarrow} alt=""/>
            </div>
            <div className={classes.connectW}>
                <img src={walletconnect} alt= ""/>
                <img src={leftarrow} alt=""/>
            </div>
        </div>
        
    </div>
    
  )
}

export default Modal