// import photo1 from "../image 12.png";
import star from "../Star 1.png";

export default function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        src={`../${props.item.coverImg}`}
        alt="katie"
        className="card--image"
      />

      <div className="reviews">
        <img className="card--star" alt="star-icon" src={star} />
        <span>{props.item.stats.rating}</span>
        <span>({props.item.stats.reviewCount}) • </span>
        <span>{props.item.location}</span>
      </div>
      <p className="card--title">{props.item.title}</p>
      <p className="card--price">
        <strong>From {props.item.price}</strong>/person
      </p>
    </div>
  );
}
