import React from 'react';

export default function About() {

    let about = `I got started in software with the classic high school Java class that left me thinking I'd never code again.
\nFrom there I followed my dreams, became a professional pianist, earning a doctorate and a Carnegie Hall Juilliard fellowship on the way.
\n I started getting back into code while working with Max/MSP in graduate school, a multimedia visual programing interface that allowed me
to build audio processors for my own live playing.I couldn't shake the itch and started learning fullstack technologies on the side.\n
Thanks for stopping by. Shoot me an email with any questions you may have.`

    return (
        <div className="About" id="About">
            <h3 className="About-title">About Me</h3>
            <h4 className="About-body">
                {about}
            </h4>
        </div>
        )
}