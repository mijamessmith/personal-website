import React from 'react';
import ProjectCard from './ProjectCard';

export default function Projects() {
    var ProjectInfo = [
        {
            title: "Spotind",
            link: "https://github.com/mijamessmith/spotind" ,
            description: "A randomized Spotify Playlist Generator"
        },
        {
            title: "Music-Links",
            link: "https://github.com/mijamessmith/music-links",
            description: "A simple spot for teachers and students"
        },
        {
            title: "HWDYKM",
            link: "https://github.com/mijamessmith/spotind",
            description: "How Well Do you Know Me"
        },
       
    ]




    return (
        <div className="Projects" id="Projects">
            <h3 className="Projects-title">Projects</h3>
            <div className="Projects-body">
                <ProjectCard title={ProjectInfo[0].title} description={ProjectInfo[0].description} link={ProjectInfo[0].link } />
                <ProjectCard title={ProjectInfo[1].title} description={ProjectInfo[1].description} link={ProjectInfo[1].link } />
                <ProjectCard title={ProjectInfo[2].title} description={ProjectInfo[2].description} link={ProjectInfo[2].link } />
              
            </div>
        </div>
        )
}