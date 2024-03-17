"use client";
import type { Metadata } from "next";
import "@/app/globals.css";
import TipContentComponent from "@/components/top-content";
import HeaderContainerComponent from "@/components/headerContainer";
import AllQuizOptionComponent from "@/components/all_quiz";

export default function Home() {
  return (
    <div className="flex flex-col items-start justify-start gap-5 h-fit  w-full font-serif ">
      <HeaderContainerComponent />
      <AllQuizOptionComponent />
      <TipContentComponent />
    </div>
  );
}
