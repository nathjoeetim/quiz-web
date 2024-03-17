"use client";
import Image from "next/image";
import courseImage from "@/app/assets/Frame9.png";
import styled from "styled-components";
import { RulesDialogComponent } from "@/components/rules";
import { QuizQuestionComponent } from "@/components/quizQuestion";
import AllQuizOptionComponent from "@/components/all_quiz";

function SelectedQuizComponent() {
  return (
    <>
      <ContainerSelectedQuiz className="flex flex-row items-start w-full px-10  py-10 gap-20 mt-10 mb-2">
        <div className="flex flex-col items-start gap-7 w-[300px]">
          <Image
            src={courseImage}
            alt="course-image"
            width={200}
            height={200}
            className="w-[300px] h-[200px] rounded-lg"
          />
          <div className="flex flex-row gap-5 w-full justify-end items-center">
            <RulesDialogComponent />
            <QuizQuestionComponent />
          </div>
          <div className="flex flex-row w-[200px] gap-6">{/*  */}</div>
          <p className="text-white font-normal text-justify">
            This quiz is equiped with the best and equiped for the mordern
            education standard.{" "}
          </p>
        </div>
        <div className="flex flex-col gap-4 text-white w-full">
          <h5 className=" font-bold text-3xl">Computer quiz</h5>
          <div className="flex flex-col gap-4">
            <p className="text-justify">
              This quiz is a highly competivive quiz with a minimum of 6
              questions to which the result will be displayed immidiately after
              the quiz . <br /> <br /> Best of luck!!!
            </p>
            <div className="flex flex-row items-center justify-start gap-3">
              <span className="text-slate-400 font-bold text-1xl">Level:</span>
              <span className="text-slate-400 font-normal text-lg">Basic</span>
            </div>
            <div className="flex flex-row items-center justify-start gap-3">
              <span className="text-slate-400 font-bold text-1xl">
                Maximum Question:
              </span>
              <span className="text-slate-400 font-normal text-lg">6</span>
            </div>
          </div>
        </div>
      </ContainerSelectedQuiz>
      <div className="flex flex-col items-center w-full my-8">
        <h4 className="text-2xl font-bold text-white ">
          Other Recommended Quiz
        </h4>
        <AllQuizOptionComponent />
      </div>
      {/* <div className="flex flex-col items-center w-full my-8">
        <h4 className="text-3xl font-bold text-white ">Top Players</h4>
        <div className="flex flex-col items-start justify-start w-full p-2 text-white gap-3">
          <div className="flex flex-row items-center gap-3 border-b-2 w-[350px] ">
            <span className="text-xl ">Jonas Samuel </span>
            <span className="text-slate-400">
              Score :{" "}
              <span className="text-slate-500">6 steak of full score</span>
            </span>
          </div>
          <div className="flex flex-row items-center gap-3 border-b-2  w-[350px] ">
            <span className="text-xl ">Frankline David </span>
            <span className="text-slate-400">
              Score :{" "}
              <span className="text-slate-500">3 steak of full score</span>
            </span>
          </div>
          <div className="flex flex-row items-center gap-3 border-b-2  w-[350px]">
            <span className="text-xl ">Joseph Edet </span>
            <span className="text-slate-400">
              Score :{" "}
              <span className="text-slate-500">2 steak of full score</span>
            </span>
          </div>
        </div>
      </div> */}
    </>
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
