import React from 'react';
import './App.css';
import './Resources/CSS/LandingPage.css';
import './Resources/CSS/PageTitle.css';
import './Resources/CSS/About.css';
import './Resources/CSS/Contact.css';
import './Resources/CSS/Footer.css';
import './Resources/CSS/Projects.css';
import './Resources/CSS/SidebarNav.css';
import './Resources/CSS/Socials.css';
import './Resources/CSS/EmailForm.css';
import './Resources/CSS/Headshot.css';
import './Resources/CSS/Music.css';

import LandingPage from './Components/LandingPage';

function App() {
  return (
    <div className="App">
        <LandingPage/>
    </div>
  );
}

export default App;
