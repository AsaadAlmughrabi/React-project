import icons from '../../icons.js';
import './Achievements.css';
import badges from './badges.json';



function Achievements() {
  return (
    <div className="achievements-section">
      <div className="achievements-header">
        <h2 className="achievements-title">Achievements</h2>
        <div className="achievement-pills">
          <div className="achievement-pill">
            <img src={icons.star} alt="" />
            3300 Points
          </div>
          <div className="achievement-pill">
            <img src={icons.badge} alt="" />
            {badges.length} Badges
          </div>
        </div>
      </div>
      <div className="badges-row">
        {badges.map((badge, idx) => (
          <div className="badge-card" key={idx}>
            <img src={badge.image_url} className="badge-img" alt={badge.badge} />
            <div className="badge-card-title">{badge.badge}</div>
            <div className="badge-card-date">{badge.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;