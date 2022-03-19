import React from 'react';

export const HearQuoteButton = () => {
    let audio = new Audio('/audio.mp3');
    const start = () => {
        audio.play();
    }

    return (
        <button onClick={start}>Hear Quote</button>
    );
};

