import './Sorting.css';
import React, { useState } from 'react';
import card_front from '../img/card_front.jpg';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

export default function Sorting() {
    //This may be overuse of useState, but better safe than sorry
    //(Plus, performance impact is minimal with such a simple page)
    let cards_created = 0;
    const [card_values, setCardValues] = useState([]);
    const [num_cards, setNumCards] = useState(7);
    const [operations, setOperations] = useState(0);
    const [flipArray, setFlipArray] = useState(Array(num_cards).fill(false));
    const [flipAllowed, setFlipAllowed] = useState(true);
    const [alertedRotation, setAlertedRotation] = useState(false);
    const [doneDisabled, setDoneDisabled] = useState(true);

    let on_cardflip = () => {
        //This function is called before the card is set to flipped in flipArray
        //Therefore if there is a single "true" value in flipArray, this is the second card to be flipped
        if (flipArray.includes(true)) {
            //There are at least 2 cards flipped over
            //Don't allow any more flips
            setFlipAllowed(false);
        }
        //TODO Logic for checking if 2 cards are flipped and stuff
    }

    let flip_card_at_idx = (idx) => {
        let new_flip_array = flipArray.slice();
        new_flip_array[idx] = !new_flip_array[idx];
        setFlipArray(new_flip_array);
    }

    let unflip_cards = () => {
        setFlipArray(Array(num_cards).fill(false))
        setFlipAllowed(true);
    }

    let generate_card_values = () => {
        //Hacky fix: Sometimes num_cards doesn't update in time, leaving the last card without a value
        //No harm in making the list too long though (unused values are simply never accessed)
        //So generate an array slightly too long, just in case (starting i at -2)
        let new_card_array = [];
        for (let i = -2; i < num_cards; i++) {
            new_card_array.push(Math.floor(Math.random() * 100));
        }
        setCardValues(new_card_array)
    }


    let renderCard = (value) => {
        let isFlipped = flipArray[cards_created]
        cards_created++;
        return (
            <Card
            id={cards_created - 1}
            value={card_values[cards_created - 1]}
            revealFunc={on_cardflip}
            isFlipped={isFlipped}
            setFlipped={flip_card_at_idx}
            flipAllowed={flipAllowed}/>
        )
    }

    let render_all_cards = () => {
        if (card_values.length === 0){
            generate_card_values();
        }
        let cards = [];
        for (let i = 0; i < num_cards; i++) {
            cards.push(renderCard(i));
        }
        return cards;
    }

    if (window.innerWidth < window.innerHeight && !alertedRotation) {
        alert("This page is designed for a desktop or laptop screen. Please rotate your device to landscape mode.");
        setAlertedRotation(true);
    }

    return (
        <div className="sorting">
            <div className="sorting-header">
                <h1>Are you more efficient than a sorting algorithm?</h1>
                <h2>reveal cards, re-order cards, and see how many operations it takes you.</h2>
                <br></br>
            </div>
            <div className="sorting-game">
                <div className="sorting-info">
                    <h2>
                        <label className="card-number-select-label" for="card-number-select">How many cards: </label>
                        <input className="card-number-select" type="number" min="4" max="15" defaultValue="7" onChange={(e) => {
                            setNumCards(e.target.value);
                            unflip_cards();
                            generate_card_values();
                            render_all_cards();
                        }}/>
                    </h2>
                    <h2>Number Of Operations: {operations}</h2>
                </div>
                <div className="sorting-instructions">
                    <p>Soon, this will be an interactive display showing the next step to take</p>
                    <p>Select 2 Cards ➡️ Drag Cards Around ➡️ Click 'Done' ➡️ Repeat</p>
                </div>
                <div className="sorting-buttons">
                    <div className="reset-button-div">
                        <AwesomeButton type="primary" ripple={true} disabled={false} onPress={unflip_cards}>Restart Game</AwesomeButton>
                    </div>
                    <div className="next-button-div">
                        <AwesomeButton type="primary" disabled={doneDisabled} onPress={unflip_cards}>Next Operation</AwesomeButton>
                    </div>
                </div>
                <div className="sorting-game-cards">
                    {render_all_cards()}
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
        <input type="checkbox" checked={props.isFlipped} disabled={props.isFlipped || !props.flipAllowed} className="cardInput" onClick={handleClick} onChange={() => {}}/>
        <div className="card">
            <div className="front not-selectable">
                
            </div>
            <div className="back not-selectable">
                <h1>{props. value}</h1>
            </div>
        </div>
        </label>
    </div>
    );
}