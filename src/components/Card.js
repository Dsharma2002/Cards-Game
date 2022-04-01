import React from "react";

function Card({ card }) {

    return (
        <div className='card' key={card.id}>
            <div>
                <img src={card.src} className="front" alt="front card" />
                <img src="/images/black_joker.png" className='back' alt="back card" />
            </div>
        </div>
    );
}

export default Card;