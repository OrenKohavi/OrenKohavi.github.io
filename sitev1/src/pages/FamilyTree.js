import FamilyTreeImage from '../assets/FamilyTree.png';
import '../global.css';

//This is a webpage I built primarily for my girlfriend,
//She wanted a quick and easy way of keeping track of who everyone in my family was
//This was done in a few minutes.
//If you're evaluating my website and are somehow here, please check out my more impressive projects lol

export default function FamilyTree() {
    return (
        <div className="family-tree">
            <br></br>
            <br></br>
            <img className="not-selectable" src={FamilyTreeImage} alt="family tree" style={{
                width: '100%',
                height: 'auto',
            }}/>
        </div>
    )
}