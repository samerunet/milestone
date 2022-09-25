import CardDeck from "./CardDeck.js";
import "./App.css";
// import card from "../src/assets/cards-front/5R.png";

function App() {
	console.log(CardDeck.length);
	return (
		<div className='App'>
			{CardDeck.map((card) => {
				return <img key={card.id} src={card.src} alt={card.value} />;
			})}
		</div>
	);
}

export default App;
