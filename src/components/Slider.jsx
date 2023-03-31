import '../global-styles/styles.scss';

const Slider = ({ title }) => {
  const slideAnimate = (direction) => {
    const slider = document.querySelector('.slider__items-container');

    copyNode(slider).then(() => {
      slider.style.transform = direction === 'right' ? 'translateX(-100%)' : 'translateX(100%)';
      slider.style.setProperty('--index', index);
    });
  };

  const copyNode = async (slider) => {
    let items = getComputedStyle(document.querySelector('.slider')).getPropertyValue(
      '--current-items'
    );
    let clonedSlider = slider.cloneNode(true);

    let childs = [...clonedSlider.children];

    for (let i = 0; i < items; i++) {
      slider.appendChild(childs[i]);
    }
  };

  const deleteChilds = (e) => {
    let items = getComputedStyle(document.querySelector('.slider')).getPropertyValue(
      '--current-items'
    );

    for (let i = 0; i < items; i++) {
      e.target.firstChild.remove();
    }
    e.target.style.transition = 'none';
    e.target.style.transform = `translateX(0)`;
    setTimeout(() => {
      e.target.style.transition = 'all 1s';
    });
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
        <div className="slider__items-container" onTransitionEnd={deleteChilds}>
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
