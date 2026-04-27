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
    role: "Full-Stack Engineer Associate — Client Gateway Team",
    company: "PT Sprint Asia Technology",
    location: "Jakarta, Indonesia",
    type: "Full-time",
    start: "2024-08-05",
    companyProfile: "Sprint Asia is an integrated business solutions provider enabling companies to build effective customer communication across channels such as SMS, chatbots, live chat, and WhatsApp Business API. Its unified platform helps businesses improve engagement, retention, and conversion at scale.",
    summary: "Building and scaling an enterprise messaging platform handling high-volume SMS and WhatsApp delivery for hundreds of clients.",
    description: [
      "Built and maintained an **enterprise messaging platform** serving 500+ corporate clients across 1,600+ divisions, processing **500K+ requests per day**.",
      "Handled **enterprise messaging integrations** for major Indonesian banking clients using ISO 8583, SFTP, REST API, Pub/Sub, and WebSocket for secure and compliant delivery.",
      "Developed backend services using **PHP, Laravel, Go, Java Spring Boot, and Express.js**, leveraging Redis for caching and Kafka/RabbitMQ for asynchronous processing.",
      "Scaled system capacity through **horizontally distributed architecture** and improved performance by refactoring legacy services.",
      "Delivered **60+ features per year with zero-downtime deployments** in a production-critical environment.",
      "Diagnosed and resolved **production issues rapidly**, ensuring system stability and minimal service disruption.",
      "Maintained **technical documentation and system knowledge**, supporting team scalability and continuity."
    ],
    tech: ["PHP", "Go", "Laravel", "Java Spring Boot", "Express.js", "MySQL", "Redis", "Kafka", "RabbitMQ", "DevOps"],
  },
  {
    id: "great-giant-foods-gamification",
    role: "Game Developer — HR Gamification",
    company: "Great Giant Foods",
    location: "Indonesia",
    type: "Freelance",
    start: "2024-06-01",
    end: "2024-07-31",
    companyProfile: "Great Giant Foods (GGF) is the brand entity of Gunung Sewu Group for a leading vertically integrated food player that cultivates, manufactures, delivers fresh and processed fruits, juice, meat, and dairy. Each of GGF’s business units has been established with the principle of sustainable integrated farming. These allow the organization to have complete oversee across our entire supply chain.",
    summary: "Developed a gamification-based application to support HR engagement and internal training initiatives.",
    description: [
      "Built an **HR gamification application** to improve employee engagement and participation in internal programs.",
      "Designed and implemented **game mechanics and progression systems** aligned with HR objectives.",
      "Developed interactive features using **GDevelop**, focusing on usability and engagement.",
      "Collaborated with stakeholders to translate **HR requirements into interactive experiences**.",
      "Iterated on features based on feedback to ensure the application remained **engaging and effective**."
    ],
    tech: ["GDevelop"],
  },
  {
    id: "asosiation-asuransi-jiwa-indonesia",
    role: "Full-Stack Developer",
    company: "Asosiasi Asuransi Jiwa Indonesia (AAJI)",
    location: "Jakarta, Indonesia",
    type: "Contract",
    start: "2021-05-01",
    end: "2024-05-31",
    companyProfile: "Asosiasi Asuransi Jiwa Indonesia (AAJI) is the primary organization representing the life insurance and reinsurance industry in Indonesia. It serves as a platform for collaboration, advocacy, and professional development, while also acting as a partner to the government in supporting industry regulation and growth. AAJI is also responsible for administering certification and licensing for professional life insurance agents in Indonesia.",
    summary: "Built and maintained a certification and exam platform serving hundreds of insurance companies and hundreds of thousands of users across Indonesia.",
    description: [
      "Developed and maintained a **certification and exam platform** serving **162 corporate clients**, **1,370 admin users**, and **675K+ exam participants**.",
      "Handled **~400 exams per day** with **~20K question transactions daily**, ensuring consistent performance and reliability.",
      "Designed and implemented a **monolithic architecture** optimized for a small team, balancing development speed with long-term maintainability.",
      "Maintained **99.8% system uptime** while ensuring stable day-to-day operations.",
      "Reduced support issues by **~93% (from 15 to 1-2 cases/day)** through targeted optimizations and better resource handling.",
      "Translated business and operational needs into **clear technical implementations** aligned with existing systems.",
      "Provided **end-user support and troubleshooting**, ensuring smooth usage across non-technical stakeholders."
    ],
    tech: ["PHP", "Laravel", "CodeIgniter", "MySQL", "Flutter", "React Native", "DevOps"],
  },
  {
    id: "asosiasi-ahli-manajemen-asuransi-indonesia",
    role: "Web Developer — Exam & Membership Platform",
    company: "Asosiasi Ahli Manajemen Asuransi Indonesia",
    location: "Jakarta, Indonesia",
    type: "Freelance",
    start: "2024-02-01",
    end: "2024-05-31",
    companyProfile: "Asosiasi Ahli Manajemen Asuransi Indonesia (AAMAI) is an independent professional body in Indonesia’s insurance sector responsible for conducting certification and professional examinations for insurance practitioners. It focuses on developing qualified talent, maintaining industry standards, and supporting the growth of the insurance industry.",
    summary: "Built a platform to digitize exam, event, and membership workflows, replacing manual processes with an integrated system.",
    description: [
      "Built an **exam, event, and membership platform** to digitize previously manual processes and improve operational efficiency.",
      
      "Delivered **25 integrated features** within a 3-person team over 4 months, covering core business workflows end-to-end.",
      
      "Integrated **Xendit payment gateway** supporting one-time payments and recurring annual subscriptions.",
      
      "Designed and implemented **membership lifecycle management**, including registration, renewal billing, and payment status tracking.",
      
      "Ensured smooth system adoption by aligning features with **real operational needs** and existing workflows."
    ],
    tech: ["PHP", "Laravel", "MySQL", "Xendit", "JavaScript"],
  },
  {
    id: "kemendikbud-dikti",
    role: "Web Developer — Sistem Keuangan Kelembagaan DIKTI",
    company: "Kementerian Pendidikan dan Kebudayaan — Sikalem DIKTI",
    location: "Jakarta, Indonesia",
    type: "Freelance",
    start: "2022-08-01",
    end: "2023-08-31",
    companyProfile: "Sikalem DIKTI is a system under the Ministry of Education and Culture of Indonesia that supports institutional financial management processes, helping streamline reporting, monitoring, and administrative workflows within higher education institutions.",
    summary: "Improved performance and delivered continuous feature development for a government financial system used in institutional operations.",
    description: [
      "Refactored **legacy database queries**, reducing response time by **94%** and significantly improving staff productivity.",
      "Delivered **142 features and bug fixes** within a 3-person team over 12 months in a production system.",
      "Translated **user and operational requirements** into features that integrated smoothly with existing legacy systems.",
      "Continuously improved system usability and performance to support **day-to-day financial operations**."
    ],
    tech: ["PHP", "Laravel", "MySQL", "JavaScript"],
  },
  {
    id: "jaklingko-internship",
    role: "IT Developer Intern",
    company: "PT Jakarta Lingko Indonesia (JakLingko)",
    location: "Jakarta, Indonesia",
    type: "Internship",
    start: "2022-08-01",
    end: "2022-12-31",
    companyProfile: "PT JakLingko Indonesia is a regional state-owned enterprise (BUMD) responsible for integrating and managing public transportation systems in Jakarta. It focuses on improving mobility through unified digital platforms, operational coordination, and data-driven services, while adhering to strong governance principles to ensure transparency, accountability, and reliable public service delivery.",
    summary: "Worked on backend, frontend, and mobile systems to support scalable public transportation services.",
    description: [
      "Built and improved **backend services using Node.js and Express.js**, focusing on reliability and maintainability.",
      "Worked across **frontend and mobile development** using React.js and React Native to deliver user-facing features.",
      "Collaborated within a cross-functional team to **deliver end-to-end features** across multiple platforms.",
      "Executed **quality assurance and testing processes** to identify issues early and ensure stable releases.",
      "Debugged and resolved **application issues**, improving overall system stability and user experience."
    ],
    tech: ["Node.js", "Express.js", "React.js", "React Native", "JavaScript"],
  },
  {
    id: "kemendikbud-siaga-dikti",
    role: "Technical Support — Data Integration",
    company: "Kementerian Pendidikan dan Kebudayaan — Siaga DIKTI",
    location: "Jakarta, Indonesia",
    type: "Freelance",
    start: "2021-02-01",
    end: "2021-04-31",
    companyProfile: "Siaga DIKTI is a platform under the Ministry of Education and Culture of Indonesia designed to support academic and institutional operations, enabling better coordination, data management, and administrative efficiency across higher education systems.",
    summary: "Supported data integration processes for a government project by preparing structured data for system consumption.",
    description: [
      "Prepared and structured **JSON data** to support integration between internal systems and vendor platforms.",
      "Ensured **data consistency and correctness** to prevent downstream processing issues.",
      "Worked closely with team members to align data formats with **system requirements and integration needs**.",
      "Handled repetitive data tasks with attention to detail, ensuring **reliability in production usage**."
    ],
    tech: ["JSON"],
  },
  {
    id: "gunadarma-university-computing-center",
    role: "Developer Assistant",
    company: "Gunadarma University Computing Center (GUCC)",
    location: "Depok, Indonesia",
    type: "Part-time",
    start: "2020-11-01",
    end: "2024-05-01",
    companyProfile: "Gunadarma University Computing Center (GUCC) is the central IT unit of Gunadarma University responsible for developing, maintaining, and supporting internal academic systems and digital infrastructure used by students, lecturers, and administrative staff. GUCC plays a critical role in ensuring the smooth operation of academic and administrative processes through technology solutions.",
    summary: "Built and maintained internal university systems supporting academic operations, scheduling, and student data management.",
    description: [
      "Developed and maintained **internal academic systems** including student portals, graduation book generators, and scheduling tools to support university operations.",
      "Built a **web-based scheduling system** to manage assistant sessions, improving coordination and operational efficiency.",
      "Supported **lecturers and students** by ensuring systems ran reliably and were easy to use in day-to-day academic workflows.",
      "Collaborated with the IT Infrastructure Team to **troubleshoot and resolve system and infrastructure issues** across software and hardware environments.",
      "Contributed to **student information systems**, improving tracking of academic performance and records.",
      "Implemented **basic security practices** to protect sensitive academic data and align with university policies.",
      "Mentored junior assistants and contributed to **knowledge sharing**, improving overall team effectiveness."
    ],
    tech: ["PHP", "Laravel", "CodeIgniter", "PostgreSQL", "JavaScript", "HTML/CSS"],
  }
];
