import type { Descriptions } from "./type";

export const personalInfo: Descriptions['personalInfo'] = {
    name: "Heyner Cuevas",
    title: "Desarrollador de Software",
    location: "Tours, Francia",
    email: "heyner128@gmail.com",
    github: "https://github.com/heyner128",
    linkedin: "https://www.linkedin.com/in/heyner-cuevas/",
    profileDescription: `Soy un desarrollador de software con tres años de experiencia en el diseño, codificación y prueba de soluciones para la industria manufacturera utilizando Java y React. Comprometido con la calidad y el aprendizaje continuo de nuevas tecnologías y metodologías de trabajo.`,
};

export const workExperience: Descriptions['workExperience'] = [
    {
        company: "SKF France",
        location: "Saint-Cyr-sur-Loire, Francia",
        position: "Desarrollador de Software",
        period: "Feb 2022 - Dic 2022",
        achievements: [
            "Desarrollo de un sitio web para gestionar pedidos de embalaje de rodamientos",
            "Desarrollo de una API para la gestión de información de referencia de producción",
            "Diseño de pruebas unitarias y de integración",
            "Automatización de flujos de trabajo y procesamiento de datos",
        ],
    },
    {
        company: "SKF France",
        location: "Saint-Cyr-sur-Loire, Francia",
        position: "Practicante Desarrollador de Software",
        period: "Mar 2021 - Dic 2021",
        achievements: [
            "Desarrollo de una base de datos y una interfaz gráfica para la gestión de datos de calidad",
            "Desarrollo de tableros de control y visualizaciones de datos",
            "Documentación, soporte y mantenimiento de aplicaciones desarrolladas",
        ],
    },
];

export const education: Descriptions['education'] = [
    {
        institution: "INSA Centre Val de Loire",
        location: "Blois, Francia",
        degree: "Máster en Ingeniería Industrial",
        period: "Sep 2019 - Sep 2021",
    },
    {
        institution: "Universidad Nacional de Colombia",
        location: "Bogotá, Colombia",
        degree: "Ingeniería Industrial",
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
        title: "Net Zero Carbon Emissions",
        github: "https://github.com/rishikesh2003/Prodigi",
        description: [
            "WiFi-RTT: Desarrollo de seguimiento de ocupación interior para optimización energética.",
            "Soluciones IoT: Implementación de monitorización inteligente para eficiencia energética y reducción del desperdicio alimentario.",
            "Seguimiento en tiempo real: Diseño de sistemas para monitorizar emisiones de carbono y optimizar recursos.",
            "Análisis basados en datos: Análisis de comportamientos de usuarios para gestión adaptativa de energía y alimentación.",
            "Integración de recompensas: Creación de un sistema de puntos ecológicos basado en QR para fomentar acciones respetuosas con el medio ambiente.",
        ],
    },
    {
        title: "Mental Aarog",
        github: "https://github.com/rishikesh2003/mental-aarog",
        description: [
            "Una aplicación holística para la salud mental utilizando IA y blockchain para la detección temprana y soluciones personalizadas contra la depresión.",
            "Las funcionalidades incluyen análisis de redes sociales (seguimiento de sentimientos basado en ML), evaluaciones PHQ-9, integración con relojes inteligentes para datos de sueño y actividad, meditación guiada, y sugerencias inteligentes para comida, viajes, música y películas.",
            "Desarrollo de un sistema de recompensas utilizando el token criptográfico MAG en Ethereum, permitiendo la participación de usuarios mediante incentivos en la aplicación.",
            "Almacenamiento seguro implementado a través de web3.storage, IPFS y FileCoin.",
            "Construido con React, Supabase, Node.js, Flask y Solidity, demostrando una integración armoniosa de tecnología de salud y blockchain.",
        ],
    },
];
