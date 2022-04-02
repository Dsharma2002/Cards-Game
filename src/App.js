import './App.css';
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Card from './components/Card';


const displayCards = [
  { "src": "/images/jack_of_clubs2.png", matched: false },
  { "src": "/images/jack_of_diamonds2.png", matched: false },
  { "src": "/images/jack_of_hearts2.png", matched: false },
  { "src": "/images/jack_of_spades2.png", matched: false },
  { "src": "/images/queen_of_clubs2.png", matched: false },
  { "src": "/images/queen_of_diamonds2.png", matched: false },
  { "src": "/images/queen_of_hearts2.png", matched: false },
  { "src": "/images/queen_of_spades2.png", matched: false },
]

function App() {
  const greeting = "The Classic Cards Game to check your memory"
  const [chosen, setChosen] = useState(false)
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [cardOne, setCardOne] = useState(null)
  const [cardTwo, setCardTwo] = useState(null)
  const turnsElement = document.querySelector('.turn-counter')

  function gameOver() {
    if (displayCards.forEach(card => card.matched === true)) {
      return true
    } else {
      return false
    }
  }



  // deck shuffle
  const shuffle = () => {
    const doubledCards = [...displayCards, ...displayCards]
      .sort(() => Math.random() - 0.5).map((card) => ({ ...card, id: uuidv4() }))

    setCards(doubledCards)
    setTurns(0)
  }

  // handle choice 
  const handleChoice = (card) => {
    if (!gameOver()) {
      cardOne ? setCardTwo(card) : setCardOne(card)
    } else {
      turnsElement.classList.add('.gameOver')
    }
    // twoChoicesMade()
  }

  // const twoChoicesMade = () => {
  //   if (cardOne !== null && cardTwo !== null) {
  //     compareCards(cardOne, cardTwo)
  //     reset()
  //   }
  // }

  // const compareCards = (cardOne, cardTwo) => {
  //   if (cardOne.src === cardTwo.src) {
  //     console.log("Match")
  //   } else {
  //     console.log('No Match')
  //   }
  // }

  // compare 2 selected cards
  useEffect(() => {
    if (cardOne && cardTwo) {
      setChosen(true)
      if (cardOne.src === cardTwo.src) {
        changeMatched()
        reset()
      } else {
        setTimeout(() => {
          reset()
        }, 500)
      }
    }

  }, [cardOne, cardTwo])

  // if cards match then change the matched property of the card
  const changeMatched = () => {
    setCards(prevCards => {
      return prevCards.map(card => {
        if (card.src === cardOne.src) {
          return { ...card, matched: true }
        } else {
          return card
        }
      })
    })
  }


  // reset choice and increment turn counter
  const reset = () => {
    setCardOne(null)
    setCardTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setChosen(false)
  }

  return (
    <div className="App">
      <h1>{greeting.toUpperCase()}</h1>
      <button className='button-new-game' onClick={shuffle}>New Game</button>
      <div className='turn-counter'>
        <p>Turns: {turns} </p>
        <p>Theoretical best to finish game: {displayCards.length} turns</p>
      </div>
      <div className='card-container'>
        {cards.map(card => (
          <Card
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === cardOne || card === cardTwo || card.matched}
            chosen={chosen} />
        ))}
      </div>
    </div>
  );
}

export default App;
