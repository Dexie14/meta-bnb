import classes from "./AdvCard.module.css";
// import card1 from "../../images/homecards/card1.svg";
// import stars from "../../images/stars.svg";


const AdvCard = ({img, img2, word1, word2, text1, text2}) => {
  return (
    <div className={classes.advCard}>
        <figure>
            <img  src={img} alt="card1"/>
        </figure>
        <div className={classes.word}>
            <p>{word1}</p>
            <h5>{word2}</h5>
        </div>
        <div className={classes.word}>
            <p>{text1}</p>
            <p>{text2}</p>
        </div>
        <figure>
            <img  src={img2} alt="stars"/>
        </figure>
    </div>
  )
}

export default AdvCard