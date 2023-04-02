import '../global-styles/styles.scss';
import { useRef, useState } from 'react';

const Slider = ({ title, arr }) => {
  const sliderContainer = useRef();
  const [firstSlide, setFirstSlide] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);

  const slideAnimate = (direction) => {
    let slider = sliderContainer.current.querySelector('.slider__items-container');
    let items = getComputedStyle(sliderContainer.current).getPropertyValue('--current-items');
    let clonedSlider = slider.cloneNode(true);
    let childs = [...clonedSlider.children];
    setIsDisabled(true);
    slider.setAttribute('data-direction', direction);

    if (direction === 'right') {
      for (let i = 0; i < items; i++) {
        slider.appendChild(childs[i]);
      }
      if (!firstSlide) {
        slider.style.transform = `translateX(calc(-100% / ${items} - 100%))`;
      } else {
        slider.style.transform = `translateX(-100%)`;
      }
    } else {
      for (let i = 0; i < items; i++) {
        slider.prepend(childs[childs.length - i - 1]);
      }
      slider.style.transition = 'none';
      if (firstSlide) {
        slider.style.transform = `translateX(-100%)`;
      } else {
        slider.style.transform = `translateX(calc(-100% / ${items} - 100%))`;
      }

      setTimeout(() => {
        slider.style.transition = 'all 1s';
        if (firstSlide) {
          slider.style.transform = `translateX(0)`;
        } else {
          slider.style.transform = `translateX(calc(-100% / ${items}))`;
        }
      });
    }
  };

  const deleteChilds = (e) => {
    let items = getComputedStyle(sliderContainer.current).getPropertyValue('--current-items');

    let direction = e.target.dataset.direction;
    setIsDisabled(false);

    if (direction === 'right') {
      for (let i = 0; i < items; i++) {
        e.target.firstChild.remove();
      }
      if (firstSlide) {
        e.target.prepend(e.target.lastChild);
        setFirstSlide(false);
      }
      e.target.style.transition = 'none';
      e.target.style.transform = `translateX(calc(-100% / ${items}))`;
      setTimeout(() => {
        e.target.style.transition = 'all 1s';
      });
    } else {
      for (let i = items; i > 0; i--) {
        e.target.lastChild.remove();
      }
      if (firstSlide) {
        setFirstSlide(false);
        e.target.prepend(e.target.lastChild);
        e.target.style.transition = 'none';
        e.target.style.transform = `translateX(calc(-100% / ${items}))`;
        setTimeout(() => {
          e.target.style.transition = 'all 1s';
        });
      }
    }
  };

  return (
    <div className="slider" ref={sliderContainer}>
      <h3 className="slider__heading">{title}</h3>
      <div className="slider__container">
        <button
          disabled={isDisabled}
          className="slider__left"
          onClick={() => {
            slideAnimate('left');
          }}
        >
          <img src="/images/previous.svg" alt="" />
        </button>
        <div className="slider__items-container" onTransitionEnd={deleteChilds}>
          {arr.map((i) => {
            return (
              <div className="slider__item" key={i}>
                <a href="#">
                  <img
                    src={'/images/slider-img-' + i + '.jpg'}
                    alt="film img"
                    className="slider__img"
                  />
                </a>
              </div>
            );
          })}
        </div>

        <button
          disabled={isDisabled}
          className="slider__right"
          onClick={() => {
            slideAnimate('right');
          }}
        >
          <img src="/images/next.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Slider;
