import React from "react";
import "./Listing.css";

export default function Card({ card }) {
  return (
    <div className="listing-card">
      <div className="listing-img-section">
        <img src={card.image_url} alt="House" className="listing-img" />
        <span className="listing-sale-tag">Sale</span>
        <div className="listing-location">
          <img src="/assets/cardIcons/locationIcon.svg" alt="" className="inline-icon"/>
          {card.location}
        </div>
        <div className="listing-camera">
          <img src="/assets/cardIcons/camraIcon.svg" alt="" className="inline-icon" />
          {card.image_count}
        </div>
        {card.status === "Closed" && (
          <div className="closed-overlay">
            <img src="/assets/cardIcons/closedIcon.svg" alt="Closed" className="closed-stamp" />
          </div>
        )}
      </div>
      <div className="listing-details">
        <div className="listing-row">
          <div className="listing-price">${card.price.toLocaleString()}</div>
          <div className="listing-action-icons">
            <button>
              <img src="/assets/shareIcon.svg" alt="Share" className="inline-icon" />
            </button>
            <button>
              <img src="/assets/likeIcon.svg" alt="Like" className="inline-icon" />
            </button>
          </div>
        </div>
        <div className="listing-days">
          {card.days_listed} days on {card.property_type}
        </div>
        <div className="listing-type">{card.sale ? "Sale" : ""}</div>
        <div className="listing-features">
          <span>
            <img src="/assets/cardIcons/bedroomIcon.svg" alt="Beds" className="inline-icon" />
            {card.details.bedrooms}
          </span>
          <span>
            <img src="/assets/cardIcons/bathroomIcon.svg" alt="Baths" className="inline-icon" />
            {card.details.bathrooms}
          </span>
          <span>
            <img src="/assets/cardIcons/GrageIcon.svg" alt="Garages" className="inline-icon" />
            {card.details.other_rooms}
          </span>
        </div>
        <div className="listing-footer">
          <span className="likes">
              <img src="/assets/cardIcons/boldLikeIcon.svg" alt=""  className="inline-icon"/>
              {card.likes}
          </span>
          <div className="listing-views">
            {card.views} Views
            <img src="/assets/cardIcons/viewIcon.svg" alt="Views" className="inline-icon" />
          </div>
          <button className="listing-btn">{card.listing_button}</button>
        </div>
      </div>
    </div>
  );
}