import React, { useState, useEffect } from "react";
import cards from "./cards.json";
import Card from "./Card";
import "./Listing.css";
import icons from '../../icons'

function useCardsPerRow() {
  const [cardsPerRow, setCardsPerRow] = useState(window.innerWidth <= 600 ? 1 : 3);

  useEffect(() => {
    function handleResize() {
      setCardsPerRow(window.innerWidth <= 600 ? 1 : 3);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return cardsPerRow;
}

export default function Listings() {
  const cardsPerRow = useCardsPerRow();
  const [startIdx, setStartIdx] = useState(0);
  const endIdx = startIdx + cardsPerRow;
  const visibleCards = cards.slice(startIdx, endIdx);

  useEffect(() => {
    // Whenever cardsPerRow changes and index is out of range, reset
    if (startIdx + cardsPerRow > cards.length) {
      setStartIdx(Math.max(cards.length - cardsPerRow, 0));
    }
  }, [cardsPerRow, startIdx]);

  const isLeftDisabled = startIdx === 0;
  const isRightDisabled = endIdx >= cards.length;
  const hideArrows = cards.length <= cardsPerRow;

  return (
    <div className="listings-root">
      <div className="listings-container">
        <h2 className="listings-heading">Listings</h2>
        <div className="carousel-container">
          <button
            className={[
              "carousel-arrow",
              hideArrows && "carousel-arrow--hidden",
              isLeftDisabled && "carousel-arrow--not-allowed"
            ].filter(Boolean).join(" ")}
            onClick={() => setStartIdx(idx => Math.max(idx - cardsPerRow, 0))}
            disabled={isLeftDisabled}
            aria-label="Previous"
            type="button"
          >
            <img src={icons.leftArrow} alt="Previous" className="inline-icon" />
          </button>
          <div className="card-row">
            {visibleCards.map((card, idx) => (
              <Card card={card} key={startIdx + idx} />
            ))}
          </div>
          <button
            className={[
              "carousel-arrow",
              hideArrows && "carousel-arrow--hidden",
              isRightDisabled && "carousel-arrow--not-allowed"
            ].filter(Boolean).join(" ")}
            onClick={() => setStartIdx(idx => (idx + cardsPerRow < cards.length ? idx + cardsPerRow : idx))}
            disabled={isRightDisabled}
            aria-label="Next"
            type="button"
          >
            <img src={icons.rightArrow} alt="Next" className="inline-icon" />
          </button>
        </div>
      </div>
    </div>
  );
}