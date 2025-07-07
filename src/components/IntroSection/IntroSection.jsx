import "./IntroSection.css";
import { useState } from "react";
import Modal from "../Modal/Modal";

function IntroSection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="profile-section">
        <div className="profile-card">
          <div className="profile-photo-area">
            <img src="/assets/user-photo.svg" alt="Jacob Jones" className="profile-photo" />
            <div className="profile-contact-row">
              <button className="contact-btn" onClick={() => setOpen(true)}>Contact</button>
              <div className="profile-socials">
                <a href="#" title="Facebook">
                  <img src="/assets/facebook.svg" alt="Facebook" />
                </a>
                <a href="#" title="LinkedIn">
                  <img src="/assets/Group 111317.svg" alt="YouTube" />
                </a>
                <a href="#" title="LinkedIn">
                  <img src="/assets/linkedin.svg" alt="LinkedIn" />
                </a>
                <a href="#" title="Instagram">
                  <img src="/assets/instagram.svg" alt="Instagram" />
                </a>
              </div>
            </div>
          </div>

          <div className="profile-info-area">
            <div className="profile-header-row">
              <div>
                <h1 className="profile-name">Jacob Jones</h1>
                <div className="profile-role">
                  Lender/Mortgage
                  <br />
                  NMLS &nbsp; <span className="profile-nmls">#068543894</span>
                </div>
              </div>
              <img src="/assets/check-icon.svg" alt="Verified" className="profile-check" />

              <div className="profile-actions">
                <button className="profile-action-btn" title="Share">
                  <img src="/assets/shareIcon.svg" alt="Share" />
                </button>
                <button className="profile-action-btn" title="Like">
                  <img src="/assets/likeIcon.svg" alt="Like" />
                </button>
              </div>
            </div>
            <div className="profile-about-section">
              <div className="profile-about-label">About</div>
              <div className="profile-about-description">
                Lorem ipsum dolor sit amet consectetur. Rhoncus ultrices sed
                aliquam tristique orci velit est tellus. Et sed enim ut at
                scelerisque. Tincidunt proin justo nisi a. Iaculis potenti
                sagittis in tincidunt arcu diam nisl.
              </div>
            </div>
            <div className="profile-details-row">
              <div className="profile-details-left">
                <div>
                  <span className="profile-detail-label">Language</span>
                  <br />
                  English
                </div>
                <div>
                  <span className="profile-detail-label">Phone</span>
                  <br />
                  (406) 555-0120
                </div>
              </div>
              <div className="profile-details-right">
                <div>
                  <span className="profile-detail-label">Service Area</span>
                  <br />
                  New York
                </div>
                <div>
                  <span className="profile-detail-label">Email</span>
                  <br />
                  jacob.jones@example.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {open && (
        <Modal
          title="Contact Jacob Jones"
          onClose={() => setOpen(false)}
          onSubmit={(data) => {
            console.log("Form values:", data);
            setOpen(false);
          }}
        />
      )}
    </>
  );
}

export default IntroSection;