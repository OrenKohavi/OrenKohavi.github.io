import './Sorting.css';
import React, { useState } from 'react';
import card_front from '../img/card_front.jpg';  

export default function Sorting() {
    const [cardflips, setCardflips] = useState(0);
    const [operations, setOperations] = useState(0);
    const counter_increment_function = () => {setCardflips(cardflips + 1)}

    const num_cards = 2;
    let reset_funcs = [];

    let renderCard = (value) => {
        return (
            <Card
            value={value}
            rfs={(x) => {reset_funcs.push(x)}}
            revealFunc={counter_increment_function}/>
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
                    <h2>Score: {cardflips}</h2>
                </div>
                <div className="Sorting-game-cards">
                    {renderCard(123)}
                </div>
            </div>
        </div>
    )
}

/* Card class */
class Card extends React.Component {
    handleClick = () => {
        console.log("Clicked")
        this.props.revealFunc();
    };

    resetCard = () => {
        console.log("Reset")
    };

    /* Card component is taken from https://3dtransforms.desandro.com/card-flip */
    render () {
        return (
        <div className="cardContainer">
            <label className="cardLabel">
            <input type="checkbox" className="cardInput" onClick={this.handleClick} />
            <div className="card">
                <div className="front not-selectable">Front</div>
                <div className="back not-selectable">{this.props.value}</div>
            </div>
            </label>
        </div>
        );
    }
}