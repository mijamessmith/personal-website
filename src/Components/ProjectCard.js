import React from "react";

export default function ProjectCard(props) {
    var { title, link, description } = props;

    return (
        <div className="ProjectCard">
            <div className="ProjectCard-title">{title }</div>
            <div className="ProjectCard-description">{description}</div>
            <div className="ProjectCard-link"><a href={link}>{link}</a></div>
        </div>
        )
}