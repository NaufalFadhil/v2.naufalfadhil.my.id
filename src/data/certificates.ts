export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  tags: string[];
  image?: string;
};

export const certificates: Certificate[] = [
  {
    id: "aws-cloud-practitioner",
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024-03-01",
    credentialId: "AWS-CP-2024",
    tags: ["Cloud", "AWS", "DevOps"],
  },
  {
    id: "google-ux-design",
    title: "Google UX Design Certificate",
    issuer: "Google",
    date: "2023-11-01",
    tags: ["Design", "UX"],
  },
  {
    id: "dicoding-backend",
    title: "Backend Development with Node.js",
    issuer: "Dicoding",
    date: "2023-08-01",
    tags: ["Backend", "Node.js"],
  },
  {
    id: "dicoding-react",
    title: "Building Web Apps with React",
    issuer: "Dicoding",
    date: "2023-05-01",
    tags: ["Frontend", "React"],
  },
  {
    id: "bangkit-ml",
    title: "Machine Learning Cohort",
    issuer: "Bangkit Academy (Google, GoTo, Traveloka)",
    date: "2023-01-01",
    tags: ["Machine Learning", "Python", "TensorFlow"],
  },
  {
    id: "coursera-algorithms",
    title: "Algorithms & Data Structures",
    issuer: "Coursera (Stanford University)",
    date: "2022-09-01",
    tags: ["CS Fundamentals", "Algorithms"],
  },
];
