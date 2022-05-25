import './Sorting.css';
import React, { useState } from 'react';
import card_front from '../img/card_front.jpg';  

export default function Sorting() {
    let num_cards = 7;
    let cards_created = 0;
    const [operations, setOperations] = useState(0);
    const [flipArray, setFlipArray] = useState(Array(num_cards).fill(false));

    let on_cardflip = () => {
        setOperations(operations + 1); //Temporary
        //TODO Logic for checking if 2 cards are flipped and stuff
    }

    let flip_card_at_idx = (idx) => {
        let new_flip_array = flipArray.slice();
        new_flip_array[idx] = !new_flip_array[idx];
        setFlipArray(new_flip_array);
    }

    let reset_all_cards = () => {
        setFlipArray(Array(num_cards).fill(false))
    }

    let renderCard = (value) => {
        let isFlipped = flipArray[cards_created]
        cards_created++;
        return (
            <Card
            id={cards_created - 1}
            value={value}
            revealFunc={on_cardflip}
            isFlipped={isFlipped}
            setFlipped={flip_card_at_idx}/>
        )
    }

    if (window.innerWidth < window.innerHeight) {
        alert("This page is viewed best in landscape mode");
    }

    return (
        <div className="sorting">
            <div className="sorting-tmp">
                <h1>Are you more efficient than a sorting algorithm?</h1>
                <h2>fuck around and find out!!!</h2>
            </div>
            <div className="sorting-game">
                <div className="sorting-game-header">
                    <h2># Of Operations: {operations}</h2>
                </div>
                <button onClick={reset_all_cards}>Reset</button>
                <div className="sorting-game-cards">
                    {Array(num_cards).fill(1).map(renderCard)}
                </div>
            </div>
        </div>
    )
}

/* Card class */
function Card (props) {
    let handleClick = () => {
        props.revealFunc();
        props.setFlipped(props.id);
    }
    /* Card component is taken from https://codepen.io/RuudBurger/pen/gOXKrr */
    return (
    <div className="cardContainer">
        <label className="cardLabel">
        <input type="checkbox" checked={props.isFlipped} disabled={props.isFlipped} className="cardInput" onClick={handleClick} />
        <div className="card">
            <div className="front not-selectable">
                Front :)
            </div>
            <div className="back not-selectable">
                <h1>{props.value}</h1>
            </div>
        </div>
        </label>
    </div>
    );
}