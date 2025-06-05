import type { Descriptions } from "./type";

export const personalInfo: Descriptions['personalInfo'] = {
    name: "Heyner Cuevas",
    title: "Software Developer",
    location: "Tours, France",
    email: "heyner128@gmail.com",
    github: "https://github.com/heyner128",
    linkedin: "https://www.linkedin.com/in/heyner-cuevas/",
    profileDescription: `I am a software developer with three years of experience designing, coding an testing solutions for the
manufacturing industry using Java and React. Engaged with the quality and the continuous learning of new
technologies and working methodologies.`,
};

export const workExperience: Descriptions['workExperience'] = [
    {
        company: "SKF France",
        location: "Saint-Cyr-sur-Loire, France",
        position: "Software Developer",
        period: "Feb 2022 - Dec 2022",
        achievements: [
            "Development of a website to manage bearing packaging orders",
            "Development of an API for managing production reference information",
            "Design of unit and integration tests",
            "Workflow and data processing automation",
        ],
    },
    {
        company: "SKF France",
        location: "Saint-Cyr-sur-Loire, France",
        position: "Software Developer Intern",
        period: "Mar 2021 - Dec 2021",
        achievements: [
            "Development of a database and a graphical interface for quality data management",
            "Development of dashboards and data visualizations",
            "Documentation, support and maintenance of the developed applications",
        ],
    },
];

export const education: Descriptions['education'] = [
    {
        institution: "INSA Centre Val de Loire",
        location: "Blois, France",
        degree: "Masters in Industrial Engineering",
        period: "Sep 2019 - Sep 2021",
    },
    {
        institution: "National University of Colombia",
        location: "Bogota, Colombia",
        degree: "Industrial Engineering",
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

export const projects: Descriptions['projects'] = [
    {
        title: "Stashless",
        site: "https://stashless.heyner.me",
        github: "https://github.com/heyner128/Stashless",
        description: `Stashless is a lightweight inventory management system designed to help small businesses, to track their stock levels.`,
        bullets: [
            "Monitor stock levels in real-time",
            "Create and manage products and variants",
            "Each user has unlimited inventories and products",
        ],
    },
];
