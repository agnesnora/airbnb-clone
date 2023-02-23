import grid from "./photo-grid.png";

export default function Hero() {
  return (
    <div className="Hero">
      <img src={grid} className="Photo-grid" alt="logo" />
      <div className="Hero-text">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}
