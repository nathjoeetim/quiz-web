import { LucideIcon, PlayCircle } from "lucide-react";

type listQuizAlises = {
  id: number;
  icon: LucideIcon;
  text: string;
};

type AllQuizCardAlises = {
  id: number | string;
  name: string;
  rating: number;
  level: "Hard" | "Beginner" | "Intermidiate";
  active_players: number | string;
};

export const AvalableGameData: AllQuizCardAlises[] = [
  {
    id: 120,
    active_players: 112,
    rating: 2,
    level: "Beginner",
    name: "Science Quiz",
  },
  {
    id: 1234,
    active_players: 182,
    rating: 5,
    name: "Math Quiz",
    level: "Intermidiate",
  },
  {
    id: 130,
    active_players: 152,
    rating: 1,
    level: "Intermidiate",
    name: "English Quiz",
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
