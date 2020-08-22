import React, { useState } from 'react';
import './TimerButton.css'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

type TimerButtonProp = {
    setCounter: (active: number) => void;
    counter: number;
    setMin: (active: number) => void;
    min: number;
}
var smallmin: number = 0;
var smallsec: number = 0;
const TimerButton: React.FC<TimerButtonProp> = ({ counter, setCounter, min, setMin }: TimerButtonProp) => {
    const classes = useStyles();

    const [interval, setinterval] = useState<object>();
    const [status, setStatus] = useState<boolean>(true);

    function start() {
        if (status !== false) {
            setinterval(setInterval(() => {
                ++smallsec
                setCounter(smallsec)

                if (smallsec === 60) {
                    setMin(++smallmin)
                    smallsec = 0;
                    setCounter(smallsec)
                }
            }, 1000))
            console.log('start')
            setStatus(false);
        }
    }

    function stop() {
        smallsec=0;
        smallmin=0;
        setCounter(0);
        setMin(0);
        clearInterval(Number(interval));
        console.log('stop');
        setStatus(true);
    }
    function pause() {
        console.log('pause')
        clearInterval(Number(interval))
        setStatus(true)
    }

    return (
        <div className={classes.root} >

            <Button variant="contained" color="primary" onClick={start}>
                Start
            </Button>
            <Button variant="contained" color="primary" onClick={stop}>
                Stop
            </Button>
            <Button variant="contained" color="primary" onClick={pause}>
                Pause
            </Button>
        <p></p>
        </div>

    )
};


export default TimerButton;