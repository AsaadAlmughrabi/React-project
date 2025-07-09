import icons from '../../icons';
import './Footer.css';

function handleNewsletterSubmit(e) {
  e.preventDefault();
}

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
     
      <div className="footer__top">
        <div className="footer__social">
          <a href="https://instagram.com" aria-label="Instagram">
            <img src={icons['instagram-1'] } alt="instagram" />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn">
            <img src={icons.link} alt="Linked In" />
          </a>
          <a href="https://twitter.com" aria-label="Twitter">

              <img src={icons.twitter} alt="Twitter" />

          </a>
        </div>

        <div className="footer__columns">
          <div className="footer__col brand">
            <h2 className="brand__name">reverifi</h2>
          </div>
          <div className="footer__col">
            <h3>Company</h3>
            <ul>
              <li><a href="/faqs">FAQs</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/how-we-work">How we work</a></li>
              <li><a href="/closed-deals">Closed Deals</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h3>Contact</h3>
            <ul>
              <li><a href="mailto:support@reverifi.com">support@reverifi.com</a></li>
              <li><a href="mailto:sales@reverifi.com">sales@reverifi.com</a></li>
            </ul>
          </div>
          <div className="footer__col newsletter">
            <h3>Subscribe to our newsletter</h3>
            <form
              className="newsletter__form"
              onSubmit={handleNewsletterSubmit}
            >
              <input type="email" required placeholder="Enter email address" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        Copyright © {year} reverifi. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;