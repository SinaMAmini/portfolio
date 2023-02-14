import * as React from 'react';
import './image-slider.scss';
import Slider from 'react-touch-drag-slider';
import {useEffect, useState} from 'react';

type Props = {
    images: string[];
};

export const ImageSlider = ({images}: Props) => {
    let [imageIndex, setImageIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            if (imageIndex < images.length) setImageIndex(imageIndex++);
            else setImageIndex(0);
        }, 2000);

        return () => clearInterval(interval);
    });
    return (
        <div className="slider">
            <Slider activeIndex={imageIndex} threshHold={100} transition={0.5} scaleOnDrag={true}>
                {images.map((image, index) => (
                    <img src={image} key={index} alt="project image" />
                ))}
            </Slider>
        </div>
    );
};
