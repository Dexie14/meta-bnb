import Header from "../../Components/Header/Header";
import { placecards } from "../../Constants/index";
import Footer from "../../Components/Footer/Footer";
import classes from "./Place.module.css";
import AdvCard from "../../Components/AdvCard/AdvCard";
import setting from "../../images/setting.svg";

const Place = () => {
  return (
    <div>
      <Header />

      <div className={classes.placelist}>

      <div className={classes.locationlist}>
        <p>Resturant</p>
        <p>Cottage</p>
        <p>Castle</p>
        <p>fantast city</p>
        <p>beach</p>
        <p>Carbins</p>
        <p>Off-grid</p>
        <p>Farm</p>
        <button>
          <span>Location</span>
          <img src={setting} alt="setting" />
        </button>
      </div>

      </div>

      <section className={classes.array}>
        <div className={classes.adventureCard}>
          {placecards.map((item) => (
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
      <Footer />
    </div>
  );
};

export default Place;
