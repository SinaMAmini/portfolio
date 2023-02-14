import * as React from 'react';
import {ProjectInfo} from '../interfaces/project-info';
import './project-section.scss';
import {ImageSlider} from './image-slider';

type Props = {
    project: ProjectInfo;
};

export function ProjectSection({project}: Props) {
    console.log(project);
    return (
        <div className="project-section">
            <h2>
                <a href={project?.pageLink}>{project?.projectName}</a>
            </h2>

            <ImageSlider images={project.images} />

            {project.frontendDevelopers && <h5>Frontend Developers: </h5>}
            {project.frontendDevelopers && (
                <div className="front-devs-container">
                    {project?.frontendDevelopers?.map((developer) => (
                        <a key={developer.developerLink} href={developer.developerLink}>
                            {developer.developerName}
                        </a>
                    ))}
                </div>
            )}
            {project.backendDevelopers && <h5>Backend Developers: </h5>}
            {project.backendDevelopers && (
                <div className="back-devs-container">
                    {project?.backendDevelopers?.map((developer) => (
                        <a key={developer.developerLink} href={developer.developerLink}>
                            {developer.developerName}
                        </a>
                    ))}
                </div>
            )}
            {project.frontendTechnology && <h5>Frontend Technology: </h5>}
            {project.frontendTechnology && <span className="technology">{project?.frontendTechnology}</span>}

            {project.backendTechnology && <h5>Backend Technology</h5>}
            {project.backendTechnology && <span className="technology">{project?.backendTechnology}</span>}

            <h5>Sources: </h5>
            <div className="sources-container">
                {project?.sources?.map((source) => (
                    <a key={source.sourceLink} href={source.sourceLink}>
                        {source.sourceName}
                    </a>
                ))}
            </div>
            <h5>About: </h5>
            <p>{project?.about}</p>
        </div>
    );
}
