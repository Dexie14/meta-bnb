import Header from "../../Components/Header/Header";
import AdvCard from "../../Components/AdvCard/AdvCard";
import classes from "./Home.module.css";
import Hero_image from "../../images/Hero_image.svg";
import MBToken from "../../images/MBToken.svg";
import metaNFT from "../../images/metaNFT.svg";
import metamask from "../../images/metamask.svg";
import opensea from "../../images/opensea.svg";
import { cards } from "../../Constants/index";
import Footer from "../../Components/Footer/Footer";

const Home = () => {

  

  return (
    <div className={classes.Home}>
      <Header 
        
      />

      {/* Hero section */}
      <div className={classes.Hero}>
        <div className={classes.herotext}>
          <h2>
            Rent a <span>Place</span> away from <span>Home</span> in the
            <span>Metaverse</span>
          </h2>
          <p>
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <div className={classes.inputtag}>
            <input
              type="text"
              placeholder="Search for location"
              id="Heroinput"
            />
            <button>Search</button>
          </div>
        </div>
        <figure>
          <img src={Hero_image} alt="Hero_image" />
        </figure>
      </div>

      {/* Logo rows */}

      <div className={classes.logobackground}>
        <figure>
          <img src={MBToken} alt="MBToken" />
          <img src={metamask} alt="MBToken" />
          <img src={opensea} alt="MBToken" />
        </figure>
      </div>

      {/* adventure section */}

      <section className={classes.adventure} id="community"> 
        <h2>Inspiration for your next adventure</h2>
        <div className={classes.adventureCard}>
          {cards.map((item) => (
            <AdvCard
              key={item.id}
              img={item.image}
              img2={item.image2}
              word1={item.word1}
              word2={item.word2}
              text1={item.text1}
              text2={item.text2}
            />
          ))}
        </div>
      </section>

      {/* NFts section */}

      <section className={classes.nft} id="NFT">
        <div  className={classes.NFts}>
        <div className={classes.NFTtext}>
          <h2>Metabnb NFTs</h2>
          <p>
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>
            <button>Learn more</button>
        </div>
        <figure>
          <img src={metaNFT} alt="metaNFT" />
        </figure>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
