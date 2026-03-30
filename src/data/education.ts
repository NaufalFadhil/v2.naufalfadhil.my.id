export type Education = {
  id: string;
  degree: string;
  major: string;
  institution: string;
  location: string;
  start: string;
  end?: string;
  gpa?: string;
  description?: string[];
  activities?: string[];
};

export const education: Education[] = [
  {
    id: "bachelor",
    degree: "Bachelor of Science",
    major: "Informatics Engineering",
    institution: "State University",
    location: "Indonesia",
    start: "2021-09-01",
    gpa: "3.75",
    description: [
      "Focusing on software engineering, algorithms, and distributed systems.",
      "Active member of the computer science student organization.",
    ],
    activities: [
      "Computer Science Student Association",
      "Competitive Programming Club",
      "Open Source Community",
    ],
  },
];
