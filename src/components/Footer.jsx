import '../global-styles/styles.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__social-media">
        <a href="#">
          <img src="/src/assets/facebook.svg" alt="" className="footer__social-media-icon" />
        </a>
        <a href="#">
          <img src="/src/assets/instagram.svg" alt="" className="footer__social-media-icon" />
        </a>
        <a href="#">
          <img src="/src/assets/twitter.svg" alt="" className="footer__social-media-icon" />
        </a>
        <a href="#">
          <img src="/src/assets/youtube.svg" alt="" className="footer__social-media-icon" />
        </a>
      </div>
      <ul className="footer__list">
        <li className="footer__list-item">
          <a href="#">Audio Description</a>
        </li>
        <li className="footer__list-item">
          <a href="#">Help Center</a>
        </li>
        <li className="footer__list-item">
          <a href="#">Gift Cards</a>
        </li>
        <li className="footer__list-item">
          <a href="#">Media Center</a>
        </li>
        <li className="footer__list-item">
          <a href="#">Investor Relations</a>
        </li>
        <li className="footer__list-item">
          <a href="#">Jobs</a>
        </li>
        <li className="footer__list-item">
          <a href="#">Terms of Use</a>
        </li>
        <li className="footer__list-item">
          <a href="#">Privacy</a>
        </li>
        <li className="footer__list-item">
          <a href="#">Legal Notices</a>
        </li>
        <li className="footer__list-item">
          <a href="#">Cookie Preferences</a>
        </li>
        <li className="footer__list-item">
          <a href="#">Corporate Information</a>
        </li>
        <li className="footer__list-item">
          <a href="#">Contact Us</a>
        </li>
      </ul>
      <a href="#" className="footer__service-code">
        Service Code
      </a>
      <p className="footer__company">&#169; 1997-2023 Netflix, Inc.</p>
    </div>
  );
};

export default Footer;
