import React from "react";

function Card({ card, handleChoice, flipped, chosen }) {

    const handleClick = () => {
        if (!chosen) {
            handleChoice(card)
        }
    }

    return (
        <div className='card'>
            <div className={flipped ? "flipped" : ""}>
                <img src={card.src} className="front"/>
                <img src="/images/black_joker.png"
                    className='back'
                    onClick={handleClick} />
            </div>
        </div>
    );
}

export default Card;