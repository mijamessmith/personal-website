import React from 'react';
import Socials from "./Socials"

export default function SidebarNav() {
    return (
        <div className='SidebarNav'>
            <ul className='SidebarNav-ul'>
                <li href=''><a href="#About">About</a></li>
                <li href=''><a href="#Projects">Work</a></li>
                <li href=''><a href="#Music">Music</a></li>
                <li href=''><a href="#Contact">Contact</a></li>
            </ul>
            <div>
                <Socials />

            </div>
        </div>
        )
}