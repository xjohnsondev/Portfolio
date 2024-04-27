import worldMap from "../images/world-map.png";
import headshot from "../images/headshot.jpg";
import './Heading.css';

const Heading = () => {
  return (
    <div className="heading">
        <div className="heading-textbox">
        <h1 className="heading-greet">HI, I'M</h1>
        <h1 className="heading-name">XAVIER</h1>
        <h1 className="heading-desc">Software Engineer</h1>
        </div>
      <img className="world-map" src={worldMap} alt="world"></img>
      <div className="triangle"></div>
      <img className="headshot" src={headshot} alt="headshot"></img>
    </div>
  );
};

export default Heading;
