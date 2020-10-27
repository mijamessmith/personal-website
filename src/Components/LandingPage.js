import React from 'react';
import PageTitle from './PageTitle';
import SidebarNav from './SidebarNav';
import Contact from './Contact';
import Projects from './Projects';
import Socials from './Socials';
import About from './About';
import Footer from "./Footer";
import EmailForm from "./EmailForm";
import Headshot from "./Headshot";
import Music from "./Music"

export default function LandingPage() {
    return (
        <div className="LandingPage">
            <div className="LandingPage-header-container">
                <PageTitle />
                <SidebarNav />
            </div>
            <Headshot />
            <About />
            <Projects />
            <Music />
            <Contact />
            <EmailForm/>
    
            <Footer />
        </div>
        )
}
