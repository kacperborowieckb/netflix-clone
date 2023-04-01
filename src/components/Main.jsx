import '../global-styles/styles.scss';
import Slider from './Slider';

const Main = () => {
  return (
    <div className="main">
      <Slider title="Continue Watching" />
      <Slider title="Trending Now" />
    </div>
  );
};

export default Main;
