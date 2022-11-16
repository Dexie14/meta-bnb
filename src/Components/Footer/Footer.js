import classes from "./Footer.module.css";
import metalogoWhite from "../../images/metalogoWhite.svg";
import facebook from "../../images/facebook.svg";
import insta from "../../images/insta.svg";
import copyright from "../../images/copyright.svg";
import twitter from "../../images/twitter.svg";

const Footer = () => {
  return (
    <div className={classes.Footer}>
      <footer>
        <div className={classes.meta}>
          <div id={classes.metalogo}>
            <img src={metalogoWhite} alt="metalogoWhite" />
          </div>
          <div className={classes.footlogo}>
            <img src={facebook} alt="facebook" />
            <img src={insta} alt="facebook" />
            <img src={twitter} alt="facebook" />
          </div>
        </div>
        <div className={classes.foot}>
          <h4>Community</h4>
          <p>NFT</p>
          <p>Tokens</p>
          <p>Landlords</p>
          <p>Discord</p>
        </div>
        <div className={classes.foot}>
          <h4>Places</h4>
          <p>Castle</p>
          <p>Farms </p>
          <p>Beach</p>
          <p>Learn more</p>
        </div>
        <div className={classes.foot}>
          <h4>About us</h4>
          <p>Road map</p>
          <p>Creators</p>
          <p>Career</p>
          <p>Contact us</p>
        </div>
      </footer>
      <div className={classes.footend}>
        <img src={copyright} alt="copyright"/>
        <p>2022 Metabnb</p>
      </div>
    </div>
  );
};

export default Footer;
