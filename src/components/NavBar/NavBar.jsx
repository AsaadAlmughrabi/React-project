import { useState, useRef, useEffect } from "react";
import "./NavBar.css";

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const userMenuRef = useRef();

  const closeMenu = () => setMobileMenuOpen(false);
  const toggleUserMenu = () => setOpenUser((open) => !open);

  // Close user menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target)
      ) {
        setOpenUser(false);
      }
    }
    if (openUser) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openUser]);

  return (
    <nav className="navbar">
      <div className="nav-cluster">
        <button
          className="hamburger"
          aria-label="Open Menu"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <div className="navbar-group left">
          <a href="#">Buy</a>
          <a href="#">Rent</a>
          <a href="#">Sell</a>
          <a href="#">Knowledge Center</a>
        </div>
        <div className="navbar-logo">
            <img src="/assets/reverifi.svg" alt="logo" />
        </div>
        <div className="navbar-group right">
          <a href="#">RE PROS</a>
          <a href="#">Events</a>
          <a href="#">Leaderboard</a>
        </div>
      </div>
      <div className="navbar-icons-area">
        <button className="icon-btn">
          <img src="/assets/ring-icon.svg" alt="Notifications" />
        </button>
        <div className="navbar-user" ref={userMenuRef}>
          <img src="/assets/user-profile.svg" alt="User" className="user-image" />
          <button className="user-profile-name" onClick={toggleUserMenu}>
            Jacob Jones
            <img src="/assets/down-arrow.svg" alt="dropdown" />
          </button>
          {openUser && (
            <div className="open-user">
              <button className="signout-btn">Sign out</button>
            </div>
          )}
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu" onClick={closeMenu}>
          <div
            className="mobile-menu-content"
            onClick={(e) => e.stopPropagation()}
          >
            <a href="#">Buy</a>
            <a href="#">Rent</a>
            <a href="#">Sell</a>
            <a href="#">Knowledge Center</a>
            <a href="#">RE PROS</a>
            <a href="#">Events</a>
            <a href="#">Leaderboard</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;