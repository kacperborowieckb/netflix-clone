import '../global-styles/styles.scss';
import Slider from './Slider';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__desc">
        <img src="/src/assets/film-heading.png" alt="film title" className="hero__film-title" />
        <p className="hero__film-desc">
          He's a genius scientist. His son is a flutist living in his dad's shadow. To save the
          family business, they'll have to work through their issues first.
        </p>
        <div className="hero__buttons">
          <button className="hero__play-btn">
            <img src="/src/assets/play-icon.svg" alt="" className="hero__play-icon" />
            <p>Play</p>
          </button>
          <button className="hero__info-btn">
            <img src="/src/assets/info-icon.svg" alt="" className="hero__info-icon" />
            <p>More Info</p>
          </button>
        </div>
        <div className="hero__age-restriction">13+</div>
      </div>
      <Slider title="New Releases" />
    </div>
  );
};

export default Hero;
