import FamilyTreeImage from '../assets/FamilyTree.png';
import { isMobile } from 'react-device-detect';

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