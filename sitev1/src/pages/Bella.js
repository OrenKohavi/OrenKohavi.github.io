import './Bella.css';
import '../global.css';
import { useState, useEffect, useCallback, useMemo } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function Bella() {
    const start_time = useMemo(() => new Date('June 1, 2022 17:05:00 GMT-4:00'), []);
    const landing_time = useMemo(() => new Date('August 13, 2022 23:00:00 GMT-07:00'), []);
    const [top_text, setTopText] = useState("I LOVE YOU SO MUCH");
    const [bottom_text, setBottomText] = useState("It'll be over before you know it ❤️");
    const calculateProgress = useCallback(() => {
        //gets the current time, and calculates the difference in seconds
        var current_time = new Date();
        var time_remaining = landing_time - current_time;
        var percent_remaining = time_remaining / (landing_time - start_time);
        var percent_completed = 1 - percent_remaining;
        if (percent_completed > 1) {
            percent_completed = 1;
        }
        return percent_completed;
    }, [start_time, landing_time])
    const [progress, setProgress] = useState(calculateProgress());


    //updates the progress bar every second
    useEffect(() => {
        var progress = calculateProgress();
        const timer = setTimeout(() => setProgress(progress), 100)
        if (progress >= 1) {
            setTopText("You're here!\nWE DID IT!");
            setBottomText("🥳🎉🎉🎉");
        } else {
            setTopText("I LOVE YOU SO MUCH");
            setBottomText("It'll be over before you know it ❤️")
        }
        return () => clearTimeout(timer)
    }, [progress, calculateProgress])


    return (
        <div className="Bella centered">
            <div className="three-col">
                <div className="col1">Hello 1</div>
                <div className="col2">
                    <div className='progress-stuff'>
                        <h1 className='centered georgia-font'
                            style={{marginTop: '12vh', fontSize: '10vh'}}>
                                {top_text}
                        </h1>
                        <br></br>
                        <span>
                            <h2 className='georgia-font inline'>We're </h2>
                            <h2 className='monospace-font inline'>{(progress * 100).toFixed(5)}%</h2>
                            <h2 className='georgia-font inline'> Done!</h2>
                        </span>
                        <ProgressBar style={{marginTop: '5vh', marginBottom: '5vh'}} animated variant='success' now={progress * 100} />
                        <h2 className='centered georgia-font'>{bottom_text}</h2>
                    </div>
                    <div className='col2-photos'>
                        Photos go here
                    </div>
                </div>
                <div className="col3">Hello 3</div>
            </div>
        </div>
    )
}