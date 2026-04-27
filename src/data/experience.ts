export type Experience = {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  companyProfile?: string;
  location: string;
  type: "Full-time" | "Part-time" | "Internship" | "Freelance" | "Contract";
  start: string;
  end?: string;
  summary: string;
  description: string[];
  tech: string[];
};

export const experiences: Experience[] = [
  {
    id: "sprintasia",
    role: "Full-stack Engineer",
    company: "PT Sprint Asia Technology",
    location: "Jakarta, Indonesia",
    type: "Full-time",
    start: "2024-08-05",
    companyProfile: "Sprint Asia is an integrated business solutions provider that enables companies to build effective customer communication across channels like messaging, chatbots, live chat, and WhatsApp Business API. Its unified and intelligent platform helps businesses improve engagement, retention, and conversion more efficiently. With features such as chatbot automation, omnichannel support, and digital vouchers, Sprint Asia supports scalable business growth.",
    summary: "Building and scaling a messaging platform used by millions — spanning backend services, feature development, and legacy migration.",
    description: [
      "Developed and maintained a messaging platform used by millions of users, ensuring high performance and reliability.",
      "Implemented new features and optimized existing ones to enhance user experience and engagement.",
      "Collaborated with cross-functional teams to design and deliver scalable solutions that met business requirements.",
      "Provided technical support and troubleshooting for production issues, ensuring minimal downtime and quick resolution.",
      "Contributed to the migration of legacy systems to modern technologies, improving scalability and maintainability.",
      "Participated in code reviews and implemented best practices to maintain code quality and consistency across the project.",
      "Assisted in the deployment and monitoring of applications, ensuring high availability and reliability for users.",
    ],
    tech: ["PHP", "Go", "Laravel", "MySQL", "Redis", "DevOps"],
  },
  {
    id: "asosiation-asuransi-jiwa-indonesia",
    role: "Full-Stack Developer",
    company: "Asosiasi Asuransi Jiwa Indonesia (AAJI)",
    location: "Jakarata, Indonesia",
    type: "Part-time",
    start: "2023-01-01",
    end: "2023-05-31",
    summary: "Developed a Certificate Management System serving 50+ insurance companies across Indonesia, handling full-stack development and end-user support.",
    description: [
      "Developed and maintained Certificate Management System used by 50+ insurance companies across Indonesia.",
      "Implemented new features, fixed bugs, and optimized performance to ensure smooth operations.",
      "Collaborated with cross-functional teams to gather requirements and deliver solutions that met business needs.",
      "Provided technical support and training to end-users, ensuring they could effectively utilize the system.",
      "Contributed to the migration of legacy systems to modern technologies, improving scalability and maintainability.",
      "Participated in code reviews and implemented best practices to maintain code quality and consistency across the project.",
      "Assisted in the deployment and monitoring of applications, ensuring high availability and reliability for users.",
    ],
    tech: ["PHP", "Laravel", "CodeIgniter", "MySQL", "Flutter", "React Native", "DevOps"],
  },
  {
    id: "lab-assistant-2022",
    role: "Developer Assistant",
    company: "Gunadarma University",
    location: "Depok, Indonesia",
    type: "Part-time",
    start: "2022-08-01",
    end: "2023-01-01",
    summary: "Built internal tools for scheduling and academic management at the university lab, supporting lecturers and students.",
    description: [
      "Built and maintained internal tools to assist lecturers and students in managing academic activities.",
      "Developed a web-based application for scheduling and managing lab sessions, improving efficiency and organization.",
      "Provided technical support to students and faculty members, ensuring smooth operation of the tools and applications.",
      "Collaborated with the IT department to troubleshoot and resolve technical issues related to the lab's software and hardware infrastructure.",
      "Assisted in the development of a student information system, allowing for better tracking of student performance and academic records.",
      "Contributed to the implementation of security measures to protect sensitive data and ensure compliance with university policies.",
    ],
    tech: ["PHP", "Laravel", "CodeIgniter", "PostgreSQL", "JavaScript", "HTML/CSS"],
  },
];
