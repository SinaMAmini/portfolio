import * as React from 'react';
import './home.scss';
import {Card} from '../components/card';
import {ProjectInfo} from '../interfaces/project-info';

const projects: ProjectInfo[] = [
    {
        projectName: 'chess',
        pageLink: 'chess',
        frontendDevelopers: [{developerName: 'Sina Amini', developerLink: 'https://github.com/SinaMAmini'}],
        backendDevelopers: null,
        frontendTechnology: null,
        backendTechnology: null,
        sources: [{sourceName: 'github', sourceLink: 'https://github.com/SinaMAmini/chess'}],
        about: 'It was my first web app.',
    },
    {
        projectName: 'sweet-taste',
        pageLink: 'sweet-taste',
        frontendDevelopers: [
            {developerName: 'Sara Feizi', developerLink: 'https://github.com/sarafeizi'},
            {developerName: 'Sina Amini', developerLink: 'https://github.com/SinaMAmini'},
        ],
        backendDevelopers: [{developerName: 'Sina Amini', developerLink: 'https://github.com/SinaMAmini'}],
        frontendTechnology: 'React',
        backendTechnology: 'NodeJS',
        sources: [{sourceName: 'github', sourceLink: 'https://github.com/SinaMAmini/sweet-taste'}],
        about: "It was my first team project. In front I've connected APIs.",
    },
    {
        projectName: 'NG Store',
        pageLink: 'https://star-academy.github.io/Summer1401-FE-Team05/',
        frontendDevelopers: [
            {developerName: 'Hessam A. Cheraghi', developerLink: 'https://github.com/HessamCheraghi'},
            {developerName: 'Sina Amini', developerLink: 'https://github.com/SinaMAmini'},
        ],
        backendDevelopers: [{developerName: 'BijanProgrammer', developerLink: 'https://github.com/BijanProgrammer'}],
        frontendTechnology: 'Angular',
        backendTechnology: 'NodeJS',
        sources: [
            {sourceName: 'frontend', sourceLink: 'https://github.com/Star-Academy/Summer1401-FE-Team05'},
            {sourceName: 'backend', sourceLink: 'https://github.com/BijanProgrammerWebsites/api-games'},
        ],
        about: 'This project was built by pair programming.',
    },
    {
        projectName: 'Data Gate',
        pageLink: '#',
        frontendDevelopers: [
            {developerName: 'Ata!', developerLink: 'https://github.com/AtaReversei'},
            {developerName: 'Maryam Sadat Razavi Taheri', developerLink: 'https://github.com/msrazavi'},
            {developerName: 'Sina Amini', developerLink: 'https://github.com/SinaMAmini'},
        ],
        backendDevelopers: [
            {developerName: 'Mahdi Montazer', developerLink: 'https://github.com/M79Montazer'},
            {developerName: 'Arya Jalali', developerLink: 'https://github.com/nothatcreative5'},
            {developerName: 'DnyaNvB', developerLink: 'https://github.com/DnyaNvB'},
            {developerName: 'Marzie Afshar', developerLink: 'https://github.com/marzieafshar'},
        ],
        frontendTechnology: 'Angular',
        backendTechnology: 'ASP.NET',
        sources: [{sourceName: 'github', sourceLink: 'https://github.com/Star-Academy/Summer1401-Project-Team01'}],
        about: "It's my greatest project with complex frontend & backend.",
    },
    {
        projectName: 'chart',
        pageLink: 'https://sinamamini.github.io/chart/',
        frontendDevelopers: [{developerName: 'Sina Amini', developerLink: 'https://github.com/SinaMAmini'}],
        backendDevelopers: null,
        frontendTechnology: 'React',
        backendTechnology: null,
        sources: [{sourceName: 'github', sourceLink: 'https://github.com/SinaMAmini/chart'}],
        about: 'It was my test project for hiring.',
    },
];

type homeProps = {
    setShowDialog: (showDialog: boolean) => void;
    setDialogProject: any;
};

export const Home = ({setShowDialog, setDialogProject}: homeProps) => {
    return (
        <div className="projects-container">
            {projects.map((project) => {
                return (
                    <Card
                        key={project.projectName}
                        project={project}
                        setShowDialog={setShowDialog}
                        setDialogProject={setDialogProject}
                    ></Card>
                );
            })}
        </div>
    );
};
