import './Bella.css';
import '../global.css';
import { useState, useEffect, useCallback, useMemo } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { isMobile } from 'react-device-detect';
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';
import p4 from '../assets/p4.jpg';
import p5 from '../assets/p5.jpg';
import p6 from '../assets/p6.jpg';
import p7 from '../assets/p7.jpg';
import p8 from '../assets/p8.jpg';
import p9 from '../assets/p9.jpg';

export default function Bella() {
    const start_time = useMemo(() => new Date('June 1, 2022 17:05:00 GMT-4:00'), []);
    const landing_time = useMemo(() => new Date('August 13, 2022 20:31:00 GMT-07:00'), []);
    const [top_text, setTopText] = useState("I LOVE YOU SO MUCH");
    const [bottom_text, setBottomText] = useState("It'll be over before you know it ❤️");
    const [time_remaining, setTimeRemaining] = useState(null);
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
    
    const seconds_to_humanreadable = useCallback((seconds) => {
        //converts seconds to a human readable string
        var numdays = Math.floor((seconds % 31536000) / 86400); 
        var numhours = Math.floor(((seconds % 31536000) % 86400) / 3600);
        var numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
        var numseconds = Math.floor((((seconds % 31536000) % 86400) % 3600) % 60);
        return numdays + " days " + numhours + " hours " + numminutes + " minutes " + numseconds + " seconds";
    }, [])


    //updates the progress bar every second
    useEffect(() => {
        var curr_progress = calculateProgress();
        const timer = setTimeout(() => setProgress(curr_progress), 100)
        var seconds_remaining = (landing_time - new Date()) / 1000;
        if (seconds_remaining < 0 || progress === 1) {
            seconds_remaining = 0;
        }
        setTimeRemaining(seconds_to_humanreadable(seconds_remaining));
        if (curr_progress >= 1) {
            setTopText("You're here!\nWE DID IT!");
            setBottomText("🥳🎉🎉🎉");
        } else {
            setTopText("I LOVE YOU SO MUCH");
            setBottomText("It'll be over before you know it ❤️")
        }
        return () => clearTimeout(timer)
    }, [progress, calculateProgress, landing_time, seconds_to_humanreadable])

    if (isMobile) {
        return (
            <div className="bella-mobile centered">
                <div className="col2-mobile">
                    <div className='progress-stuff'>
                        <h1 className='centered georgia-font'
                            style={{marginTop: '8vh', fontSize: '10vh'}}>
                                {top_text}
                        </h1>
                        <br></br>
                        <span>
                            <h2 className='georgia-font inline'>We're </h2>
                            <h2 className='monospace-font inline'>{(progress * 100).toFixed(5)}%</h2>
                            <h2 className='georgia-font inline'> Done!</h2>
                        </span>
                        <ProgressBar style={{marginTop: '5vh', marginBottom: '5vh'}} animated variant='success' now={progress * 100} />
                        <h2 className="centered monospace-font">Time Left: {time_remaining}</h2>
                        <br></br>
                        <h2 className='centered georgia-font'>{bottom_text}</h2>
                    </div>
                    <div className='col2-photos-mobile'>
                        <img alt="" className="p5m not-selectable twitch-hover" src={p5}></img>
                        <img alt="" className="p6m not-selectable twitch-hover" src={p6}></img>
                        <img alt="" className="p7 not-selectable twitch-hover" src={p7}></img>
                    </div>
                </div>
                <div className="col1-mobile">
                    <img alt="" className='p1m not-selectable collage-image twitch-hover-neg' src={p1}></img>
                    <img alt="" className='p9m not-selectable collage-image twitch-hover-neg' src={p9}></img>
                    <img alt="" className='p8m not-selectable twitch-hover-neg' src={p8}></img>
                </div>
                <div className="col3-mobile">
                    <img alt="" className='p3m not-selectable spin-hover' src={p3}></img>
                    <img alt="" className="p2m not-selectable collage-image twitch-hover-neg" src={p2}></img>
                    <img alt="" className="p4m not-selectable twitch-hover-neg" src={p4}></img>
                </div>
            </div>
        )
    }

    return (
        <div className="bella-desktop centered">
            <div className="three-col">
                <div className="col1">
                    <img alt="" className='p1 not-selectable collage-image twitch-hover-neg' src={p1}></img>
                    <div className="flex-center-row">
                        <img alt="" className='p9 not-selectable collage-image twitch-hover-neg' src={p9}></img>
                        <img alt="" className='p8 not-selectable twitch-hover-neg' src={p8}></img>
                    </div>
                </div>
                <div className="col2">
                    <div className='progress-stuff'>
                        <h1 className='centered georgia-font'
                            style={{marginTop: '8vh', fontSize: '10vh'}}>
                                {top_text}
                        </h1>
                        <br></br>
                        <span>
                            <h2 className='georgia-font inline'>We're </h2>
                            <h2 className='monospace-font inline'>{(progress * 100).toFixed(5)}%</h2>
                            <h2 className='georgia-font inline'> Done!</h2>
                        </span>
                        <ProgressBar style={{marginTop: '5vh', marginBottom: '5vh'}} animated variant='success' now={progress * 100} />
                        <h2 className="centered monospace-font">Time Left: {time_remaining}</h2>
                        <br></br>
                        <h2 className='centered georgia-font'>{bottom_text}</h2>
                    </div>
                    <div className='col2-photos'>
                        <img alt="" className="p5 not-selectable twitch-hover" src={p5}></img>
                        <img alt="" className="p6 not-selectable twitch-hover" src={p6}></img>
                        <img alt="" className="p7 not-selectable twitch-hover" src={p7}></img>
                    </div>
                </div>
                <div className="col3">
                    <img alt="" className='p3 not-selectable spin-hover' src={p3}></img>
                    <img alt="" className="p2 not-selectable collage-image twitch-hover-neg" src={p2}></img>
                    <img alt="" className="p4 not-selectable twitch-hover-neg" src={p4}></img>
                </div>
            </div>
        </div>
    )
}