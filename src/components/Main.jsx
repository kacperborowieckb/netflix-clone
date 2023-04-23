import '../global-styles/styles.scss';
import Slider from './Slider';

const Main = () => {
  const shuffleArray = (arr) => {
    let array = [...arr];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <section className="main">
      <Slider title="Continue Watching" arr={shuffleArray(Array.from(Array(12).keys()))} />
      <Slider title="Trending Now" arr={shuffleArray(Array.from(Array(12).keys()))} />
    </section>
  );
};

export default Main;
