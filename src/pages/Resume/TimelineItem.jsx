
const TimelineItem = ({ title, date, description, logo, logoAlt }) => {
  return (
    <li className={`timeline-item${logo ? ' has-logo' : ''}`}>
      {logo && (
        <div className="timeline-logo">
          <img src={logo} alt={logoAlt || title} />
        </div>
      )}
      <h4 className="h4 timeline-item-title">{title}</h4>
      <span>{date}</span>
      <p className="timeline-text">{description}</p>
    </li>
  );
}

export default TimelineItem;
