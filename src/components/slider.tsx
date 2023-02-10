import * as React from 'react';
import './slider.scss'

type Props = {
    images: string[];
};

export const Slider = ({images}: Props) => {
    return (
        <div className="slider">
            <h2>hey there! It's Slider!</h2>
        </div>
    );
};
