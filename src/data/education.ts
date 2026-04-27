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
  color?: "teal" | "indigo" | "amber";
};

export const education: Education[] = [
  {
    id: "bachelor",
    degree: "Bachelor of Science",
    major: "Informatics Engineering",
    institution: "State University",
    color: "indigo",
    location: "Indonesia",
    start: "2019-09-01",
    end: "2023-08-31",
    gpa: "3.71",
    description: [
      "Active member of the computer science student organization.",
      "Participated in various programming competitions and hackathons, gaining practical experience in software development and problem-solving.",
    ],
    activities: [
      "Google Developer Student Clubs (GDSC)",
      "Competitive Programming Club",
      "Cyber Security & HackFest Club",
    ],
  },
  {
    id: "student",
    degree: "Technical Student",
    major: "Computer & Network Engineering",
    institution: "Bangun Nusa Bangsa Vocational School",
    color: "amber",
    location: "Indonesia",
    start: "2016-07-01",
    end: "2019-06-01",
    gpa: "3.71",
    description: [
      "Active member of the computer and network engineering student organization.",
      "Participated in various technical competitions and workshops, gaining practical experience in computer hardware, networking, and programming.",
    ],
    activities: [
      "Robotics Club",
    ],
  },
];
