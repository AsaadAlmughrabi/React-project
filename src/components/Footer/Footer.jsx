import React from 'react';
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import linkedIn from '../../assets/linkf.svg'
import twitter from '../../assets/share-listing-twitter 1.svg'
import instagram from '../../assets/instagram 1.svg'
import './Footer.css';


function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* upper light-grey part */}
      <div className="footer__top">

        {/* social icons – centered on desktop, left on mobile */}
        <div className="footer__social">
          <a href="https://instagram.com" aria-label="Instagram">
            <img src={instagram} alt="instagram" />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn">
            <img src={linkedIn} alt="Linked In" />
          </a>
          <a href="https://twitter.com" aria-label="Twitter">
                <img src={twitter} alt="Twitter" />
          </a>
        </div>

        {/* main columns */}
        <div className="footer__columns">
          {/* brand */}
          <div className="footer__col brand">
            <h2 className="brand__name">reverifi</h2>
          </div>

          {/* company */}
          <div className="footer__col">
            <h3>Company</h3>
            <ul>
              <li><a href="/faqs">FAQs</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/how-we-work">How we work</a></li>
              <li><a href="/closed-deals">Closed Deals</a></li>
            </ul>
          </div>

          {/* contact */}
          <div className="footer__col">
            <h3>Contact</h3>
            <ul>
              <li><a href="mailto:support@reverifi.com">support@reverifi.com</a></li>
              <li><a href="mailto:sales@reverifi.com">sales@reverifi.com</a></li>
            </ul>
          </div>

          {/* newsletter */}
          <div className="footer__col newsletter">
            <h3>Subscribe to our newsletter</h3>
            <form
              className="newsletter__form"
              onSubmit={(e) => {
                e.preventDefault();
                /* TODO: hook this up */
              }}
            >
              <input type="email" required placeholder="Enter email address" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      {/* bottom black bar */}
      <div className="footer__bottom">
        Copyright © {year} reverifi. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;