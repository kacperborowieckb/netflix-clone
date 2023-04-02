import '../global-styles/styles.scss';
import Slider from './Slider';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__desc">
        <img src="/images/film-heading.png" alt="film title" className="hero__film-title" />
        <p className="hero__film-desc">
          He's a genius scientist. His son is a flutist living in his dad's shadow. To save the
          family business, they'll have to work through their issues first.
        </p>
        <div className="hero__buttons">
          <button className="hero__play-btn">
            <img src="/images/play-icon.svg" alt="" className="hero__play-icon" />
            <p>Play</p>
          </button>
          <button className="hero__info-btn">
            <img src="/images/info-icon.svg" alt="" className="hero__info-icon" />
            <p>More Info</p>
          </button>
        </div>
      </div>
      <div className="hero__age-restriction">13+</div>
      <Slider title="New Releases" arr={Array.from(Array(12).keys())} />
    </div>
  );
};

export default Hero;
