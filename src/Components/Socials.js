import React from 'react';
import twitterImg from "../Resources/Images/twitter.svg";
import githubImg from "../Resources/Images/githubBlk.svg";
import linkedInImg from "../Resources/Images/linkedin.svg"

export default function Socials() {
    return (
        <div className='Socials' id="Socials">
            <a href="https://https://www.linkedin.com/in/michael-smith-6b91953b"><img src={linkedInImg} alt="linkedin icon" height="60" width="60" /></a>
            <a href="https://twitter.com/michaelCP17"><img src={twitterImg} alt="twitter icon" height="60" width="60" /></a>
            <a href="https://github.com/mijamessmith"><img src={githubImg} alt="github icon" height="60" width="60" /></a>
        </div>
        )
}