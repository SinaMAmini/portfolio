import * as React from 'react';
import './home.scss';
import {ProjectSection} from '../components/project-section';
import {projects} from "../data/project-data";


export const Home = () => {
    return (
        <div className="projects-container">
            {projects.map((project) => {
                return <ProjectSection key={project.projectName} project={project}></ProjectSection>;
            })}
        </div>
    );
};
