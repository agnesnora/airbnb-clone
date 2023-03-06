import "./App.css";
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import Card from "./components/Card.js";
import cardData from "./data.js";

function App() {
  console.log(cardData);
  const cardElement = cardData.map(function (item) {
    return <Card key={item.id} item={item} />;
  });
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">{cardElement}</section>
    </div>
  );
}

export default App;
