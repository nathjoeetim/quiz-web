"use client";
import React, { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { CiPlay1 } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { OptionAlises, Questiondata } from "./data";

type Answer = {
  option: OptionAlises;
  correctAnswer: number;
};

// Initialize answers array outside the component
let answers: Answer[] = [];

export function QuizQuestionComponent() {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(Questiondata[index]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isSelected, setIsSelected] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number>();
  const [currentQuestionAnswer, setCurrentQuestionAnswer] = useState<Answer>();
  // this will get all the answers in the quiz
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswer: 0,
    wrongAnswers: 0,
  });

  useEffect(() => {
    const handleBeforeUnload = (e: any) => {
      // Cancel the event
      e.preventDefault();
      // Display confirmation dialog
      const confirmationMessage =
        "Are you sure you want to leave this page? data will be lost if site is refreshed.";
      e.returnValue = confirmationMessage;
      return confirmationMessage;
    };

    // window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      // Cleanup: remove the event listener when component unmounts
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  function onsubmitHandelerFn() {
    const correct = answers.filter(
      element => element.correctAnswer === element.option.id
    );
    // const TotalQuestion = Questiondata.length;
    const wrong = answers.filter(
      element => element.correctAnswer !== element.option.id
    );
    setShowResult(true);

    setResult({
      score: correct.length > 0 ? correct.length + 1 : correct.length,
      correctAnswer: correct.length > 0 ? correct.length + 1 : correct.length,
      wrongAnswers: wrong.length > 0 ? wrong.length + 1 : wrong.length,
    });
  }

  function onCheckAnswerFn() {
    setIsSelected(false);

    // Check if an answer is selected before pushing to answers array
    if (isSelected && currentQuestionAnswer) {
      answers.push(currentQuestionAnswer);
    }

    if (index === Questiondata.length - 1) {
      return;
    }

    setIndex(prevIndex => prevIndex + 1);
    setQuestion(Questiondata[index + 1]);
    setSelectedAnswer(null);
  }

  const onSelectedAnswer = (selectedAnswerOption: Answer) => {
    setCurrentQuestionAnswer(selectedAnswerOption);
    setIsSelected(true);
    setSelectedAnswerIndex(selectedAnswerOption.option.id);
    setSelectedAnswer(selectedAnswerOption.option.id);
  };

  function onCloseDialogFn() {
    setIndex(0);
    setQuestion(Questiondata[0]);
    answers = [];
    setShowResult(false);
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">
          <CiPlay1 size={20} color="yellow" className="cursor-pointer" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white w-[90%] text-[#262626]">
        {showResult ? (
          <AlertDialogHeader>
            <AlertDialogTitle className="border-b-2 border-bg-[#707070]">
              Results
            </AlertDialogTitle>
            <AlertDialogDescription className="flex flex-col gap-4">
              <span className="font-medium ">Score : {result.score}</span>
              <span className="font-medium ">
                Correct Answer : {result.correctAnswer} / {Questiondata.length}
              </span>
              <span className="font-medium ">
                Wrong Answer : {result.wrongAnswers} / {Questiondata.length}
              </span>
              <span className="font-medium ">
                Total Question : {Questiondata.length}
              </span>
              <AlertDialogFooter>
                <AlertDialogAction onClick={onCloseDialogFn}>
                  Close
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogDescription>
          </AlertDialogHeader>
        ) : (
          <AlertDialogHeader>
            <AlertDialogTitle className="border-b-2 border-bg-[#707070]">
              Quiz Question
            </AlertDialogTitle>
            <AlertDialogDescription className="flex flex-col gap-4">
              <span className="text-[18px] font-bold">
                {index + 1}. {question.question}
              </span>
              <span className="flex flex-col items-center justify-start gap-4 w-full">
                {question.options.map((element, index) => {
                  const selectedAnswerOption = {
                    option: element,
                    correctAnswer: question.ans,
                  };
                  return (
                    <span
                      onClick={() => onSelectedAnswer(selectedAnswerOption)}
                      key={element.id}
                      className={`flex items-center h-[40px] pl-[15px] border border-bg-[#686868] text-xl w-full cursor-pointer ${
                        selectedAnswer === element.id
                          ? "bg-[#dffff2] border-bg-[#00d397]"
                          : ""
                      }`}
                    >
                      {element.option1}
                    </span>
                  );
                })}
              </span>
              {isSelected ? (
                index === Questiondata.length - 1 ? (
                  <Button
                    className="m-auto h-10 bg-yellow-600 w-[110px] font-medium cursor-pointer"
                    onClick={onsubmitHandelerFn}
                  >
                    Submit
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    className="m-auto h-10 bg-yellow-600 w-[110px] font-medium cursor-pointer"
                    onClick={onCheckAnswerFn}
                  >
                    Next
                  </Button>
                )
              ) : (
                <Button
                  variant="outline"
                  className="m-auto h-10 bg-slate-500-600 w-[110px] font-medium cursor-not-allowed"
                  disabled
                >
                  Next
                </Button>
              )}
              <span className="m-auto">
                {index + 1} of {Questiondata.length} questions
              </span>
            </AlertDialogDescription>
          </AlertDialogHeader>
        )}
      </AlertDialogContent>
    </AlertDialog>
  );
}
