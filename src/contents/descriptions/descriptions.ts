import type { Descriptions } from "./type";

export const personalInfo: Descriptions['personalInfo'] = {
    name: "Heyner Cuevas",
    title: "Software Developer",
    location: "Lyon, France",
    email: "heyner128@gmail.com",
    github: "https://github.com/heyner128",
    linkedin: "https://www.linkedin.com/in/heyner-cuevas/",
    profileDescription: `Software developer with 4+ years of experience building manufacturing and industrial systems. Focused on delivering resilient backend solutions and custom execution systems for enterprise clients.`,
};

export const workExperience: Descriptions['workExperience'] = [
    {
        company: "Astrée Software",
        location: "Lyon, France",
        position: "Software Developer",
        period: "Jun 2025 - Present",
        achievements: [
            "Shipped custom manufacturing execution systems for more than 20 clients",
            "Developed resilient ERP import/export integration interfaces with 0% data loss and near real-time transmission",
            "Translation and development of custom manufacturing requirements",
            "Collaboration in a 6-member team using agile and extreme programming, driving code reviews and architectural decisions",
        ],
    },
    {
        company: "SKF France",
        location: "Tours, France",
        position: "Software Developer",
        period: "Feb 2022 - Dec 2024",
        achievements: [
            "Technical lead of the business workflows automation team",
            "Development of a fully customized manufacturing execution system for 3 packaging lines",
            "Designed and implemented a proof of concept for a predictive maintenance machine learning model",
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
        description: `Stashless is a lightweight inventory management system designed to help small businesses, to track their stock levels.`,
        bullets: [
            "Monitor stock levels in real-time",
            "Create and manage products and variants",
            "Each user has unlimited inventories and products",
        ],
    },
    {
        title: "RTMP",
        github: "https://github.com/heyner128/rtmp",
        description: `An implementation of the RTMP protocol in Go.`,
        bullets: [
          "Can receive video from the most used RTMP clients",
          "70% test coverage",
        ],
    }
];

export const blogPageDescription = "Here i wrote about everything in life, random thoughts and ideas, and some technical stuff.";
