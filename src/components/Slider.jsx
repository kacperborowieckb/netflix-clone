import '../global-styles/styles.scss';

const Slider = ({ title }) => {
  const slideAnimate = (direction) => {
    const slider = document.querySelector('.slider__items-container');
    let index = getComputedStyle(slider).getPropertyValue('--index');
    index = direction === 'left' ? Number(index) - 1 : Number(index) + 1;
    slider.style.transform = `translateX(calc(-100% * ${index})`;
    slider.style.setProperty('--index', index);
  };

  return (
    <div className="slider">
      <h3 className="slider__heading">{title}</h3>
      <div className="slider__container">
        <button
          className="slider__left"
          onClick={() => {
            slideAnimate('left');
          }}
        >
          <img src="/src/assets/previous.svg" alt="" />
        </button>
        <div className="slider__items-container">
          {Array.from(Array(12).keys()).map((i) => {
            return (
              <div className="slider__item" key={i}>
                <img
                  src={'/src/assets/slider-img-' + i + '.jpg'}
                  alt="film img"
                  className="slider__img"
                />
              </div>
            );
          })}
        </div>

        <button
          className="slider__right"
          onClick={() => {
            slideAnimate('right');
          }}
        >
          <img src="/src/assets/next.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Slider;
