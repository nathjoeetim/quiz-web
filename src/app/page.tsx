"use client";
import { Button } from "@/components/ui/button";

import type { Metadata } from "next";

import { Card } from "@/components/ui/card";
import { AvalableGameData } from "@/components/data";
import Image from "next/image";
import "@/app/globals.css";
import quizImage from "@/app/assets/Frame9.png";
import { PlayCircleIcon } from "lucide-react";
import { FcRating } from "react-icons/fc";
import TipContentComponent from "@/components/top-content";
import { useRouter } from "next/navigation";
import HeaderContainerComponent from "@/components/headerContainer";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-start justify-start gap-5 h-fit  w-full font-serif ">
      <HeaderContainerComponent />
      <div className="px-4 py-2 flex flex-row text-white font-bold mt-3 w-[96%] p-5 mx-auto gap-8 overflow-x-scroll mb-2 hide-scrollbar">
        {AvalableGameData.map((element, index) => {
          function onNavigateToQuizPage() {
            router.push("quiz");
          }
          return (
            <Card
              key={element.id}
              className="min-w-[180px] w-[180px] p-0 relative"
            >
              <Image
                src={quizImage.src}
                alt="game image"
                width={160}
                height={150}
                className="w-full h-[110px] cursor-pointer"
              />
              <div className="flex flex-col gap-1 p-2 justify-between">
                <h4
                  className="text-base font-medium text-slate-500 w-full underline"
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {element.name}
                </h4>
                <span className="flex flex-row w-full gap-0">
                  {Array.from({ length: element.rating }).map((_, index) => (
                    <FcRating key={index} />
                  ))}
                </span>
                <span className="text-slate-400 font-normal text-[11px] gap-2">
                  <span className="text-slate-500">Level: </span>
                  {element.level}
                </span>
                <div className="text-slate-400 font-normal text-[11px] flex flex-row items-center justify-between ">
                  <h4>Players: {element.active_players}</h4>
                  <Button className="bg-yellow-600 hover:bg-yellow-400 px-2 py-1">
                    <PlayCircleIcon
                      className="w-5 h-5 "
                      color="white"
                      onClick={onNavigateToQuizPage}
                    />
                  </Button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
      <TipContentComponent />
      {/* <FotterComponent /> */}
    </div>
  );
}
