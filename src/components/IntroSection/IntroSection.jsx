import "./IntroSection.css";
import { useState } from "react";
import Modal from "../Modal/Modal";
import ContactForm from "../Modal/ContactForm";
import icons from '../../icons.js'


function IntroSection() {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(prevOpen => true);
  }

  function handleClose() {
    setOpen(prevOpen => false);
  }


  function handleSubmit(data) {
    console.log("Form values:", data);
    setOpen(prevOpen => false);
  }

  return (
    <>
      <section className="profile-section">
        <div className="profile-card">
          <div className="profile-photo-area">
            <img src={icons.userPhoto} alt="Jacob Jones" className="profile-photo" />
            <div className="profile-contact-row">
              <button className="contact-btn" onClick={handleOpen}>Contact</button>
              <div className="profile-socials">
                <a href="#" title="Facebook">
                  <img src={icons.facebook} alt="Facebook" />
                </a>
                <a href="#" title="YouTube">

                  <img src={icons.youtube} alt="YouTube" />

                </a>
                <a href="#" title="LinkedIn">
                  <img src={icons.linkedin} alt="LinkedIn" />
                </a>
                <a href="#" title="Instagram">
                  <img src={icons.instagram} alt="Instagram" />
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
                  <img src={icons.shareicon} alt="Share" />
                </button>
                <button className="profile-action-btn" title="Like">
                  <img src={icons.likeIcon} alt="Like" />
                  
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
        <Modal title="Contact Jacob Jones" onClose={handleClose}>
          <ContactForm onSubmit={handleSubmit} />
        </Modal>
      )}
    </>
  );
}

export default IntroSection;