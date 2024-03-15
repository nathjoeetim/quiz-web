"use client";
import styled from "styled-components";
import MotionImage from "./hooks/motionImage";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import questionMotion from "@/app/assets/Animation-whyus.json";
import { ListQuizeData } from "./data";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

function HeaderContainerComponent() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
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
      <div className="flex flex-row items-center justify-start flex-1 relative h-fit">
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
          height="220px"
          width="300px"
        />
      </div>
    </HeaderContainer>
  );
}

export default HeaderContainerComponent;

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
