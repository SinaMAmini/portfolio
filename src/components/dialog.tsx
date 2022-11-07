import * as React from 'react';
import './dialog.scss';
import {ProjectInfo} from '../interfaces/project-info';

type dialogProp = {
    project: ProjectInfo | null;
    showDialog: boolean;
    setShowDialog: (showDialog: boolean) => void;
};

export function Dialog({project, showDialog, setShowDialog}: dialogProp) {
    const escDialog = () => {
        setShowDialog(false);
    };

    return (
        <div className="dialog-container" style={{display: showDialog ? 'block' : 'none'}} onClick={() => escDialog()}>
            <div className="dialog">
                <h5>Name: </h5>
                <a href={project?.pageLink}>{project?.projectName}</a>

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
        </div>
    );
}
