import React from 'react';
import twitterImg from "../Resources/Images/twitter.svg";
import githubImg from "../Resources/Images/github.svg";


export default function Socials() {
    return (
        <div className='Socials' id="Socials">
            <a href="https://twitter.com/michaelCP17"><img src={twitterImg} alt="twitter icon" height="100" width="100" /></a>
            <a href="https://github.com/mijamessmith"><img src={githubImg} alt="github icon" height="100" width="100" /></a>
        </div>
        )
}