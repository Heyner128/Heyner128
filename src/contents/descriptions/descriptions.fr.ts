import type { Descriptions } from "./type";

export const data: Descriptions = {
    personalInfo: {
        name: "Heyner Cuevas",
        title: "Développeur Logiciel",
        location: "Tours, France",
        email: "heyner128@gmail.com",
        github: "https://github.com/heyner128",
        linkedin: "https://www.linkedin.com/in/heyner-cuevas/",
        profileDescription: `Je suis un développeur logiciel avec trois ans d'expérience dans la conception, le codage et le test de solutions pour l'industrie manufacturière en utilisant Java et React. Engagé dans la qualité et l'apprentissage continu de nouvelles technologies et méthodologies de travail.`,
    },

    workExperience: [
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
    ],

    education: [
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
    ],

    skills: {
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
    },

    projects: [
        {
            title: "Net Zero Carbon Emissions",
            github: "https://github.com/rishikesh2003/Prodigi",
            description: [
                "WiFi-RTT: Développement du suivi d'occupation intérieure pour l'optimisation énergétique.",
                "Solutions IoT: Implémentation d'une surveillance intelligente pour l'efficacité énergétique et la réduction du gaspillage alimentaire.",
                "Suivi en temps réel: Conception de systèmes pour surveiller les émissions de carbone et optimiser les ressources.",
                "Analyses basées sur les données: Analyse des comportements utilisateurs pour une gestion adaptative de l'énergie et de l'alimentation.",
                "Intégration de récompenses: Création d'un système de points écologiques basé sur QR pour encourager les actions respectueuses de l'environnement.",
            ],
        },
        {
            title: "Mental Aarog",
            github: "https://github.com/rishikesh2003/mental-aarog",
            description: [
                "Une application holistique pour la santé mentale utilisant l'IA et la blockchain pour la détection précoce et des solutions personnalisées contre la dépression.",
                "Les fonctionnalités comprennent l'analyse des réseaux sociaux (suivi des sentiments basé sur le ML), évaluations PHQ-9, intégration de montres connectées pour les données de sommeil et d'activité, méditation guidée, et suggestions intelligentes pour la nourriture, les voyages, la musique et les films.",
                "Développement d'un système de récompenses utilisant le crypto-jeton MAG sur Ethereum, permettant l'engagement des utilisateurs grâce à des incitations dans l'application.",
                "Stockage sécurisé implémenté via web3.storage, IPFS, et FileCoin.",
                "Construit avec React, Supabase, Node.js, Flask et Solidity, démontrant une intégration harmonieuse de la technologie de santé et de la blockchain.",
            ],
        },
    ],
};
