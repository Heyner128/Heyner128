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

export const projects: Descriptions["projects"] = [
    {
        title: "Stashless",
        site: "https://stashless.heyner.me",
        github: "https://github.com/heyner128/Stashless",
        description: `Stashless es un sistema ligero de gestión de inventario diseñado para ayudar a las pequeñas empresas a realizar un seguimiento de sus niveles de stock.`,
        bullets: [
            "Supervisar los niveles de stock en tiempo real",
            "Crear y gestionar productos y variantes",
            "Cada usuario tiene inventarios y productos ilimitados",
        ],
    },
    {
        title: "RTMP",
        site: "https://rtmp.heyner.me",
        github: "https://github.com/heyner128/rtmp",
        description: `Una implementación del protocolo RTMP usando Go`,
        bullets: [
            "Puede recibir video de los clientes RTMP mas populares",
            "70% covertura de pruebas",
        ],
    }
];

export const blogPageDescription = "Aquí escribo sobre todo en la vida, pensamientos e ideas aleatorias, y algunos temas técnicos.";