import '../global-styles/styles.scss';
import Dropdown from './Dropdown';
import { useState } from 'react';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [checkTimeout, setCheckTimeout] = useState();

  const openDropdown = () => {
    clearTimeout(checkTimeout);
    setShowDropdown(true);
  };

  const closeDropdown = () => {
    setCheckTimeout(
      setTimeout(() => {
        if (showDropdown === true) {
          setShowDropdown(false);
        }
      }, 250)
    );
  };

  return (
    <div className="navbar">
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
