"use client";
import Image from "next/image";
import courseImage from "@/app/assets/Frame9.png";
import { CiPlay1 } from "react-icons/ci";
import { LuFileSpreadsheet } from "react-icons/lu";
import styled from "styled-components";

function SelectedQuizComponent() {
  return (
    <ContainerSelectedQuiz className="flex flex-row items-start w-full px-10 gap-20 mt-10 mb-2">
      <div className="flex flex-col items-start gap-7 w-[250px]">
        <Image
          src={courseImage}
          alt="course-image"
          width={200}
          height={200}
          className="w-[250px] h-[200px] rounded-lg "
        />
        <div className="flex flex-row gap-5 w-full justify-end items-center">
          <LuFileSpreadsheet
            size={20}
            color="yellow"
            className="cursor-pointer"
          />
          <CiPlay1 size={20} color="yellow" className="cursor-pointer" />
        </div>
        <div className="flex flex-row w-[200px] gap-6">{/*  */}</div>
        <p className="text-white font-normal text-justify">
          This is a math quiz equiped with the best and equiped for the mordern
          education standard.{" "}
        </p>
      </div>
      <div className="flex flex-col gap-4 text-white w-full">
        <h5 className=" font-bold text-3xl">Math quiz</h5>
        <div className="flex flex-col gap-4">
          <p className="text-justify">
            This Math quiz is a highly competivive quiz with a minimum of 20
            questions to which the result will be displayed immidiately after
            the quiz
          </p>
          <div className="flex flex-row items-center justify-start gap-4">
            <span className="text-slate-400 font-bold text-1xl">Level:</span>
            <span className="text-slate-400 font-normal text-lg">Basic</span>
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <span className="text-slate-400 font-bold text-1xl">
              Maximum Question:
            </span>
            <span className="text-slate-400 font-normal text-lg">20</span>
          </div>
        </div>
      </div>
    </ContainerSelectedQuiz>
  );
}

export default SelectedQuizComponent;

const ContainerSelectedQuiz = styled.div`
  & p {
    max-width: 500px;
  }
  @media screen and (max-width: 608px) {
    flex-direction: column;
    gap: 20px;

    & p {
      width: 100%;
    }
  }
`;
