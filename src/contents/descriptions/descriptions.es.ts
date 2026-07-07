import type { Descriptions } from "./type";

export const personalInfo: Descriptions['personalInfo'] = {
    name: "Heyner Cuevas",
    title: "Desarrollador de Software",
    location: "Lyon, Francia",
    email: "heyner128@gmail.com",
    github: "https://github.com/heyner128",
    linkedin: "https://www.linkedin.com/in/heyner-cuevas/",
    profileDescription: `Desarrollador de software con más de 4 años de experiencia construyendo sistemas de manufactura e industriales. Enfocado en entregar soluciones backend resilientes y sistemas de ejecución personalizados para clientes empresariales.`,
};

export const workExperience: Descriptions['workExperience'] = [
    {
        company: "Astrée Software",
        location: "Lyon, Francia",
        position: "Desarrollador de Software",
        period: "Jun 2025 - Presente",
        achievements: [
            "Entrega de sistemas de ejecución de manufactura personalizados para más de 20 clientes",
            "Desarrollo de interfaces de integración ERP con 0% de pérdida de datos y transmisión en tiempo casi real",
            "Traducción y desarrollo de requisitos de manufactura personalizados",
            "Colaboración en un equipo de 6 personas con metodología ágil y programación extrema",
        ],
    },
    {
        company: "SKF France",
        location: "Tours, Francia",
        position: "Desarrollador de Software",
        period: "Feb 2022 - Dic 2024",
        achievements: [
            "Líder técnico del equipo de automatización de flujos de trabajo empresariales",
            "Desarrollo de un sistema de ejecución de manufactura personalizado para 3 líneas de empaque",
            "Diseño e implementación de un prototipo de modelo de machine learning para mantenimiento predictivo",
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
        description: `Stashless es un sistema ligero de gestión de inventario diseñado para ayudar a las pequeñas empresas a realizar un seguimiento de sus niveles de stock.`,
        bullets: [
            "Supervisar los niveles de stock en tiempo real",
            "Crear y gestionar productos y variantes",
            "Cada usuario tiene inventarios y productos ilimitados",
        ],
    },
    {
        title: "RTMP",
        github: "https://github.com/heyner128/rtmp",
        description: `Una implementación del protocolo RTMP usando Go`,
        bullets: [
            "Puede recibir video de los clientes RTMP mas populares",
            "70% covertura de pruebas",
        ],
    }
];

export const blogPageDescription = "Aquí escribo sobre todo en la vida, pensamientos e ideas aleatorias, y algunos temas técnicos.";