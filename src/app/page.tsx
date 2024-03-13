"use client";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import questionMotion from "@/app/assets/Animation-whyus.json";
import MotionImage from "@/components/hooks/motionImage";
import { Card } from "@/components/ui/card";
import { AvalableGameData, ListQuizeData } from "@/components/data";
import Image from "next/image";
import "@/app/globals.css";
import quizImage from "@/app/assets/Frame9.png";
import { PlayCircleIcon } from "lucide-react";
import { FcRating } from "react-icons/fc";
import styled from "styled-components";
import TipContentComponent from "@/components/top-content";
import FotterComponent from "@/components/fotter";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="flex flex-col items-start justify-start gap-5 h-fit  w-full font-serif ">
      <HeaderContainer className="flex flex-row items-center justify-between bg-slate-600 my-3 rounded-md w-[96%] p-5 mx-auto h-fit">
        <HeaderCol1 className="flex flex-col items-start justify-start flex-1 p-5 gap-2">
          <div className="flex flex-col items-start justify-start gap-2 w-[95%] md:w-[100%]">
            <span className=" text-center text-white font-extrabold text-4xl items-center max-md:justify-center flex flex-row w-full">
              Mi-Ni Quiz
              <br />
            </span>
            <span className="text-sm font-semibold text-slate-400 w-[80%] max-md:w-full italic">
              The Quiz For Champions! Here Champions meet champions on out game
              rank.
            </span>
            <Button className="mt-4 bg-yellow-600">Play Anonymously</Button>
          </div>
        </HeaderCol1>
        <div className="flex flex-row items-center justify-start flex-1 relative">
          <div className="flex flex-col items-center justify-start absolute top-[20%] left-0 gap-2 max-md:left-[20px]  z-30">
            {ListQuizeData.map((element, index) => {
              return (
                <Card
                  key={element.id}
                  data-aos-duration={`${index + 2}000`}
                  data-aos="fade-right"
                  className="w-[200px] text-white bg-slate-500 rounded-2xl flex flex-row items-center justify-center opacity-70 cursor-pointer hover:opacity-100 gap-1  max-md:opacity-60"
                >
                  <element.icon className="w-4 h-4 " />
                  <div className="w-[170px]">{element.text}</div>
                </Card>
              );
            })}
          </div>
          <MotionImage
            imageJson={questionMotion}
            loop={false}
            height="200px"
            width="300px"
          />
        </div>
      </HeaderContainer>
      <div className="px-4 py-2 flex flex-row text-white font-bold mt-3 w-[96%] p-5 mx-auto gap-8 overflow-x-scroll mb-2 hide-scrollbar">
        {AvalableGameData.map((element, index) => {
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
                    <PlayCircleIcon className="w-5 h-5 " color="white" />
                  </Button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
      <TipContentComponent />
      <FotterComponent />
    </div>
  );
}

const HeaderContainer = styled.div`
  @media screen and (max-width: 825px) {
    padding: 3px;
  }
  @media screen and (max-width: 668px) {
    flex-direction: column;
  }
`;

const HeaderCol1 = styled.div`
  @media screen and (max-width: 825px) {
    flex: 0.7;
  }

  @media screen and (max-width: 668px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
  }
`;
