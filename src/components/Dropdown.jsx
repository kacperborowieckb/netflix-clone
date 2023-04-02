import '../global-styles/styles.scss';

const Dropdown = () => {
  return (
    <div className="dropdown">
      <div className="dropdown__triangle"></div>
      <ul className="dropdown__list">
        <li className="dropdown__list-item">
          <a href="#">
            <img
              src="/images/lion.jpg"
              alt="profile picture"
              className="dropdown__profile-picture"
            />
            <p className="dropdown__username">John</p>
          </a>
        </li>
        <li className="dropdown__list-item">
          <a href="#">
            <img
              src="/images/beaver.jpg"
              alt="profile picture"
              className="dropdown__profile-picture"
            />
            <p className="dropdown__username">Johnny</p>
          </a>
        </li>
      </ul>
      <div className="dropdown__log-out">
        <a href="#">Sign out of Netflix</a>
      </div>
    </div>
  );
};

export default Dropdown;
