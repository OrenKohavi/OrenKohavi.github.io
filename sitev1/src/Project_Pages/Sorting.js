import './Sorting.css';
import React, { useEffect, useState } from 'react';
import card_front from '../img/card_front.jpg';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

export default function Sorting() {
    //This may be overuse of useState, but better safe than sorry
    //(Plus, performance impact is minimal with such a simple page)
    let cards_created = 0;
    const max_card_value = 100;
    const [card_values, setCardValues] = useState([]);
    const [num_cards, setNumCards] = useState(7);
    const [operations, setOperations] = useState(0);
    const [flipArray, setFlipArray] = useState(Array(num_cards).fill(false));
    const [flipAllowed, setFlipAllowed] = useState(true);
    const [alertedRotation, setAlertedRotation] = useState(false);
    const [finishopEnabled, setFinishopEnabled] = useState(false);

    useEffect(() => {
        //set nextopEnabled to true when flipAllowed is false
        if (!flipAllowed) {
            setFinishopEnabled(true);
        } else {
            setFinishopEnabled(false);
        }
    }, [flipAllowed]);

    useEffect(() => {
        //re-generate card values when num_cards changes
        generate_card_values();
    }, [num_cards]);

    let on_cardflip = () => {
        //This function is called before the card is set to flipped in flipArray
        //Therefore if there is a single "true" value in flipArray, this is the second card to be flipped
        if (flipArray.includes(true)) {
            //There are at least 2 cards flipped over
            //Don't allow any more flips
            setFlipAllowed(false);
        }
    }

    let flip_card_at_idx = (idx) => {
        let new_flip_array = flipArray.slice();
        new_flip_array[idx] = !new_flip_array[idx];
        setFlipArray(new_flip_array);
    }

    let num_cards_changed = () => {
        //TODO: Provide a warning that changing the number of cards resets the game
        //only proceed if the user is sure

        //for now, just reset the cards
        reset_button_click();
        return true; //For now, always return true
    }

    let reset_button_click = () => {
        //Reset the cards and the operations counter
        //Also re-generate the card values
        unflip_cards();
        generate_card_values();
        setOperations(0);
    }

    let finishop_button_click = () => {
        //This function is called when the done button is clicked
        //TODO: Check if the cards are in the correct order
        unflip_cards();
        setOperations(operations + 1);
    }

    let unflip_cards = () => {
        setFlipArray(Array(num_cards).fill(false))
        setFlipAllowed(true);
    }

    let generate_card_values = () => {
        let new_card_array = [];
        for (let i = 0; i < num_cards; i++) {
            //Range from 1 to max_card_value
            new_card_array.push(Math.floor(Math.random() * max_card_value) + 1);
        }
        setCardValues(new_card_array)
    }

    let render_all_cards = () => {
        let cards = [];
        for (let i = 0; i < num_cards; i++) {
            cards.push(renderCard(i));
        }
        return cards;
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
                            let user_confirmation = num_cards_changed();
                            if (user_confirmation) {
                                setNumCards(e.target.value);
                            }
                        }}/>
                    </h2>
                    <h2>Number Of Operations: {operations}</h2>
                </div>
                <div className="sorting-instructions">
                    <p>Soon, this will be an interactive display showing the next step to take</p>
                    <p>Select 2 Cards ➡️ Drag Cards Around ➡️ Click 'Finish Operation' ➡️ Repeat</p>
                </div>
                <div className="sorting-buttons">
                    <div className="reset-button-div">
                        <AwesomeButton type="primary" ripple onPress={reset_button_click}>Restart Game</AwesomeButton>
                    </div>
                    <div className="next-button-div">
                        <AwesomeButton type="primary" disabled={!finishopEnabled} onPress={finishop_button_click}>Finish Operation</AwesomeButton>
                    </div>
                </div>
                <div className="cards-and-blocker">
                    <div className="sorting-game-cards">
                        {render_all_cards()}
                    </div>
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