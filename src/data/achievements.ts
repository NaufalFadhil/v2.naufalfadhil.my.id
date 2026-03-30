export type Achievement = {
  id: string;
  title: string;
  event: string;
  organizer: string;
  year: number;
  position?: string;
  description?: string;
  icon?: string;
};

export const achievements: Achievement[] = [
  {
    id: "hackathon-2024",
    title: "1st Place — AI Innovation Hackathon",
    event: "AI Innovation Hackathon 2024",
    organizer: "Ministry of Communications and IT",
    year: 2024,
    position: "1st Place",
    description:
      "Won first place with an AI-powered agricultural disease detection mobile app.",
    icon: "Trophy",
  },
  {
    id: "competitive-programming-2023",
    title: "Top 10 — National Competitive Programming",
    event: "ICPC Regional 2023",
    organizer: "ICPC Indonesia",
    year: 2023,
    position: "Top 10",
    description:
      "Reached the top 10 in the ICPC Indonesia Regional contest out of 200+ teams.",
    icon: "Code2",
  },
  {
    id: "capstone-2023",
    title: "Best Capstone Project",
    event: "Bangkit Academy Demo Day",
    organizer: "Bangkit Academy (Google, GoTo, Traveloka)",
    year: 2023,
    position: "Best Project",
    description:
      "Our team's ML-based mental health app was selected as one of the top 10 capstone projects.",
    icon: "Star",
  },
  {
    id: "open-source-2022",
    title: "Open Source Contributor",
    event: "Hacktoberfest 2022",
    organizer: "DigitalOcean",
    year: 2022,
    description: "Completed Hacktoberfest by contributing to 4 open source projects.",
    icon: "GitPullRequest",
  },
];
