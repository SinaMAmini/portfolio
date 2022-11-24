import * as React from 'react';
import {ProjectInfo} from '../interfaces/project-info';
import './project-section.scss';
import {Slider} from './slider';

type Props = {
    project: ProjectInfo;
};

export function ProjectSection({project}: Props) {
    return (
        <div className="project-section">
            <h2>
                <a href={project?.pageLink}>{project?.projectName}</a>
            </h2>
            <Slider images={project.images}/>
            <b>Frontend Developers: </b>
            <div className="front-devs-container">
                {project?.frontendDevelopers?.map((developer) => (
                    <a key={developer.developerLink} href={developer.developerLink}>
                        {developer.developerName}
                    </a>
                ))}
            </div>

            <b>Backend Developers: </b>
            <div className="back-devs-container">
                {project?.backendDevelopers?.map((developer) => (
                    <a key={developer.developerLink} href={developer.developerLink}>
                        {developer.developerName}
                    </a>
                ))}
            </div>

            <b>Frontend Technology: </b>
            <span>{project?.frontendTechnology}</span>

            <b>Backend Technology</b>
            <span>{project?.backendTechnology}</span>

            <b>Sources: </b>
            <div className="sources-container">
                {project?.sources?.map((source) => (
                    <a key={source.sourceLink} href={source.sourceLink}>
                        {source.sourceName}
                    </a>
                ))}
            </div>

            <b>About: </b>
            <p>{project?.about}</p>
        </div>
    );
}
