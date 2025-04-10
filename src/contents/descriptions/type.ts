export type Descriptions = {
  personalInfo: {
    name: string;
    title: string;
    location: string;
    email: string;
    github: string;
    linkedin: string;
    profileDescription: string;
  };

  workExperience: Array<{
    company: string;
    location: string;
    position: string;
    period: string;
    achievements: string[];
  }>;

  education: Array<{
    institution: string;
    location: string;
    degree: string;
    period: string;
  }>;

  skills: {
    programmingLanguages: string[];
    frontendDevelopment: string[];
    backendDevelopment: string[];
    databaseAndStorage: string[];
    cloudAndDevOps: string[];
    toolsAndServices: string[];
  };

  projects: Array<{
    title: string;
    github: string;
    description: string[];
  }>;
};
