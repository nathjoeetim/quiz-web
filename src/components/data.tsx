import { LucideIcon, PlayCircle } from "lucide-react";

type listQuizAlises = {
  id: number;
  icon: LucideIcon;
  text: string;
};

export type AllQuizCardAlises = {
  id: number | string;
  name: string;
  rating: number;
  level: "Hard" | "Beginner" | "Intermidiate";
  active_players: number | string;
};
export type OptionAlises = {
  option1: string;
  id: number;
};

export type QuestionDataAlises = {
  id: number;
  question: string;
  options: OptionAlises[];
  ans: number;
};

export const AvalableGameData: AllQuizCardAlises[] = [
  {
    id: 120,
    active_players: 112,
    rating: 2,
    level: "Beginner",
    name: "Computer Quiz",
  },
  {
    id: 1234,
    active_players: 182,
    rating: 5,
    name: "Programing Quiz",
    level: "Intermidiate",
  },
  {
    id: 130,
    active_players: 152,
    rating: 1,
    level: "Intermidiate",
    name: "History Quiz",
  },
  {
    id: 10,
    active_players: 142,
    rating: 0,
    level: "Hard",
    name: "Science Quiz",
  },
  {
    id: 180,
    active_players: 12,
    rating: 5,
    level: "Intermidiate",
    name: "Science Quiz",
  },
  {
    id: 100,
    active_players: 42,
    rating: 4,
    name: "Science Quiz",
    level: "Hard",
  },
  {
    id: 1340,
    active_players: 42,
    rating: 4,
    name: "Science Quiz",
    level: "Hard",
  },
  {
    id: 1090,
    active_players: 42,
    rating: 4,
    name: "Science Quiz",
    level: "Hard",
  },
];

export const ListQuizeData: listQuizAlises[] = [
  {
    icon: PlayCircle,
    id: 1,
    text: "Take Math Quiz",
  },
  {
    icon: PlayCircle,
    id: 2,
    text: "Take English Quiz",
  },
  {
    icon: PlayCircle,
    id: 3,
    text: "Take word Quiz",
  },
  {
    icon: PlayCircle,
    id: 4,
    text: "Take Computer Quiz",
  },
];

export const Questiondata: QuestionDataAlises[] = [
  {
    id: 293,
    question: "Which device is required for the Internet connection?",
    options: [
      { id: 1, option1: "Modem" },
      { id: 2, option1: "Router" },
      { id: 3, option1: "LAN Cable" },
    ],
    ans: 1,
  },
  {
    id: 29,
    question: "Which continent has the highest number of countries?",
    options: [
      { id: 1, option1: "Asia" },
      { id: 2, option1: "Europe" },
      { id: 3, option1: "North America" },
      { id: 4, option1: "Africa" },
    ],
    ans: 4,
  },
  {
    id: 93,
    question: "Junk e-mail is also called?",
    options: [
      { id: 1, option1: "Spam" },
      { id: 2, option1: "Fake" },
      { id: 3, option1: "Archived" },
      { id: 4, option1: "Bin" },
    ],
    ans: 1,
  },
  {
    id: 223,
    question: "A computer cannot BOOT if it does not have the?",
    options: [
      { id: 1, option1: "Application Software" },
      { id: 2, option1: "Internet" },
      { id: 3, option1: "Operating System" },
      { id: 4, option1: "Mouse" },
    ],
    ans: 3,
  },
  {
    id: 22,
    question: "First page of Website is termed as?",
    options: [
      { id: 1, option1: "Index Page" },
      { id: 2, option1: "Homepage" },
      { id: 3, option1: "Sitemap" },
      { id: 4, option1: "Pen Drive" },
    ],
    ans: 2,
  },
  {
    id: 22,
    question: "How many css script can be created in a project ?",
    options: [
      { id: 1, option1: "1" },
      { id: 2, option1: "2" },
      { id: 3, option1: "I don't know" },
      { id: 4, option1: "Multiple" },
    ],
    ans: 4,
  },
];
