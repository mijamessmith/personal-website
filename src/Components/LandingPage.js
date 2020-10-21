import React from 'react';
import PageTitle from './PageTitle';
import SidebarNav from './SidebarNav';
import Contact from './Contact';
import Projects from './Projects';
import Socials from './Socials';
import About from './About';
import Footer from "./Footer";
import EmailForm from "./EmailForm";


export default function LandingPage() {
    return (
        <div className="LandingPage">
            <PageTitle />
            <SidebarNav />
            <About />
            <Projects />
            <Contact />
            <EmailForm/>
            <Socials />
            <Footer />
        </div>
        )
}
