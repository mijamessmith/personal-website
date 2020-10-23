import React from 'react';
import HeadshotImg from '../Resources/Images/casualHeadShot.jpg'

export default function Headshot() {
    return (
        <div className="Headshot" id="Headshot">
            <div className="Headshot-Container">
                <img src={HeadshotImg} />
            </div>
        </div>
    )
}
