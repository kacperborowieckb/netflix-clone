import '../global-styles/styles.scss';
import Dropdown from './Dropdown';
import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [checkDropDownTimeout, setCheckDropDownTimeout] = useState();
  const [checkListTimeout, setCheckListTimeout] = useState();
  const [showDropdown, setShowDropdown] = useState(false);

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

  const openList = () => {
    clearTimeout(checkListTimeout);
    navbar.current.querySelector('.navbar__list').style.display = 'flex';
  };

  const closeList = () => {
    setCheckListTimeout(
      setTimeout(() => {
        navbar.current.querySelector('.navbar__list').style.display = '';
      }, 250)
    );
  };

  const openDropdown = () => {
    clearTimeout(checkDropDownTimeout);
    navbar.current.querySelector('.navbar__dropdown-arrow').style.transform = 'rotate(180deg)';
    setShowDropdown(true);
  };

  const closeDropdown = () => {
    setCheckDropDownTimeout(
      setTimeout(() => {
        navbar.current.querySelector('.navbar__dropdown-arrow').style.transform = 'rotate(0deg)';
        setShowDropdown(false);
      }, 250)
    );
  };

  return (
    <header className="navbar" ref={navbar}>
      <a href="#">
        <img src="/images/netflix-logo.png" alt="netflix logo" className="navbar__logo" />
      </a>
      <nav className="navbar__list-container">
        <a
          className="navbar__responsive-nav"
          href="#"
          onMouseOver={openList}
          onMouseLeave={closeList}
        >
          Browse <div className="navbar__responsive-nav-arrow"></div>
        </a>
        <ul
          className="navbar__list"
          onMouseOver={window.innerWidth < 880 ? openList : undefined}
          onMouseLeave={window.innerWidth < 880 ? closeList : undefined}
        >
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
      </nav>
      <section className="navbar__user-section">
        <a href="#">
          <img className="navbar__search-icon" src="/images/search-icon.svg" alt="" />
        </a>
        <a href="#">
          <img className="navbar__notifications-icon" src="/images/notification-icon.svg" alt="" />
        </a>
        <div className="navbar__profile" onMouseOver={openDropdown} onMouseLeave={closeDropdown}>
          <a href="#">
            <img
              className="navbar__profile-picture"
              src="/images/profile-picture.jpg"
              alt="profile picture"
            />
          </a>
          <img src="/images/dropdown-arrow.svg" alt="" className="navbar__dropdown-arrow" />
          {showDropdown && <Dropdown />}
        </div>
      </section>
    </header>
  );
};

export default Navbar;
