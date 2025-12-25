import type { Descriptions } from "./type";

export const personalInfo: Descriptions['personalInfo'] = {
    name: "Heyner Cuevas",
    title: "Développeur Logiciel",
    location: "Tours, France",
    email: "heyner128@gmail.com",
    github: "https://github.com/heyner128",
    linkedin: "https://www.linkedin.com/in/heyner-cuevas/",
    profileDescription: `Je suis un développeur logiciel avec trois ans d'expérience dans la conception, le codage et le test de solutions pour l'industrie manufacturière en utilisant Java et React. Engagé dans la qualité et l'apprentissage continu de nouvelles technologies et méthodologies de travail.`,
};

export const workExperience: Descriptions['workExperience'] = [
    {
        company: "SKF France",
        location: "Saint-Cyr-sur-Loire, France",
        position: "Développeur Logiciel",
        period: "Fév 2022 - Déc 2022",
        achievements: [
            "Développement d'un site web pour gérer les commandes d'emballage de roulements",
            "Développement d'une API pour la gestion des informations de référence de production",
            "Conception de tests unitaires et d'intégration",
            "Automatisation des flux de travail et du traitement des données",
        ],
    },
    {
        company: "SKF France",
        location: "Saint-Cyr-sur-Loire, France",
        position: "Stagiaire Développeur Logiciel",
        period: "Mar 2021 - Déc 2021",
        achievements: [
            "Développement d'une base de données et d'une interface graphique pour la gestion des données qualité",
            "Développement de tableaux de bord et de visualisations de données",
            "Documentation, support et maintenance des applications développées",
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
        period: "Sep 2019 - Sep 2021",
    },
];

export const skills: Descriptions['skills'] = {
    programmingLanguages: ["TypeScript", "JavaScript", "Python", "Java"],
    frontendDevelopment: ["Angular", "React", "Tailwind CSS", "HTML", "CSS"],
    backendDevelopment: [
        "Spring Boot",
        "Spring MVC",
        "Spring Security",
        "Spring Data JPA/JDBC",
        "Spring Batch",
        "Quarkus",
    ],
    databaseAndStorage: [
        "MySQL",
        "PostgreSQL",
        "Hibernate",
        "Microsoft SQL Server",
    ],
    cloudAndDevOps: [
        "Azure",
        "Cloudflare Tunnels",
        "Cloudflare Zero-Trust",
        "Azure DevOps",
        "Github Actions",
    ],
    toolsAndServices: [
        "Docker",
        "Git",
        "Ubuntu",
        "RedHat Enterprise Linux",
        "Visual Studio Code",
        "IntelliJ IDEA",
    ],
};

export const projects: Descriptions["projects"] = [
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
        site: "https://rtmp.heyner.me",
        github: "https://github.com/heyner128/rtmp",
        description: `Une implementation du protocole RTMP en Go.`,
        bullets: [
            "Capable de recevoir flux de video des clients RTMP les plus utilisés",
            "70% couverture des tests",
        ],
    }
];

export const blogPageDescription = "Ici, j'écris sur tout dans la vie, des réflexions et idées aléatoires, ainsi que sur des sujets techniques.";

