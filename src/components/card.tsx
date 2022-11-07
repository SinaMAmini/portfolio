import * as React from 'react';
import {ProjectInfo} from '../interfaces/project-info';
import './card.scss';

type ProjectInfoType = {
    project: ProjectInfo;
    setShowDialog: (showDialog: boolean) => void;
    setDialogProject: any;
};

export const Card = ({project, setShowDialog, setDialogProject}: ProjectInfoType) => {
    const showDialog = (project: ProjectInfo) => {
        setShowDialog(true);
        setDialogProject(project);
    };

    return (
        <div className="card" onClick={() => showDialog(project)}>
            <a href={project.pageLink}>{project.projectName}</a>
            <p className="about">{project.about}</p>
        </div>
    );
};
