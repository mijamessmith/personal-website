import React from "react";

export default function Music() {
    let musicBio = `Apart from software, I've also worked for years as a concert pianist. I've worked as a Carnegie Hall/Juilliard Fellow and was awarded a Doctorate in Music from Stonybrook University.\nCheck out some of my playing below`
    let videoDescriptions = "Live at National Sawdust, Brooklyn NY with Carnegie Hall's Ensemble Connect"
    let videoTitles = "Chamber Symphonie No.1 by Arnold Schoenberg, arranged by Anton Webern"
    return (
        <div className="Music">
            <h2 className="Music-title">Music</h2>
            <h4 className="Music-body">
                {musicBio}
            </h4>
            <div className="Music-videos">
                <ul className="Music-videos-description">
                    <li>{videoDescriptions}</li>
                    <li className="Music-videos-titles">{videoTitles}</li>    
                </ul>
                <iframe className="Music-videos-iframe" src="https://www.youtube.com/embed/KvtUkuE8gfY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>
        </div>
        )
}