import './Sorting.css';
import React, { useState } from 'react';
import card_front from '../img/card_front.jpg';  

export default function Sorting() {
    const num_cards = 2;
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
        function setFlipped(){
            return function () {
                const curr_card_idx = cards_created;
                //alert(curr_card_idx)
                flip_card_at_idx(curr_card_idx);
            }
        }
        cards_created++;
        return (
            <Card
            value={value}
            revealFunc={on_cardflip}
            isFlipped={isFlipped}
            setFlipped={setFlipped()}/>
        )
    }

    return (
        <div className="sorting">
            <div className="sorting-tmp">
                <h1>Are you more efficient than a sorting algorithm?</h1>
                <h2>fuck around and find out</h2>
            </div>
            <div className="sorting-game">
                <div className="Sorting-game-header">
                    <h2># Of Operations: {operations}</h2>
                </div>
                <div className="Sorting-game-cards">
                    <button onClick={reset_all_cards}>Reset</button>
                    <button onClick={() => {alert(flipArray)}}>Show Status</button>
                    <br></br>
                    {renderCard(123)}
                    {renderCard(456)}
                    {renderCard(789)}
                    {renderCard(420)}
                    {renderCard(999)}
                </div>
            </div>
        </div>
    )
}

/* Card class */
function Card (props) {
    let handleClick = () => {
        props.revealFunc();
        props.setFlipped();
    }
    /* Card component is taken from https://codepen.io/RuudBurger/pen/gOXKrr */
    return (
    <div className="cardContainer">
        <label className="cardLabel">
        <input type="checkbox" disabled={props.isFlipped} className="cardInput" onClick={handleClick} />
        <div className="card">
            <div className="front not-selectable">
                Front
            </div>
            <div className="back not-selectable">
                <h1>{props.value}</h1>
            </div>
        </div>
        </label>
    </div>
    );
}