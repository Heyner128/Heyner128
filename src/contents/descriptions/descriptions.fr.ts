import type { Descriptions } from "./type";

export const personalInfo: Descriptions['personalInfo'] = {
    name: "Heyner Cuevas",
    title: "Développeur Logiciel",
    location: "Lyon, France",
    email: "heyner128@gmail.com",
    github: "https://github.com/heyner128",
    linkedin: "https://www.linkedin.com/in/heyner-cuevas/",
    profileDescription: `Développeur logiciel avec plus de 4 ans d'expérience dans la conception de systèmes industriels et manufacturiers. Spécialisé dans la livraison de solutions backend résilientes et de systèmes d'exécution personnalisés pour des clients entreprises.`,
};

export const workExperience: Descriptions['workExperience'] = [
    {
        company: "Astrée Software",
        location: "Lyon, France",
        position: "Développeur Logiciel",
        period: "Juin 2025 - Présent",
        achievements: [
            "Livraison de systèmes d'exécution de fabrication personnalisés pour plus de 20 clients",
            "Développement d'interfaces d'intégration ERP avec 0% de perte de données et transmission en quasi temps réel",
            "Traduction et développement d'exigences de fabrication personnalisées",
            "Collaboration dans une équipe de 6 personnes en méthodologie agile et programmation extrême",
        ],
    },
    {
        company: "SKF France",
        location: "Tours, France",
        position: "Développeur Logiciel",
        period: "Fév 2022 - Déc 2024",
        achievements: [
            "Leadership technique de l'équipe d'automatisation des flux de travail métier",
            "Développement d'un système d'exécution de fabrication entièrement personnalisé pour 3 lignes d'emballage",
            "Conception et implémentation d'un prototype de modèle de machine learning pour la maintenance prédictive",
        ],
    },
];

export const education: Descriptions['education'] = [
    {
        institution: "INSA Centre Val de Loire",
        location: "Blois, France",
        degree: "Master en Génie Industriel",
        period: "Sep 2019 - Sep 2021",
    },
    {
        institution: "Université Nationale de Colombie",
        location: "Bogota, Colombie",
        degree: "Génie Industriel",
        period: "Sep 2013 - Sep 2021",
    },
];

export const skills: Descriptions['skills'] = {
    programmingLanguages: ["TypeScript", "Java", "Go", "Python"],
    frontendDevelopment: ["Angular", "React"],
    backendDevelopment: ["Spring"],
    databaseAndStorage: [
        "PostgreSQL",
        "MySQL",
        "Hibernate",
        "Microsoft SQL Server",
    ],
    cloudAndDevOps: [
        "AWS",
        "Azure DevOps",
        "Github Actions",
    ],
    toolsAndServices: [
        "Docker",
        "Git",
        "IntelliJ IDEA",
        "Visual Studio Code",
    ],
    aiAndCodingAgents: [
        "Claude",
        "Claude Code",
        "GitHub Copilot",
        "Cursor",
    ],
};

export const projects: Descriptions['projects'] = [
    {
        title: "Stashless",
        site: "https://stashless.heyner.me",
        github: "https://github.com/heyner128/Stashless",
        description: `Stashless est un système de gestion d'inventaire léger conçu pour aider les petites entreprises à suivre leurs niveaux de stock.`,
        bullets: [
            "Surveiller les niveaux de stock en temps réel",
            "Créer et gérer des produits et des variantes",
            "Chaque utilisateur dispose d'inventaires et de produits illimités",
        ],
    },
    {
        title: "RTMP",
        github: "https://github.com/heyner128/rtmp",
        description: `Une implementation du protocole RTMP en Go.`,
        bullets: [
            "Capable de recevoir flux de video des clients RTMP les plus utilisés",
            "70% couverture des tests",
        ],
    }
];

export const blogPageDescription = "Ici, j'écris sur tout dans la vie, des réflexions et idées aléatoires, ainsi que sur des sujets techniques.";

