import './App.css';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Card from './components/Card';

const displayCards = [
  { "src": "/images/jack_of_clubs2.png" },
  { "src": "/images/jack_of_diamonds2.png" },
  { "src": "/images/jack_of_hearts2.png" },
  { "src": "/images/jack_of_spades2.png" },
  { "src": "/images/queen_of_clubs2.png" },
  { "src": "/images/queen_of_diamonds2.png" },
  { "src": "/images/queen_of_hearts2.png" },
  { "src": "/images/queen_of_spades2.png" }
]

function App() {
  const greeting = "Cards Game to check your memory"
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  const shuffle = () => {
    const doubledCards = [...displayCards, ...displayCards]
      .sort(() => Math.random() - 0.5).map((card) => ({ ...card, id: uuidv4() }))

    setCards(doubledCards)
    setTurns(0)
  }

  return (
    <div className="App">
      <h1>{greeting.toUpperCase()}</h1>
      <button className='button-new-game' onClick={shuffle}>New Game</button>

      <div className='card-container'>
        {cards.map(card => (
          <Card card={card} />
        ))}
      </div>
    </div>
  );
}

export default App;
