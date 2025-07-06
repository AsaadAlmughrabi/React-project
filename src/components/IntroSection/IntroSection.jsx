import "./IntroSection.css";
import userPhoto from "../../assets/user-photo.svg";
import checkIcon from "../../assets/check-icon.svg";
import facebookIcon from "../../assets/facebook.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import chatIcon from "../../assets/instagram.svg";
import likeIcon from "../../assets/likeIcon.svg";
import shareIcon from "../../assets/shareIcon.svg";
import youtupe from "../../assets/Group 111317.svg";

function IntroSection() {
  return (
    <section className="profile-section">
      <div className="profile-card">
        <div className="profile-photo-area">
          <img src={userPhoto} alt="Jacob Jones" className="profile-photo" />
          <div className="profile-contact-row">
            <button className="contact-btn">Contact</button>
            <div className="profile-socials">
              <a href="#" title="Facebook">
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a href="#" title="LinkedIn">
                <img src={youtupe} alt="LinkedIn" />
              </a>
              <a href="#" title="Chat">
                <img src={linkedinIcon} alt="Chat" />
              </a>
              <a href="#" title="Chat">
                <img src={chatIcon} alt="Chat" />
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
            <img src={checkIcon} alt="Verified" className="profile-check" />

            <div className="profile-actions">
              <button className="profile-action-btn" title="Share">
                <img src={shareIcon} alt="Share" />
              </button>
              <button className="profile-action-btn" title="Like">
                <img src={likeIcon} alt="Like" />
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
  );
}

export default IntroSection;
