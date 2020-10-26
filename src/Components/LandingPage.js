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


export default function LandingPage() {
    return (
        <div className="LandingPage">
            <div className="LandingPage-header-container">
                <PageTitle />
                <SidebarNav />
                <Socials />
            </div>
            <Headshot />
            <About />
            <Projects />
            <Contact />
            <EmailForm/>
    
            <Footer />
        </div>
        )
}
