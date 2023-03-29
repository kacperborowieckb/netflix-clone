import '../global-styles/styles.scss';

const Navbar = () => {
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
        <img
          className="navbar__search-icon"
          src="/src/assets/search-icon.svg"
          alt=""
          width={'32px'}
        />
        <img
          className="navbar__notifications-icon"
          src="/src/assets/notification-icon.svg"
          width={'32px'}
          alt=""
        />
        <img
          className="navbar__profile-picture"
          src="/src/assets/profile-picture.jpg"
          alt="profile picture"
          width={'48px'}
        />
      </div>
    </div>
  );
};

export default Navbar;
