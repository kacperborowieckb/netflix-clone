import '../global-styles/styles.scss';
import Dropdown from './Dropdown';
import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [checkTimeout, setCheckTimeout] = useState();

  const navbar = useRef();

  useEffect(() => {
    window.addEventListener('scroll', checkNavbar);

    return () => {
      window.removeEventListener('scroll', checkNavbar);
    };
  }, []);

  const checkNavbar = () => {
    if (window.scrollY > 80) {
      navbar.current.style.backgroundColor = 'hsl(0, 0%, 12%)';
    } else {
      navbar.current.style.backgroundColor = 'transparent';
    }
  };

  const openDropdown = () => {
    clearTimeout(checkTimeout);
    navbar.current.querySelector('.navbar__dropdown-arrow').style.transform = 'rotate(180deg)';
    setShowDropdown(true);
  };

  const closeDropdown = () => {
    setCheckTimeout(
      setTimeout(() => {
        if (showDropdown === true) {
          navbar.current.querySelector('.navbar__dropdown-arrow').style.transform = 'rotate(0deg)';
          setShowDropdown(false);
        }
      }, 250)
    );
  };

  return (
    <div className="navbar" ref={navbar}>
      <img src="/src/assets/netflix-logo.png" alt="netflix logo" className="navbar__logo" />
      <ul className="navbar__list">
        <li className="navbar__list-item">
          <a href="#">Home</a>
        </li>
        <li className="navbar__list-item">
          <a href="#">TV Shows</a>
        </li>
        <li className="navbar__list-item">
          <a href="#">Movies</a>
        </li>
        <li className="navbar__list-item">
          <a href="#">New &amp; Popular</a>
        </li>
        <li className="navbar__list-item">
          <a href="#">My List</a>
        </li>
        <li className="navbar__list-item">
          <a href="#">Browse by Languages</a>
        </li>
      </ul>
      <div className="navbar__user-section">
        <img className="navbar__search-icon" src="/src/assets/search-icon.svg" alt="" />
        <img
          className="navbar__notifications-icon"
          src="/src/assets/notification-icon.svg"
          alt=""
        />
        <div className="navbar__profile" onMouseOver={openDropdown} onMouseLeave={closeDropdown}>
          <img
            className="navbar__profile-picture"
            src="/src/assets/profile-picture.jpg"
            alt="profile picture"
          />
          <img src="/src/assets/dropdown-arrow.svg" alt="" className="navbar__dropdown-arrow" />
          {showDropdown ? <Dropdown /> : <></>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
