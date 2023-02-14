import * as React from 'react';
import './flying-bird.scss'

export const FlyingBird = () => {
    function goToSource() {
        window.open("https://codepen.io/guestn/pen/nYMoJJ","_blank")
    }

    return (
        <div id="picture-frame" onClick={() => goToSource()}>
            <div id="bird">
                <div id="body2"></div>
                <div id="body1"></div>
                <div id="wing-l"></div>
                <div id="wing-r"></div>
            </div>
        </div>
    );
};