export interface ProjectInfo {
    projectName: string;
    pageLink: string;
    frontendDevelopers: Developer[] | null;
    backendDevelopers: Developer[] | null;
    frontendTechnology: string | null;
    backendTechnology: string | null;
    sources: Source[] | null;
    about: string | null;
}

interface Developer {
    developerName: string;
    developerLink: string;
}

interface Source {
    sourceName: string;
    sourceLink: string;
}
