import FamilyTreeImage from '../assets/FamilyTree.png';
import { isMobile } from 'react-device-detect';

export default function FamilyTree() {
    if (isMobile) {
        return (
            <div className="nah">
                <br></br>
                <br></br>
                <br></br>
                <h1 className="centered">
                    I'm way too lazy to figure out how to make this a mobile site just view it on your laptop.
                </h1>
            </div>
        )
    }
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